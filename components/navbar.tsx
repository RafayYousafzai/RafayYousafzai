import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { IconBrandFiverr, IconBrandLinkedin } from "@tabler/icons-react";

import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">Rafay Yousafzai</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Discord"
            href="https://www.linkedin.com/in/rafay-yousafzai-177568260/"
          >
            <IconBrandLinkedin className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Discord"
            href="https://www.fiverr.com/rafay_yousafzai/"
          >
            <IconBrandFiverr className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Github"
            href="https://github.com/RafayYousafzai"
          >
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
