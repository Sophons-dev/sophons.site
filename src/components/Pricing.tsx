"use client";

import { siteOfferings } from "@/data/siteOfferings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div id="pricing" className="pt-12">
      <div className="relative mb-12">
        <span className="absolute -top-6 left-0 text-sm text-muted-foreground">
          Get an accurate estimate
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-white"
        >
          Free Consultation
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {siteOfferings.map((offering, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{offering.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {offering.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                {offering.inclusions.map((inclusion, inclusionIndex) => (
                  <div
                    key={inclusionIndex}
                    className={`text-sm flex items-start gap-2 ${
                      inclusionIndex === 0 ? "font-semibold" : ""
                    }`}
                  >
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{inclusion}</span>
                  </div>
                ))}
              </div>

              {offering.itemizedOptions.length > 0 && (
                <div className="pt-4 border-t">
                  {offering.itemizedOptions.map((option, optionIndex) => (
                    <div key={optionIndex} className="space-y-2">
                      <div className="text-sm font-semibold">
                        {option.label}
                      </div>
                      <div className="space-y-1 ml-2">
                        {option.options.map((subOption, subIndex) => (
                          <div
                            key={subIndex}
                            className="text-xs text-muted-foreground"
                          >
                            • {subOption}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
