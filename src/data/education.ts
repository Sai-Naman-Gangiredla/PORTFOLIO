export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description?: string;
  coursework?: string[];
  gpa?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "VIT-AP University",
    location: "Amaravathi, India",
    startDate: "2021-08",
    endDate: "2025-08",
    description: "Completed my engineering in August 2021 with a strong focus on software engineering, algorithms, web development, machine learning, and deep learning.",
    coursework: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Web Development",
      "Software Engineering",
      "Machine Learning",
      "Deep Learning",
      "Computer Networks",
      "Operating Systems",
    ],
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "Tirumala Junior College",
    location: "Tallavalasa, Visakhapatnam, India",
    startDate: "2019",
    endDate: "2021",
    description: "Completed intermediate education with focus on mathematics and science.",
  },
  {
    id: 3,
    degree: "High School",
    institution: "Sri Chaitanya Techno School",
    location: "Visakhapatnam, India",
    startDate: "2015",
    endDate: "2018",
    description: "Completed high school education with focus on mathematics and science.",
  },
];

