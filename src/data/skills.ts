export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: "frontend" | "backend" | "design" | "tools" | "languages";
  icon?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeUrl?: string;
  documentUrl?: string;
  image?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", level: "advanced", category: "frontend" },
  { name: "CSS", level: "advanced", category: "frontend" },
  { name: "JavaScript", level: "advanced", category: "frontend" },
  { name: "React", level: "intermediate", category: "frontend" },
  { name: "Next.js", level: "intermediate", category: "frontend" },
  { name: "PWA", level: "intermediate", category: "frontend" },
  { name: "Bootstrap", level: "intermediate", category: "frontend" },
  
  // Backend
  { name: "Python", level: "advanced", category: "backend" },
  { name: "Flask", level: "intermediate", category: "backend" },
  { name: "REST APIs", level: "intermediate", category: "backend" },
  { name: "SQL", level: "intermediate", category: "backend" },
  
  // Mobile Development
  { name: "Java", level: "advanced", category: "languages" },
  { name: "Kotlin", level: "intermediate", category: "languages" },
  { name: "Android Development", level: "advanced", category: "tools" },
  { name: "Material Design", level: "intermediate", category: "design" },
  
  // AI/ML
  { name: "Machine Learning", level: "advanced", category: "tools" },
  { name: "Deep Learning", level: "advanced", category: "tools" },
  { name: "TensorFlow", level: "intermediate", category: "tools" },
  { name: "PyTorch", level: "intermediate", category: "tools" },
  { name: "OpenCV", level: "intermediate", category: "tools" },
  { name: "scikit-learn", level: "intermediate", category: "tools" },
  { name: "CNN", level: "intermediate", category: "tools" },
  { name: "NLP", level: "intermediate", category: "tools" },
  
  // Tools
  { name: "Git", level: "advanced", category: "tools" },
  { name: "GitHub", level: "advanced", category: "tools" },
  { name: "Jupyter Notebooks", level: "advanced", category: "tools" },
  { name: "SQLite", level: "intermediate", category: "tools" },
  
  // Languages
  { name: "Python", level: "advanced", category: "languages" },
  { name: "Java", level: "advanced", category: "languages" },
  { name: "JavaScript", level: "advanced", category: "languages" },
  { name: "HTML", level: "advanced", category: "languages" },
  { name: "CSS", level: "advanced", category: "languages" },
  { name: "SQL", level: "intermediate", category: "languages" },
  { name: "XML", level: "intermediate", category: "languages" },
  { name: "Kotlin", level: "intermediate", category: "languages" },
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    documentUrl: "/documents/azure-fundamentals.pdf",
    credentialUrl: "/documents/azure-fundamentals.pdf",
  },
  {
    id: 2,
    name: "1-Day AI Tools Workshop",
    issuer: "Be10x",
    date: "2024",
    documentUrl: "/documents/be10x.pdf",
    credentialUrl: "/documents/be10x.pdf",
  },
  {
    id: 3,
    name: "Google Certified Trainer Course",
    issuer: "Google Skillshop",
    date: "2024",
    documentUrl: "/documents/skillshop-certificate.pdf",
    credentialUrl: "/documents/skillshop-certificate.pdf",
  },
  {
    id: 4,
    name: "Python",
    issuer: "Kaggle",
    date: "2024",
    documentUrl: "/documents/kaggle.png",
    credentialUrl: "/documents/kaggle.png",
    image: "/documents/kaggle.png",
  },
];

export const getSkillsByCategory = (category: string) => {
  if (category === "all") return skills;
  return skills.filter((skill) => skill.category === category);
};

export function getSkillLevelPercentage(level: string): number {
  const levels: Record<string, number> = {
    beginner: 25,
    intermediate: 50,
    advanced: 75,
    expert: 95,
  };
  return levels[level] || 0;
}

