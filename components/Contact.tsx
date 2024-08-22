"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { IconCheck, IconSend } from "@tabler/icons-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tyz3gpg", // Replace with your EmailJS service ID
        "template_dn91oge", // Replace with your EmailJS template ID
        e.target,
        "MLHM2vfEVuIMaAkil" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br w-full">
      <div className="w-full max-w-2xl bg-opacity-80 backdrop-blur-lg p-3 space-y-8 relative overflow-hidden">
        <div className="absolute inset-0 w-full opacity-10" />
        <motion.div
          animate="visible"
          className="space-y-2 text-center relative z-10"
          initial="hidden"
          variants={formVariants}
        >
          <motion.p variants={childVariants}>
            We do love to hear from you. Send us a message!
          </motion.p>
        </motion.div>

        {!isSubmitted ? (
          <motion.form
            animate="visible"
            className="space-y-6 relative z-10"
            initial="hidden"
            variants={formVariants}
            onSubmit={handleSubmit}
          >
            <motion.div className="space-y-2" variants={childVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Input
                  fullWidth
                  required
                  className="w-full py-1 rounded-lg border border-transparent transition duration-200 ease-in-out"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  size="lg"
                />
              </motion.div>
            </motion.div>
            <motion.div className="space-y-2" variants={childVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Input
                  fullWidth
                  required
                  className="w-full py-1 rounded-lg border border-transparent transition duration-200 ease-in-out"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  size="lg"
                  type="email"
                />
              </motion.div>
            </motion.div>
            <motion.div className="space-y-2" variants={childVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Input
                  fullWidth
                  required
                  className="w-full py-1 rounded-lg border border-transparent transition duration-200 ease-in-out"
                  id="subject"
                  name="subject"
                  placeholder="Message subject"
                  size="lg"
                />
              </motion.div>
            </motion.div>
            <motion.div className="space-y-2" variants={childVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Textarea
                  required
                  className="w-full py-1 rounded-lg border border-transparent transition duration-200 ease-in-out min-h-[100px]"
                  id="message"
                  name="message"
                  placeholder="Your message"
                />
              </motion.div>
            </motion.div>
            <motion.div variants={childVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-1 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                  type="submit"
                >
                  <IconSend className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <IconCheck className="mx-auto h-16 w-16 text-green-500" />
            <h3 className="text-2xl font-semibold  ">Thank You!</h3>
            <p className=" ">
              Your message has been sent successfully. We will get back to you
              soon.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
