"use client";
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { IconCheck, IconSend } from "@tabler/icons-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
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
    <div className="min-h-screen  ">
      <div className="container mx-auto px-4">
        <div className=" mx-auto">
          <Card className=" shadow-none">
            <CardBody className="p-8 pt-0 lg:p-12">
              {!isSubmitted ? (
                <motion.form
                  animate="visible"
                  className="space-y-6"
                  initial="hidden"
                  variants={formVariants}
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <motion.div className="space-y-2" variants={childVariants}>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Input
                          fullWidth
                          required
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          size="lg"
                          variant="flat"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div className="space-y-2" variants={childVariants}>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Input
                          fullWidth
                          required
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          size="lg"
                          variant="flat"
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div className="space-y-2" variants={childVariants}>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Input
                        fullWidth
                        required
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        size="lg"
                        variant="flat"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div className="space-y-2" variants={childVariants}>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Textarea
                        required
                        id="message"
                        name="message"
                        placeholder="Tell us more about your project, ideas, or questions..."
                        variant="flat"
                        classNames={{
                          input: "min-h-[150px]",
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={childVariants}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-6 text-lg"
                        size="lg"
                      >
                        <IconSend className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.form>
              ) : (
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <IconCheck className="mx-auto h-20 w-20 text-green-500" />
                  </motion.div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    Thank You!
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Your message has been sent successfully. We appreciate you
                    reaching out and will get back to you within 24 hours.
                  </p>
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-3"
                      onPress={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
