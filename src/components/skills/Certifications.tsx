"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { certifications } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { Award, ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <div>
      <h2 className="text-3xl font-heading font-bold mb-6">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow h-full flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-heading font-semibold mb-1">{cert.name}</h3>
                  <p className="text-sm text-foreground/60 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-foreground/50 mb-3">
                    {formatDate(cert.date)}
                  </p>
                  {cert.documentUrl && (
                    <a
                      href={cert.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      View Certificate
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
              {cert.image && (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-foreground/10">
                  <Image
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    fill
                    className="object-contain bg-background"
                  />
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

