"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";

const tiers = [
  {
    name: "Startup",
    monthlyPrice: 999,
    yearlyPrice: 9990,
    features: [
      "Mobile App (iOS & Android)",
      "Web App",
      "Backend API",
      "Basic Analytics",
      "5 Admin Users",
      "Basic Support",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 2499,
    yearlyPrice: 24990,
    features: [
      "All Startup features",
      "Advanced Analytics",
      "20 Admin Users",
      "Priority Support",
      "CI/CD Setup",
      "Custom Branding",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Growth features",
      "Unlimited Admin Users",
      "24/7 Dedicated Support",
      "Custom Integrations",
      "On-Premise Deployment Option",
      "SLA Agreement",
    ],
  },
];

export default function Component() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        animate={{ y: 0 }}
        className="text-2xl font-bold text-center mb-4"
        initial={{ y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Pricing Plans
      </motion.h2>

      <motion.div
        animate={{ opacity: 1 }}
        className="flex justify-center items-center space-x-4 mb-8"
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <span>Monthly</span>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} />
        <span>Yearly (20% off)</span>
      </motion.div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            animate={{ opacity: 1, y: 0 }}
            className=" rounded-lg dark:bg-zinc-900   p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0, duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
          >
            <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={isYearly ? "yearly" : "monthly"}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold mb-4"
                exit={{ opacity: 0, y: 20 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tier.price
                  ? tier.price
                  : `$${isYearly ? tier.yearlyPrice / 100 : tier.monthlyPrice}${isYearly ? "/year" : "/month"}`}
              </motion.p>
            </AnimatePresence>
            <ul className="mb-6 space-y-2">
              {tier.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{
                    delay: 0.8 + index * 0.1 + featureIndex * 0.05,
                    duration: 0.3,
                  }}
                >
                  <span className="mr-2">•</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full">
                {tier.price === "Custom" ? "Contact Us" : "Get Started"}
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
