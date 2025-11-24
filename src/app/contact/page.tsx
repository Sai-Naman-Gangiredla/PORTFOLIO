import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact | Sai Naman Gangiredla",
  description: "Get in touch with me for opportunities and collaborations",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Get In Touch"
        description="Let's work together on your next project"
      />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
