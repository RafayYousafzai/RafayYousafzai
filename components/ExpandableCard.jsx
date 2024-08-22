"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
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
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              animate={{
                opacity: 1,
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
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
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              layoutId={`card-${active.title}-${id}`}
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  height={200}
                  src={active.coverPhotoUrl}
                  width={200}
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                      layoutId={`title-${active.title}-${id}`}
                    >
                      {active.title}
                    </motion.h3>
                  </div>

                  <motion.a layoutId={`button-${active.title}-${id}`}>
                    <ButtonGroup>
                      <Button
                        isIconOnly
                        onPress={() => router.push(active.github)}
                      >
                        <GithubIcon />
                      </Button>
                      <Button
                        isIconOnly
                        onPress={() => router.push(active.preview)}
                      >
                        <IconBrandGoogleBigQuery />
                      </Button>
                    </ButtonGroup>
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    animate={{ opacity: 1 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.description}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {projects &&
          projects.map((card) => (
            <motion.div
              key={`card-${card.title}-${id}`}
              className="p-4 flex flex-col sm:flex-row w-full justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
              layoutId={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
            >
              <div className="flex w-full gap-4 flex-col sm:flex-row ">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    alt={card.title}
                    className=" aspect-square w-full sm:h-14  rounded-lg object-cover object-top"
                    height={100}
                    src={card.coverPhotoUrl}
                    width={100}
                  />
                </motion.div>
                <div className="">
                  <motion.h3
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center sm:text-left"
                    layoutId={`title-${card.title}-${id}`}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    className="text-neutral-600 dark:text-neutral-400 text-center sm:text-left"
                    layoutId={`description-${card.description}-${id}`}
                  >
                    {truncateString(card.description, 30)}
                  </motion.p>
                </div>
              </div>
              <motion.button layoutId={`button-${card.title}-${id}`}>
                <ButtonGroup>
                  <Button isIconOnly onPress={() => router.push(card.github)}>
                    <GithubIcon />
                  </Button>
                  <Button isIconOnly onPress={() => router.push(card.preview)}>
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
