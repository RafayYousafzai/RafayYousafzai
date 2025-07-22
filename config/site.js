import {
  IconApps,
  IconBrandBlogger,
  IconCash,
  IconFrame,
  IconHome,
  IconMessageCircleCode,
} from "@tabler/icons-react";

export const siteConfig = {
  name: "Rafay Khan",
  description:
    "Software Engineer | Full Stack Mobile App and Website Developer.",
  navItems: [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      label: "About",
      href: "/about",
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
        "I build complete web platforms — from clean, scalable frontends to powerful backend systems — tailored to your business goals.",
    },
    {
      title: "Cross-Platform Mobile Apps",
      description:
        "Using React Native and Supabase, I develop mobile apps that work seamlessly across iOS and Android — fast, reliable, and user-friendly.",
    },
    {
      title: "Backend & Database Integration",
      description:
        "I connect your app to secure, real-time databases and robust backend logic — so your data flows smoothly and stays protected.",
    },
    {
      title: "Custom API Development",
      description:
        "Need to connect multiple systems or build your own API? I design and build custom APIs that power smooth integrations and automation.",
    },
    {
      title: "UI/UX Design",
      description:
        "I create intuitive interfaces that not only look great but also guide users effortlessly through your app or website.",
    },
    {
      title: "App Deployment & Hosting",
      description:
        "From setup to launch, I handle deployment on platforms like Firebase, Vercel, or Supabase — ensuring speed, reliability, and zero stress.",
    },
    {
      title: "Performance Optimization",
      description:
        "I audit and fine-tune your app for speed, load time, and responsiveness — so users stay engaged and your platform runs at its best.",
    },
  ],
  tiers: [
    {
      name: "Startup",
      monthlyPrice: 300,
      yearlyPrice: 2880,
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
      monthlyPrice: 799,
      yearlyPrice: 7670,
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
    github: "https://github.com/RafayYousafzai",
    facebook: "https://www.facebook.com/abdulrafay.khan.1804109/",
    instagram: "https://www.instagram.com/rafay_yousafzai/",
    fiverr: "https://www.fiverr.com/rafay_yousafzai/",
    linkedin: "https://www.linkedin.com/in/rafay-yousafzai-177568260/",
  },
};
