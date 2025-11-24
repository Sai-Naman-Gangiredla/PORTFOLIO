"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [filteredCategory, setFilteredCategory] = useState<string>("all");

  const filteredProjects =
    filteredCategory === "all"
      ? projects
      : projects.filter((project) => project.category === filteredCategory);

  return (
    <div className="space-y-8">
      <ProjectFilter
        selectedCategory={filteredCategory}
        onCategoryChange={setFilteredCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-foreground/60">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}

