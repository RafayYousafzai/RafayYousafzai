"use client";

import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { SiUpwork, SiWhatsapp } from "react-icons/si";

export default function Hero() {
  const handleSocialClick = (platform) => {
    const links = {
      github: "https://github.com/RafayYousafzai", // Replace with your actual GitHub username
      whatsapp: "https://wa.me/+923289462807", // Replace with your WhatsApp number
      linkedin: "https://www.linkedin.com/in/rafay-yousafzai-177568260/", // Replace with your LinkedIn profile
      upwork: "https://www.linkedin.com/in/rafay-yousafzai-177568260/", // Replace with your Upwork profile
    };

    window.open(links[platform], "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-32">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

      {/* Floating Code Elements */}
      <div className="absolute top-1/4 left-1/4 opacity-10 dark:opacity-5">
        <div className="animate-float text-6xl font-mono text-blue-500">
          {"{ }"}
        </div>
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-10 dark:opacity-5">
        <div className="animate-float-delayed text-4xl font-mono text-purple-500">
          {"</>"}
        </div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 opacity-10 dark:opacity-5">
        <div className="animate-float-slow text-5xl font-mono text-green-500">
          {"( )"}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              Hello, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                Rafay
              </span>
            </h1>
          </div>

          {/* Title */}
          <div className="animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
              Software Developer
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              I craft digital solutions with clean code and innovative thinking.
              Passionate about creating seamless user experiences and robust
              applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="bordered"
              size="lg"
              className="px-8 py-6 text-lg font-medium border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Resume
            </Button>
          </div>

          {/* Social Media Buttons */}
          <div className="animate-fade-in-up animation-delay-600">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
              Let's connect
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <Tooltip content="GitHub" placement="top">
                <Button
                  onClick={() => handleSocialClick("github")}
                  isIconOnly
                  variant="light"
                  size="lg"
                >
                  <Github className="w-8 h-8 text-slate-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                </Button>
              </Tooltip>

              <Tooltip content="WhatsApp" placement="top">
                <Button
                  onClick={() => handleSocialClick("whatsapp")}
                  isIconOnly
                  variant="light"
                  size="lg"
                >
                  <SiWhatsapp className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                </Button>
              </Tooltip>

              <Tooltip content="LinkedIn" placement="top">
                <Button
                  onClick={() => handleSocialClick("linkedin")}
                  isIconOnly
                  variant="light"
                  size="lg"
                >
                  <Linkedin className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                </Button>
              </Tooltip>

              <Tooltip content="Upwork" placement="top">
                <Button
                  onClick={() => handleSocialClick("upwork")}
                  isIconOnly
                  variant="light"
                  size="lg"
                >
                  <SiUpwork className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
