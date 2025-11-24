import PageHeader from "@/components/ui/PageHeader";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Sai Naman Gangiredla",
  description: "A collection of my recent work and projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="My Projects"
        description="A collection of my recent work and projects"
      />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </div>
  );
}
