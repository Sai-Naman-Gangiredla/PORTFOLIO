"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Skill, getSkillLevelPercentage } from "@/data/skills";

interface SkillBarProps {
  skill: Skill;
}

export default function SkillBar({ skill }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);
  const percentage = getSkillLevelPercentage(skill.level);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage]);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-foreground/60 capitalize">{skill.level}</span>
      </div>
      <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
          style={{ width: isInView ? `${width}%` : "0%" }}
        />
      </div>
    </div>
  );
}

