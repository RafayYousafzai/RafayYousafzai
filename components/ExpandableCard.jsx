"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button, ButtonGroup } from "@nextui-org/button";
import { IconBrandGoogleBigQuery } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { GithubIcon } from "./icons";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useFirebase } from "@/context/FirebaseContext";

export function ExpandableCard() {
  const router = useRouter();
  const { projects } = useFirebase();
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              animate={{
                opacity: 1,
              }}
              className="flex absolute top-6 right-6 lg:top-4 lg:right-4 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg z-10"
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              initial={{
                opacity: 0,
              }}
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              ref={ref}
              className="w-full max-w-6xl h-full max-h-[90vh] flex flex-col lg:flex-row bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
              layoutId={`card-${active.title}-${id}`}
            >
              {/* Image Section */}
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="lg:w-1/2 flex-shrink-0"
              >
                <Image
                  priority
                  alt={active.title}
                  className="w-full h-64 lg:h-full lg:aspect-square rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none object-cover object-center"
                  height={500}
                  src={active.coverPhotoUrl || "/placeholder.svg"}
                  width={500}
                />
              </motion.div>

              {/* Content Section */}
              <div className="lg:w-1/2 flex flex-col overflow-hidden">
                {/* Header with title and buttons */}
                <div className="flex justify-between items-start p-6 border-b border-neutral-200 dark:border-neutral-700 flex-shrink-0">
                  <div className="flex-1 pr-4">
                    <motion.h3
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-xl lg:text-2xl"
                      layoutId={`title-${active.title}-${id}`}
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                  <motion.div layoutId={`button-${active.title}-${id}`}>
                    <ButtonGroup>
                      <Button
                        isIconOnly
                        size="lg"
                        onPress={() => router.push(active.github)}
                      >
                        <GithubIcon />
                      </Button>
                      <Button
                        isIconOnly
                        size="lg"
                        onPress={() => router.push(active.preview)}
                      >
                        <IconBrandGoogleBigQuery />
                      </Button>
                    </ButtonGroup>
                  </motion.div>
                </div>

                {/* Scrollable Description */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6">
                    <motion.div
                      layout
                      animate={{ opacity: 1 }}
                      className="text-neutral-600 dark:text-neutral-400 text-base lg:text-lg leading-relaxed"
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.description}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-6xl mx-auto w-full gap-8 space-y-8">
        {projects &&
          projects.map((card) => (
            <motion.div
              key={`card-${card.title}-${id}`}
              className="p-4 flex flex-col lg:flex-row w-full justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              layoutId={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
            >
              <div className="flex w-full gap-8 flex-col lg:flex-row items-center lg:items-start">
                <motion.div
                  layoutId={`image-${card.title}-${id}`}
                  className="flex-shrink-0"
                >
                  <Image
                    alt={card.title}
                    className="w-full lg:w-32 aspect-square rounded-xl object-cover object-center"
                    height={500}
                    src={card.coverPhotoUrl || "/placeholder.svg"}
                    width={500}
                  />
                </motion.div>
                <div className="flex-1 text-center lg:text-left">
                  <motion.h3
                    className="font-bold text-neutral-800 dark:text-neutral-200 text-xl lg:text-2xl mb-3"
                    layoutId={`title-${card.title}-${id}`}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    className="text-neutral-600 dark:text-neutral-400 text-base lg:text-lg leading-relaxed"
                    layoutId={`description-${card.description}-${id}`}
                  >
                    {truncateString(card.description, 120)}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="mt-6 lg:mt-0 lg:ml-8"
              >
                <ButtonGroup>
                  <Button
                    isIconOnly
                    size="lg"
                    onPress={() => router.push(card.github)}
                  >
                    <GithubIcon />
                  </Button>
                  <Button
                    isIconOnly
                    size="lg"
                    onPress={() => router.push(card.preview)}
                  >
                    <IconBrandGoogleBigQuery />
                  </Button>
                </ButtonGroup>
              </motion.button>
            </motion.div>
          ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      animate={{
        opacity: 1,
      }}
      className="h-4 w-4 text-black"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      fill="none"
      height="24"
      initial={{
        opacity: 0,
      }}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
