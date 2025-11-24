"use client";

import { motion } from "framer-motion";
import { Experience } from "@/data/experience";
import { formatDate } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-foreground/10 hidden md:block" />

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

            <div
              className={`ml-16 md:ml-0 ${
                index % 2 === 0 ? "md:mr-1/2 md:pr-8" : "md:ml-1/2 md:pl-8"
              }`}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-1">
                      {experience.jobTitle}
                    </h3>
                    <div className="flex items-center gap-2 text-foreground/60 mb-2">
                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                          {experience.company}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span>{experience.company}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>
              {experience.type && (
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mt-2 md:mt-0 capitalize">
                  {experience.type}
                </span>
              )}
                </div>
                <p className="text-foreground/80 mb-4">{experience.description}</p>
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-foreground/70">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-foreground/5 text-foreground/60 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

