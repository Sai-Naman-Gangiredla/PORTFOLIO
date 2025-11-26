import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ScreenshotGallery from "@/components/ProjectModal";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Sai Naman Gangiredla`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/projects">
            <button className="mb-8 px-4 py-2 border rounded-md hover:bg-primary/10 transition">
              ← Back to Projects
            </button>
          </a>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-foreground/60 mb-8">
              {project.longDescription}
            </p>

            {/* TECH */}
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

            {/* LINKS */}
            <div className="flex gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank">
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition">
                    Live Demo
                  </button>
                </a>
              )}

              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank">
                  <button className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition">
                    View Code
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT BELOW */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* PROBLEM / SOLUTION */}
            {project.problem && project.solution && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-xl bg-background/50">
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    Problem
                  </h2>
                  <p>{project.problem}</p>
                </div>

                <div className="p-6 border rounded-xl bg-background/50">
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    Solution
                  </h2>
                  <p>{project.solution}</p>
                </div>
              </div>
            )}

            {/* FEATURES */}
            {project.features && project.features.length > 0 && (
              <div className="p-6 border rounded-xl bg-background/50">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Key Features
                </h2>

                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SCREENSHOTS — using the advanced viewer */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Screenshots
                </h2>

                <ScreenshotGallery
                  screenshots={project.screenshots}
                  title={project.title}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
