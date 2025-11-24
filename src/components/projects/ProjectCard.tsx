"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = Boolean(project.image);
  const pdfUrl = (project as any).pdfUrl as string | undefined;

  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg relative overflow-hidden">
        {hasImage ? (
          <Image
            src={project.image as string}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
            <span className="text-5xl mb-2">{pdfUrl ? "📄" : "🚀"}</span>
            {pdfUrl && (
              <span className="text-sm font-semibold text-foreground/70">
                PDF Resource
              </span>
            )}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
        <p className="text-foreground/60 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-foreground/10 text-foreground/60 text-sm rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {pdfUrl ? (
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex-grow">
              <Button variant="outline" className="w-full">
                View PDF
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          ) : (
            <Link href={`/projects/${project.slug}`} className="flex-grow">
              <Button variant="outline" className="w-full">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          {(project.liveUrl || pdfUrl) && (
            <a
              href={project.liveUrl || pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

