import PageHeader from "@/components/ui/PageHeader";
import ResumePreview from "@/components/resume/ResumePreview";
import ResumeStats from "@/components/resume/ResumeStats";

export const metadata = {
  title: "Resume | Sai Naman Gangiredla",
  description: "Download my resume or view it online",
};

export default function ResumePage() {
  return (
    <div>
      <PageHeader
        title="Resume"
        description="Download my resume or view it online"
      />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ResumePreview />
              </div>
              <div>
                <ResumeStats />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
