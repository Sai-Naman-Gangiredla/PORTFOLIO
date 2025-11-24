import PageHeader from "@/components/ui/PageHeader";
import SkillsGrid from "@/components/skills/SkillsGrid";
import Certifications from "@/components/skills/Certifications";
import { skills } from "@/data/skills";

export const metadata = {
  title: "Skills & Technologies | Sai Naman Gangiredla",
  description: "Technologies and tools I work with",
};

const categories = ["frontend", "backend", "design", "tools", "languages"];

export default function SkillsPage() {
  return (
    <div>
      <PageHeader
        title="Skills & Technologies"
        description="Technologies and tools I work with"
      />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <SkillsGrid key={category} skills={skills} category={category} />
              ))}
            </div>
            <Certifications />
          </div>
        </div>
      </section>
    </div>
  );
}
