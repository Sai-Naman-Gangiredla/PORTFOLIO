export interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  type: "fulltime" | "internship" | "none";
  companyUrl?: string;
  companyLogo?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    jobTitle: "Computer Science Engineering Student",
    company: "VIT-AP University",
    location: "Amaravathi, India",
    startDate: ,
    endDate: ,
    description: "Pursuing Bachelor of Technology in Computer Science and Engineering. Actively involved in academic projects, research, and skill development. Working on various projects spanning web development, mobile app development, and AI/ML applications.",
    achievements: [
      "Developed multiple full-stack projects including BrewIt PWA, Product Analyzer, and Bone Fracture Detection system",
      "Created Android applications (Day Organizer App, NutriPlan) using Java and Kotlin",
      "Completed research paper on Real-Time Traffic Prediction Using Deep Learning and Edge Computing",
      "Maintained excellent academic performance while working on personal projects",
      "Actively contributing to open-source projects on GitHub",
      "Participated in various technical workshops and certifications",
    ],
    technologies: ["Python", "Java", "JavaScript", "HTML/CSS", "Android", "Machine Learning", "Deep Learning", "Flask"],
    type: "none",
  },
];

export const getExperiencesByType = (type: string) => {
  if (type === "all") return experiences;
  return experiences.filter((exp) => exp.type === type);
};

