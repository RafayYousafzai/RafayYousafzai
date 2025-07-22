"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Code,
  Sparkles,
  Zap,
  Database,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Custom hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

export default function Hero() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const isMobile = useIsMobile();

  const skills = [
    { name: "Next.js", icon: Globe, color: "text-blue-400" },
    { name: "TypeScript", icon: Code, color: "text-purple-400" },
    { name: "TailwindCSS", icon: Sparkles, color: "text-pink-400" },
    { name: "Supabase", icon: Database, color: "text-green-400" },
  ];

  const links = {
    github: "https://github.com/RafayYousafzai",
    whatsapp: "https://wa.me/+923289462807",
    linkedin: "https://www.linkedin.com/in/rafay-yousafzai-177568260/",
    upwork:
      "https://www.upwork.com/freelancers/~01b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6",
    resume:
      "https://docs.google.com/document/d/1zkW9F-hHm1QM40myXIvIoJKdkGlIGTV9Le_zSiy2xR8/edit?usp=sharing",
    work: "/projects",
  };

  // Only enable mouse tracking on desktop
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMobile) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });

        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const rotateX = (e.clientY - centerY) / 50;
          const rotateY = (e.clientX - centerX) / 50;

          cardRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
        }
      });
    },
    [isMobile]
  );

  useEffect(() => {
    setIsLoaded(true);

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // Cycle through skills
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2500);

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      clearInterval(skillInterval);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove, skills.length, isMobile]);

  const handleSocialClick = (platform: keyof typeof links) => {
    window.open(links[platform], "_blank");
  };

  // Animation variants - disabled on mobile
  const fadeInUp = isMobile
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      };

  const MotionDiv = isMobile ? "div" : motion.div;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden  -mt-24">
      {/* Background - only on desktop */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-20 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 50%)`,
          }}
        />
      )}

      {/* Particles - only on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-30"
              style={{
                left: `${20 + i * 10}%`,
                top: `${20 + i * 8}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            >
              <div className="w-1 h-1 bg-blue-400 rounded-full blur-[0.5px]" />
            </div>
          ))}
        </div>
      )}

      {/* Geometric Shapes - only on desktop */}
      {!isMobile && (
        <>
          <div className="absolute top-20 left-20 w-24 h-24 border border-blue-500/10 rounded-full animate-spin-slow opacity-30" />
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-purple-500/10 rotate-45 animate-pulse opacity-30" />
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-12">
        <div className="w-full max-w-none mx-auto text-center">
          {/* Full Width Card */}
          <div
            ref={cardRef}
            className={`
              backdrop-blur-sm bg-white/60 dark:bg-black/20 rounded-3xl 
              px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16
              transition-all duration-300 ease-out
              ${!isMobile ? "will-change-transform" : ""}
            `}
            style={!isMobile ? { transformStyle: "preserve-3d" } : {}}
          >
            {/* Main Heading */}
            <MotionDiv
              {...(isMobile
                ? {}
                : {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                  })}
            >
              <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900 dark:text-white/90">
                  Hey, I'm{" "}
                  <span
                    className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ${!isMobile ? "animate-gradient" : ""}`}
                  >
                    Rafay
                  </span>
                </span>
              </h1>
            </MotionDiv>

            {/* Skills Showcase */}
            <MotionDiv
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
              {...(isMobile
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
                  })}
            >
              <MotionDiv
                key={currentSkill}
                className="flex items-center gap-2"
                {...(isMobile
                  ? {}
                  : {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 0.4, ease: "easeOut" },
                    })}
              >
                {React.createElement(skills[currentSkill].icon, {
                  className: `w-4 h-4 sm:w-5 sm:h-5 ${skills[currentSkill].color}`,
                })}
                <span
                  className={`text-base sm:text-lg font-semibold ${skills[currentSkill].color}`}
                >
                  {skills[currentSkill].name}
                </span>
              </MotionDiv>
              <span className="text-base sm:text-lg text-gray-800 dark:text-white/80">
                Software Developer
              </span>
            </MotionDiv>

            {/* Description */}
            <MotionDiv
              className="space-y-4 sm:space-y-6 mb-8 sm:mb-12"
              {...(isMobile
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
                  })}
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-white/70 mx-auto leading-relaxed">
                I am a software developer with 3+ years of hands-on experience
                building web and mobile platforms for startups and businesses. I
                specialize in Next.js, TypeScript, TailwindCSS, & Supabase to
                create fast, scalable, and user-friendly solutions.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-white/60 mx-auto">
                From social applications to CRMs, dashboards, and transportation
                systems with live tracking and automation. I build tools that
                grow with businesses and deliver real impact.
              </p>
            </MotionDiv>

            {/* CTA Buttons */}
            <MotionDiv
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12"
              {...(isMobile
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.8, ease: "easeOut" },
                  })}
            >
              <Link
                href={links.work}
                onMouseEnter={() => router.prefetch(links.work)}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className={`
                    w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 
                    text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-2xl 
                    shadow-lg hover:shadow-xl transition-all duration-300 border-0
                    ${!isMobile ? "hover:scale-105 will-change-transform" : ""}
                  `}
                >
                  <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>

              <Link
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="bordered"
                  size="lg"
                  className={`
                    w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-2xl 
                    border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white 
                    hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all duration-300
                    ${!isMobile ? "hover:scale-105 will-change-transform" : ""}
                  `}
                >
                  Download Resume
                </Button>
              </Link>
            </MotionDiv>

            {/* Social Links */}
            <MotionDiv
              {...(isMobile
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 1, ease: "easeOut" },
                  })}
            >
              <p className="text-gray-500 dark:text-white/50 mb-4 sm:mb-6 text-sm">
                Let's connect and build something amazing
              </p>
              <div className="flex justify-center items-center gap-3 sm:gap-4">
                {[
                  { icon: Github, platform: "github" as const },
                  { icon: Linkedin, platform: "linkedin" as const },
                ].map(({ icon: Icon, platform }) => (
                  <button
                    key={platform}
                    onClick={() => handleSocialClick(platform)}
                    className={`
                      group p-3 sm:p-4 rounded-2xl bg-gray-100/50 dark:bg-white/5 
                      border border-gray-200/30 dark:border-white/10 
                      hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-300
                      ${!isMobile ? "hover:scale-110 will-change-transform" : ""}
                    `}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-white/60 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                  </button>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
