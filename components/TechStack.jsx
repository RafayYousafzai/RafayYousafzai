"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Chip } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import technologies from "@/constant/TechStack";

export default function TechStack() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const filteredTech = technologies.filter(
    (tech) =>
      (filter === "All" || tech.category === filter) &&
      tech.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [
    "All",
    ...new Set(technologies.map((tech) => tech.category)),
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      animate={controls}
      className="py-12 px-4 md:px-6 rounded-2xl bg-slate-200 dark:bg-zinc-900 mb-20 backdrop-blur-md"
      initial="hidden"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-6"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="text-sm"
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mb-6" variants={itemVariants}>
          <Input
            className="max-w-md mx-auto"
            placeholder="Search technologies..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap mx-auto justify-center gap-4"
          variants={containerVariants}
        >
          {filteredTech.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="sm:w-56 w-full flex items-center justify-start"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
