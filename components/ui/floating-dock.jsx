"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

const FloatingDock = ({ items, className }) => {
  return (
    <>
      <FloatingDockDesktop className={className} items={items} />
    </>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "mx-auto flex h-16 gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className,
      )}
      onMouseLeave={() => !isMobile && mouseX.set(Infinity)}
      onMouseMove={(e) => !isMobile && mouseX.set(e.pageX)}
    >
      {items.map((item) => (
        <IconContainer
          key={item.label}
          isMobile={isMobile}
          mouseX={mouseX}
          {...item}
        />
      ))}
    </div>
  );
};

function IconContainer({ mouseX, label, icon, href, isMobile }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <div
        ref={ref}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
        style={{
          width: isMobile ? 40 : width,
          height: isMobile ? 40 : height,
        }}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
      >
        {!isMobile && (
          <AnimatePresence>
            {hovered && (
              <motion.div
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                exit={{ opacity: 0, y: 2, x: "-50%" }}
                initial={{ opacity: 0, y: 10, x: "-50%" }}
              >
                {label}
              </motion.div>
            )}
          </AnimatePresence>
        )}
        <motion.div
          className="flex items-center justify-center"
          style={{
            width: isMobile ? 20 : widthIcon,
            height: isMobile ? 20 : heightIcon,
          }}
        >
          {icon}
        </motion.div>
      </div>
    </Link>
  );
}

export default FloatingDock;
