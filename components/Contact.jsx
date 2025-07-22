"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { IconCheck, IconSend } from "@tabler/icons-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tyz3gpg",
        "template_dn91oge",
        e.target,
        "MLHM2vfEVuIMaAkil"
      )
      .then(
        (_result) => {
          setIsSubmitted(true);
        },
        (_error) => {}
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
    <div className="w-full bg-gradient-to-br pb-20">
      <div className="w-full bg-opacity-80 backdrop-blur-lg p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute inset-0 w-full opacity-10" />

        {!isSubmitted ? (
          <motion.form
            animate="visible"
            className="relative z-10 w-full max-w-6xl mx-auto"
            initial="hidden"
            variants={formVariants}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <motion.div className="space-y-3" variants={childVariants}>
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Full Name
                  </label>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Input
                      fullWidth
                      required
                      className="w-full"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      size="lg"
                      variant="flat"
                    />
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-3" variants={childVariants}>
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Email Address
                  </label>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Input
                      fullWidth
                      required
                      className="w-full"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      size="lg"
                      type="email"
                      variant="flat"
                    />
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-3" variants={childVariants}>
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Subject
                  </label>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Input
                      fullWidth
                      required
                      className="w-full"
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      size="lg"
                      variant="flat"
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <motion.div
                  className="space-y-3 h-full"
                  variants={childVariants}
                >
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Message
                  </label>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-full"
                  >
                    <Textarea
                      required
                      className="w-full h-full "
                      classNames={{
                        input: "min-h-[200px] lg:min-h-[280px]",
                      }}
                      id="message"
                      name="message"
                      placeholder="Tell us more about your project, ideas, or questions..."
                      variant="flat"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Submit Button - Full Width */}
            <motion.div variants={childVariants} className="mt-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                  size="lg"
                  type="submit"
                >
                  <IconSend className="mr-3 h-5 w-5" /> Send Message
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 relative z-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <IconCheck className="mx-auto h-20 w-20 text-green-500" />
            </motion.div>
            <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Thank You!
            </h3>
            <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Your message has been sent successfully. We appreciate you
              reaching out and will get back to you within 24 hours.
            </p>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-3 rounded-lg"
                onPress={() => setIsSubmitted(false)}
              >
                Send Another Message
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
