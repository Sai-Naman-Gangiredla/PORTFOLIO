"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Card } from "@/components/ui/Card";

export default function AboutContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-heading font-bold mb-6">My Story</h2>
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">Values & Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalInfo.values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-foreground/60">{value.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">Interests</h2>
            <div className="flex flex-wrap gap-3">
              {personalInfo.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Beyond Academics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">Beyond Academics</h2>
            <Card className="p-6 hover:shadow-lg transition-shadow space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Outside the lab, I&apos;m heavily involved in event management and community initiatives.
                I have hosted and coordinated three flagship college events, owning everything from
                concept and branding to schedules, budgets, and on-stage hosting.
              </p>
              <ul className="list-disc pl-5 text-foreground/70 space-y-2">
                <li>
                  Led technical hackathons and ideathons, coordinating 100+ participants and multiple
                  sponsor partners.
                </li>
                <li>
                  Hosted cultural nights and orientation programs, managing stage schedules, anchor
                  scripts, and overall flow.
                </li>
                <li>
                  Organized volunteering drives, alumni meetups, and student club showcases that
                  blended tech and creativity.
                </li>
              </ul>
              <p className="text-foreground/80">
                These experiences sharpened my communication, planning, and leadership skills,
                helping me stay calm under pressure and deliver memorable experiences.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

