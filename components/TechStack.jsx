"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Chip } from "@nextui-org/react";
import {
  IconBrandAdobePhotoshop,
  IconBrandReactNative,
} from "@tabler/icons-react";
import { useState } from "react";

import {
  SiAdobexd,
  SiAmazon,
  SiAngular,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGooglecloud,
  SiJavascript,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { title } from "./primitives";

const technologies = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="size-4" />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="size-4" />,
    category: "Frontend",
  },
  {
    name: "React",
    icon: <SiReact className="size-4" />,
    category: "Frontend",
  },
  {
    name: "React Native",
    icon: <IconBrandReactNative className="size-8" size={40} />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="size-4" />,
    category: "Frontend",
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs className="size-4" />,
    category: "Frontend",
  },
  {
    name: "Angular",
    icon: <SiAngular className="size-4" />,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="size-4" />,
    category: "Backend",
  },
  {
    name: "Python",
    icon: <SiPython className="size-4" />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="size-4" />,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="size-4" />,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="size-4" />,
    category: "Database",
  },
  {
    name: "Redis",
    icon: <SiRedis className="size-4" />,
    category: "Database",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="size-4" />,
    category: "Cloud",
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="size-4" />,
    category: "Cloud",
  },
  { name: "AWS", icon: <SiAmazon className="size-4" />, category: "Cloud" },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud className="size-4" />,
    category: "Cloud",
  },
  {
    name: "Azure",
    icon: <SiMicrosoftazure className="size-4" />,
    category: "Cloud",
  },
  {
    name: "Docker",
    icon: <SiDocker className="size-4" />,
    category: "DevOps",
  },
  { name: "Git", icon: <SiGit className="size-4" />, category: "DevOps" },
  { name: "Figma", icon: <SiFigma className="size-4" />, category: "Design" },
  {
    name: "Adobe XD",
    icon: <SiAdobexd className="size-4" />,
    category: "Design",
  },
  {
    name: "Photoshop",
    icon: <IconBrandAdobePhotoshop className="size-4" />,
    category: "Design",
  },
];

export default function TechStack() {
  // State variables for filtering and searching//+
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTech = technologies.filter(
    (tech) =>
      (filter === "All" || tech.category === filter) &&
      tech.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [
    "All",
    ...new Set(technologies.map((tech) => tech.category)),
  ];

  return (
    <section className="py-12 px-4 md:px-6 rounded-2xl bg-slate-200 dark:bg-zinc-900 mb-20 opacity-60 backdrop-blur-md ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category}
              className="text-sm"
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mb-6">
          <Input
            className="max-w-md mx-auto"
            placeholder="Search technologies..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap mx-auto justify-center gap-4">
          {filteredTech.map((tech) => (
            <Button
              key={tech.name}
              className="sm:w-56  w-full flex items-center justify-start"
              endContent={
                <Chip color="warning" size="sm">
                  {tech.category}
                </Chip>
              }
              size="lg"
              startContent={tech.icon}
              variant="solid"
            >
              <p className="text-sm">{tech.name}</p>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
