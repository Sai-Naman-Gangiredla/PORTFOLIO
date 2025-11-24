"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function ResumeStats() {
  const calculateYearsOfExperience = () => {
    if (experiences.length === 0) return 0;
    const oldestDate = new Date(
      Math.min(...experiences.map((exp) => new Date(exp.startDate).getTime()))
    );
    const years = (new Date().getTime() - oldestDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(years);
  };

  const years = calculateYearsOfExperience();

  const stats = [
    {
      label: "Experience",
      display: years < 1 ? "Fresher" : `${years}+ years`,
      link: "/experience",
    },
    {
      label: "Projects",
      display: `${projects.length}+`,
      link: "/projects",
    },
    {
      label: "Skills",
      display: `${skills.length}+`,
      link: "/skills",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-2xl font-heading font-bold mb-6">Key Highlights</h3>
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={stat.link}
                className="flex items-center justify-between p-4 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-colors group"
              >
                <div>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                  <p className="text-2xl font-heading font-bold">{stat.display}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-2xl font-heading font-bold mb-4">Quick Links</h3>
        <div className="space-y-2">
          <Link
            href="/experience"
            className="block text-foreground/60 hover:text-primary transition-colors"
          >
            → View Experience
          </Link>
          <Link
            href="/projects"
            className="block text-foreground/60 hover:text-primary transition-colors"
          >
            → View Projects
          </Link>
          <Link
            href="/skills"
            className="block text-foreground/60 hover:text-primary transition-colors"
          >
            → View Skills
          </Link>
          <Link
            href="/contact"
            className="block text-foreground/60 hover:text-primary transition-colors"
          >
            → Get In Touch
          </Link>
        </div>
      </Card>
    </div>
  );
}

