import {
  IconBrandAdobePhotoshop,
  IconBrandReactNative,
} from "@tabler/icons-react";
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

const technologies = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-4 h-4" />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-4 h-4" />,
    category: "Frontend",
  },
  {
    name: "React",
    icon: <SiReact className="w-4 h-4" />,
    category: "Frontend",
  },
  {
    name: "React Native",
    icon: <IconBrandReactNative className="w-8 h-8" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-4 h-4" />,
    category: "Frontend",
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs className="w-4 h-4" />,
    category: "Frontend",
  },
  {
    name: "Angular",
    icon: <SiAngular className="w-4 h-4" />,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-4 h-4" />,
    category: "Backend",
  },
  {
    name: "Python",
    icon: <SiPython className="w-4 h-4" />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-4 h-4" />,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-4 h-4" />,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-4 h-4" />,
    category: "Database",
  },
  {
    name: "Redis",
    icon: <SiRedis className="w-4 h-4" />,
    category: "Database",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-4 h-4" />,
    category: "Cloud",
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="w-4 h-4" />,
    category: "Cloud",
  },
  { name: "AWS", icon: <SiAmazon className="w-4 h-4" />, category: "Cloud" },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud className="w-4 h-4" />,
    category: "Cloud",
  },
  {
    name: "Azure",
    icon: <SiMicrosoftazure className="w-4 h-4" />,
    category: "Cloud",
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-4 h-4" />,
    category: "DevOps",
  },
  { name: "Git", icon: <SiGit className="w-4 h-4" />, category: "DevOps" },
  { name: "Figma", icon: <SiFigma className="w-4 h-4" />, category: "Design" },
  {
    name: "Adobe XD",
    icon: <SiAdobexd className="w-4 h-4" />,
    category: "Design",
  },
  {
    name: "Photoshop",
    icon: <IconBrandAdobePhotoshop className="w-4 h-4" />,
    category: "Design",
  },
];

export default technologies;
