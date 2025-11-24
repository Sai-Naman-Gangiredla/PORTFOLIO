"use client";

import PageHeader from "@/components/ui/PageHeader";
import { education } from "@/data/education";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function EducationPage() {
  return (
    <div>
      <PageHeader
        title="Education"
        description="My academic background and qualifications"
      />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-foreground/80 mb-3">{edu.institution}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {formatDate(edu.startDate)} - {edu.endDate === "Present" ? "Present" : formatDate(edu.endDate)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      
                      {edu.description && (
                        <p className="text-foreground/70 mb-3">{edu.description}</p>
                      )}
                      
                      {edu.gpa && (
                        <p className="text-sm text-foreground/60 mb-3">
                          <span className="font-semibold">GPA:</span> {edu.gpa}
                        </p>
                      )}
                      
                      {edu.coursework && edu.coursework.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-foreground/5 text-foreground/70 text-sm rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

