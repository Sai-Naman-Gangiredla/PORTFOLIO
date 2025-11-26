"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getProjectBySlug, projects } from "@/data/projects";
import Image from "next/image";
import { useState, useEffect } from "react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} | Sai Naman Gangiredla`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  const [openImage, setOpenImage] = useState<string | null>(null);

  // Close modal when pressing ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-foreground/60 mb-8">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {project.problem && project.solution && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-heading font-bold mb-4">Problem</h2>
                  <p className="text-foreground/80">{project.problem}</p>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-heading font-bold mb-4">Solution</h2>
                  <p className="text-foreground/80">{project.solution}</p>
                </Card>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <Card className="p-6">
                <h2 className="text-2xl font-heading font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* ------------------ SCREENSHOTS ------------------ */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Screenshots</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      onClick={() => setOpenImage(screenshot)}
                      className="relative overflow-hidden cursor-pointer aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg hover:opacity-80 transition"
                    >
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ------------------ IMAGE MODAL ------------------ */}
      {openImage && (
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999]"
            onClick={() => setOpenImage(null)}
          />

          {/* modal */}
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <img
              src={openImage}
              alt="Screenshot"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            />

            {/* close button */}
            <button
              onClick={() => setOpenImage(null)}
              className="absolute top-6 right-6 text-white text-4xl font-bold"
            >
              &times;
            </button>
          </div>
        </>
      )}
    </div>
  );
}
