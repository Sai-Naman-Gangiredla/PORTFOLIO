"use client";

import PageHeader from "@/components/ui/PageHeader";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import { experiences } from "@/data/experience";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader
        title="Experience & Academic Journey"
        description="My academic journey, projects, and achievements as a Computer Science Engineering student"
      />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Academic Experience</h2>
                <ExperienceTimeline experiences={experiences} />
              </div>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-4">About My Journey</h3>
                <p className="text-foreground/80 mb-4">
                  As a Computer Science Engineering student at VIT-AP University, I've been actively working on various projects 
                  spanning web development, mobile app development, and AI/ML applications. While I'm a fresher in the professional 
                  world, I bring enthusiasm, fresh perspectives, and a strong foundation in modern technologies.
                </p>
                <p className="text-foreground/80 mb-4">
                  I'm an excellent listener and doer, always ready to learn and adapt. I can handle multitasking, work under pressure, 
                  and complete assigned tasks with perfection. My projects demonstrate my ability to work with diverse technologies and 
                  solve real-world problems.
                </p>
                <p className="text-foreground/80">
                  I'm actively seeking opportunities to apply my skills, learn from experienced professionals, and contribute to 
                  meaningful projects. I'm open to internships, entry-level positions, and collaborative projects.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
