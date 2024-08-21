import {
  IconApps,
  IconBrandBlogger,
  IconBrandGithub,
  IconBrandX,
  IconCapProjecting,
  IconCash,
  IconCashOff,
  IconExchange,
  IconFrame,
  IconHome,
  IconMessageCircleCode,
  IconNewSection,
  IconTerminal2,
  IconUser,
} from "@tabler/icons-react";

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      label: "Services",
      href: "/services",
      icon: (
        <IconApps className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: (
        <IconCash className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      label: "Blog",
      href: "/blog",
      icon: (
        <IconBrandBlogger className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      label: "Projects",
      href: "/projects",
      icon: (
        <IconFrame className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <IconMessageCircleCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
