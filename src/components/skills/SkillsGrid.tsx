"use client";

import { motion } from "framer-motion";
import { Skill } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import SkillBar from "./SkillBar";

interface SkillsGridProps {
  skills: Skill[];
  category: string;
}

export default function SkillsGrid({ skills, category }: SkillsGridProps) {
  const categorySkills = skills.filter((skill) => skill.category === category);

  if (categorySkills.length === 0) return null;

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-heading font-bold mb-6 capitalize">{category}</h3>
      <div className="space-y-4">
        {categorySkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <SkillBar skill={skill} />
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

