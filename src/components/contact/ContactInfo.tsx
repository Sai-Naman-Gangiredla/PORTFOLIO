"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: personalInfo.socialLinks.email,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: personalInfo.socialLinks.github,
    },
    ...(personalInfo.socialLinks.linkedin ? [{
      icon: Linkedin,
      name: "LinkedIn",
      href: personalInfo.socialLinks.linkedin,
    }] : []),
    ...(personalInfo.socialLinks.twitter ? [{
      icon: Twitter,
      name: "Twitter",
      href: personalInfo.socialLinks.twitter,
    }] : []),
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-heading font-bold mb-6">Get in touch</h2>
        <div className="space-y-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">{method.label}</p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-foreground/80">{method.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-heading font-bold mb-6">Social Media</h2>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-foreground/5 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Icon className="h-6 w-6 text-foreground/60" />
              </motion.a>
            );
          })}
        </div>
      </Card>

      <Card className="p-6 bg-primary/5">
        <p className="text-sm text-foreground/60">
          I&apos;m always open to discussing new projects, creative ideas, internships, or entry-level opportunities. 
          As a fresher, I bring enthusiasm, fresh perspectives, and a strong foundation in modern technologies. 
          Let&apos;s connect and explore how we can work together!
        </p>
      </Card>
    </div>
  );
}

