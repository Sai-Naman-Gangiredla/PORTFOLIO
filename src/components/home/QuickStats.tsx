"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

// Calculate stats dynamically
const calculateYearsOfExperience = () => {
  if (experiences.length === 0) return 0;
  const oldestDate = new Date(
    Math.min(...experiences.map((exp) => new Date(exp.startDate).getTime()))
  );
  const years = (new Date().getTime() - oldestDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
  return Math.floor(years);
};

const stats = [
  { label: "Projects Completed", value: projects.length, suffix: "+" },
  { label: "Technologies Mastered", value: skills.length, suffix: "+" },
  { label: "GitHub Repositories", value: 21, suffix: "+" },
  { label: "Certifications", value: 4, suffix: "" },
];

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function QuickStats() {
  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-foreground/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

