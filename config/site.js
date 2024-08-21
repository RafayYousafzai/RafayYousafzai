import {
  IconApps,
  IconBrandBlogger,
  IconCash,
  IconFrame,
  IconHome,
  IconMessageCircleCode,
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
  services: [
    {
      title: "Full-Stack Web Development",
      description:
        "Scalable and responsive web applications using React.js, Next.js, and Firebase, delivering high-performance solutions.",
    },
    {
      title: "Cross-Platform Mobile Development",
      description:
        "Cross-platform mobile apps developed with React Native and Supabase, providing a seamless user experience on both iOS and Android.",
    },
    {
      title: "Backend Integration",
      description:
        "Robust backend solutions with Firebase and Supabase, ensuring secure and efficient data handling.",
    },
    {
      title: "Custom API Development",
      description:
        "Custom APIs tailored to your specific needs, enabling smooth integration and data flow between different systems.",
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive and engaging user interfaces, ensuring a smooth and visually appealing experience across all devices.",
    },
    {
      title: "App Deployment & Hosting",
      description:
        "Reliable app deployment and hosting on platforms like Firebase and Vercel, ensuring fast load times and minimal downtime.",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimization of applications for speed and efficiency, providing a fast and responsive user experience.",
    },
  ],
  tiers: [
    {
      name: "Startup",
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        "iOS & Android Mobile App",
        "Web Application",
        "Backend API Integration",
        "Basic Analytics Dashboard",
        "Access for 5 Admin Users",
        "Standard Support",
      ],
    },
    {
      name: "Growth",
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      features: [
        "Includes all Startup features",
        "Advanced Analytics & Reporting",
        "Access for 20 Admin Users",
        "Priority Support Service",
        "CI/CD Pipeline Setup",
        "Custom Branding Options",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Includes all Growth features",
        "Unlimited Admin User Access",
        "24/7 Dedicated Support",
        "Custom Integration Services",
        "On-Premise Deployment Available",
        "Service Level Agreement (SLA)",
      ],
    },
  ],
  blogs: [
    {
      description: "Lana Del Rey",
      title: "Summertime Sadness",
      src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      ctaText: "Visit",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated
            for her melancholic and cinematic music style. Born Elizabeth
            Woolridge Grant in New York City, she has captivated audiences
            worldwide with her haunting voice and introspective lyrics. <br />{" "}
            <br /> Her songs often explore themes of tragic romance, glamour,
            and melancholia, drawing inspiration from both contemporary and
            vintage pop culture. With a career that has seen numerous critically
            acclaimed albums, Lana Del Rey has established herself as a unique
            and influential figure in the music industry, earning a dedicated
            fan base and numerous accolades.
          </p>
        );
      },
    },
    {
      description: "Babbu Maan",
      title: "Mitran Di Chhatri",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      ctaText: "Visit",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Babu Maan, a legendary Punjabi singer, is renowned for his soulful
            voice and profound lyrics that resonate deeply with his audience.
            Born in the village of Khant Maanpur in Punjab, India, he has become
            a cultural icon in the Punjabi music industry. <br /> <br /> His
            songs often reflect the struggles and triumphs of everyday life,
            capturing the essence of Punjabi culture and traditions. With a
            career spanning over two decades, Babu Maan has released numerous
            hit albums and singles that have garnered him a massive fan
            following both in India and abroad.
          </p>
        );
      },
    },

    {
      description: "Metallica",
      title: "For Whom The Bell Tolls",
      src: "https://assets.aceternity.com/demos/metallica.jpeg",
      ctaText: "Visit",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Metallica, an iconic American heavy metal band, is renowned for
            their powerful sound and intense performances that resonate deeply
            with their audience. Formed in Los Angeles, California, they have
            become a cultural icon in the heavy metal music industry. <br />{" "}
            <br /> Their songs often reflect themes of aggression, social
            issues, and personal struggles, capturing the essence of the heavy
            metal genre. With a career spanning over four decades, Metallica has
            released numerous hit albums and singles that have garnered them a
            massive fan following both in the United States and abroad.
          </p>
        );
      },
    },
    {
      description: "Lord Himesh",
      title: "Aap Ka Suroor",
      src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
      ctaText: "Visit",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Himesh Reshammiya, a renowned Indian music composer, singer, and
            actor, is celebrated for his distinctive voice and innovative
            compositions. Born in Mumbai, India, he has become a prominent
            figure in the Bollywood music industry. <br /> <br /> His songs
            often feature a blend of contemporary and traditional Indian music,
            capturing the essence of modern Bollywood soundtracks. With a career
            spanning over two decades, Himesh Reshammiya has released numerous
            hit albums and singles that have garnered him a massive fan
            following both in India and abroad.
          </p>
        );
      },
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
