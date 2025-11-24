import PageHeader from "@/components/ui/PageHeader";
import ProfileImage from "@/components/about/ProfileImage";
import AboutContent from "@/components/about/AboutContent";
import { personalInfo } from "@/data/personal";
import { Mail, Phone, MapPin, Github } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Me | Sai Naman Gangiredla",
  description: "Get to know more about Sai Naman Gangiredla, a Computer Science Engineering student passionate about web development, mobile apps, and AI/ML.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Me"
        description="Get to know more about me, my journey, and my passion for technology"
      />
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <ProfileImage />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                {personalInfo.name}
              </h2>
              <p className="text-xl text-foreground/60 mb-4">{personalInfo.title}</p>
              
              <div className="flex flex-wrap justify-center gap-4 text-foreground/60 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href={personalInfo.socialLinks.email} className="hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <Link
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 rounded-lg transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutContent />
    </div>
  );
}
