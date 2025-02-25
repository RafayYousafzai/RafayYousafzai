"use client";

import { Button } from "@nextui-org/button";
import { IconView360 } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="w-full pb-10 bg-background">
      <div
        className={`container px-4 md:px-6 transition-opacity duration-1000 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none transform transition-all duration-1000 ${
                  loaded ? "translate-y-0" : "-translate-y-10"
                }`}
              >
                Rafay Yousafzai
              </h1>
              <p
                className={`text-xl text-muted-foreground transform transition-all duration-1000 ${
                  loaded ? "translate-y-0" : "translate-y-10"
                }`}
              >
                Full-Stack Developer & UI/UX Enthusiast
              </p>
            </div>
            <p
              className={`max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transform transition-all duration-1000 ${
                loaded ? "translate-y-0" : "translate-y-10"
              }`}
            >
              I am a Software Engineer specializing in creating full-stack
              mobile and web apps. With a passion for clean code and innovative
              design, I turn ideas into reality in the world.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href={
                  "https://docs.google.com/document/d/1zkW9F-hHm1QM40myXIvIoJKdkGlIGTV9Le_zSiy2xR8/edit?usp=sharing"
                }
              >
                <Button className="inline-flex items-center justify-center transform transition-transform duration-500 hover:scale-105">
                  My Resume
                  <IconView360 className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <img
            alt="Rafay Khan"
            className={`mx-auto aspect-square overflow-hidden rounded-full object-cover object-center sm:w-full lg:order-last transform transition-transform duration-1000 ${
              loaded ? "scale-100" : "scale-0"
            }`}
            height="550"
            src="/me.png"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
