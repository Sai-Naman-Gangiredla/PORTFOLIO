export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "frontend" | "backend" | "fullstack" | "design";
  image: string;
  slug: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  problem?: string;
  solution?: string;
  features?: string[];
  screenshots?: string[];
  pdfUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BrewIt",
    description: "A comprehensive, interactive Progressive Web App (PWA) featuring 170+ coffee recipes with detailed instructions, nutrition information, and customization options.",
    longDescription: "BrewIt is a feature-rich Progressive Web App designed for coffee enthusiasts. It provides access to 170+ coffee recipes with detailed brewing instructions, nutrition information, and customization options. The app is installable on any device with offline functionality and optimized mobile navigation. Built with mobile-first approach, it includes service workers for offline support, web app manifest for installation, rich UI interactions, lazy-loaded images, flavor-profile charts via Chart.js, and persistent favorites via localStorage.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PWA", "Chart.js", "Service Workers"],
    category: "fullstack",
    image: "/images/brewit.jpg",
    slug: "brewit",
    liveUrl: "https://sai-naman-gangiredla.github.io/BrewIt/",
    githubUrl: "https://github.com/Sai-Naman-Gangiredla/BrewIt",
    featured: true,
    problem: "Coffee enthusiasts needed a comprehensive, offline-accessible resource for coffee recipes and brewing techniques.",
    solution: "Created a Progressive Web App with 170+ recipes, offline functionality, and rich interactive features for an enhanced user experience.",
    features: [
      "170+ coffee recipes with detailed instructions",
      "Progressive Web App (PWA) with offline support",
      "Installable on any device",
      "Nutrition information for each recipe",
      "Customization options",
      "Flavor-profile charts using Chart.js",
      "Persistent favorites using localStorage",
      "Mobile-first responsive design",
      "Lazy-loaded images for performance",
      "Service workers for offline functionality",
    ],
    screenshots: ["/images/brewit-1.jpg"],
  },
  {
    id: 2,
    title: "Product Analyzer",
    description: "An AI-powered multimodal classification project that analyzes both images and text to predict product categories.",
    longDescription: "Product Analyzer is an AI-powered multimodal classification system developed as a final-year project. It combines computer vision and natural language processing to analyze both product images and descriptions for accurate category prediction. The system uses a custom deep-learning pipeline with CNN-based visual processing and NLP feature extraction, merged in a fusion layer for improved accuracy. The model is trained and deployed via a Flask web application, with saved weights for easy deployment.",
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Flask", "NLP", "Deep Learning", "CNN"],
    category: "fullstack",
    image: "/images/product-analyzer.jpg",
    slug: "product-analyzer",
    githubUrl: "https://github.com/Sai-Naman-Gangiredla/Product-Analyzer-",
    featured: true,
    problem: "E-commerce platforms needed accurate product categorization that considers both visual and textual information.",
    solution: "Developed a multimodal AI system that combines image and text analysis for more accurate product classification.",
    features: [
      "Multimodal classification (image + text)",
      "CNN-based visual processing",
      "NLP feature extraction",
      "Fusion layer for improved accuracy",
      "Flask web application for deployment",
      "Pre-trained model weights",
      "Real-time prediction",
      "Comprehensive data preprocessing",
    ],
    screenshots: ["/images/product-analyzer.jpg"],
  },
  {
    id: 3,
    title: "Bone Fracture Detection Using ML and Deep Learning",
    description: "A web application to detect bone fractures from X-ray images using deep learning.",
    longDescription: "A Flask-based web application that classifies bone fractures from X-ray images using advanced machine learning and deep learning techniques. The system uses a pre-trained MobileNetV2 model for image validation and a custom ML classifier for fracture detection. The app predicts fracture presence and simulates fracture type, severity, and location, along with confidence scores. Built with Python, TensorFlow/Keras, scikit-learn, and image processing via Pillow. The UI is built with HTML, CSS, and Bootstrap, with data workflows documented in Jupyter Notebooks.",
    technologies: ["Python", "TensorFlow", "Keras", "Flask", "scikit-learn", "MobileNetV2", "OpenCV", "Pillow", "HTML", "CSS", "Bootstrap"],
    category: "fullstack",
    image: "/images/bone-fracture.jpg",
    slug: "bone-fracture-detection",
    githubUrl: "https://github.com/Sai-Naman-Gangiredla/Bone-fracture-detection-using-ML-and-Deep-Learning-",
    featured: true,
    problem: "Medical professionals needed an automated tool to assist in detecting bone fractures from X-ray images.",
    solution: "Developed a deep learning-based web application that accurately detects fractures and provides detailed analysis including type, severity, and location.",
    features: [
      "X-ray image analysis using deep learning",
      "Pre-trained MobileNetV2 for image validation",
      "Custom ML classifier for fracture detection",
      "Fracture type, severity, and location prediction",
      "Confidence scores for predictions",
      "Flask web interface",
      "User-friendly Bootstrap UI",
      "Comprehensive Jupyter Notebook documentation",
    ],
    screenshots: [
      "/images/bone-fracture-1.jpg",
      "/images/bone-fracture-2.jpg",
    ],
  },
  {
    id: 4,
    title: "Day Organizer App",
    description: "A modern, feature-rich daily planner and task management Android application built with Java and Material Design.",
    longDescription: "Day Organizer is a comprehensive daily task management Android application designed to help users organize and keep track of all their tasks and activities. Built with Java and following Material Design principles, the app features a modern, intuitive interface with dark/light themes. It includes features for adding, editing, deleting, and categorizing tasks with priority levels, auto-suggestions, and an undo-delete feature for better usability. The app uses SQLite for local data storage and integrates implicit intents for task sharing.",
    technologies: ["Java", "Android", "SQLite", "Material Design", "RecyclerView", "CalendarView"],
    category: "fullstack",
    image: "/images/day-organizer.jpg",
    slug: "day-organizer-app",
    githubUrl: "https://github.com/Sai-Naman-Gangiredla/DayOrganizer-App",
    featured: true,
    problem: "Users needed a simple yet powerful tool to organize daily tasks and activities on their mobile devices.",
    solution: "Created a feature-rich Android app with Material Design, task categorization, priority levels, and intuitive user experience.",
    features: [
      "Add, edit, delete, and categorize tasks",
      "Material Design UI components",
      "Dark/light theme support",
      "Priority levels for tasks",
      "Auto-suggestions",
      "Undo-delete feature",
      "SQLite local data storage",
      "Task sharing via implicit intents",
      "CalendarView integration",
      "RecyclerView for efficient list rendering",
    ],
    screenshots: ["/images/day-organizer-2.jpg"],
  },
  {
    id: 5,
    title: "NutriPlan",
    description: "An Android app to track meals and record them using Java and Kotlin.",
    longDescription: "NutriPlan is a meal tracking Android application that helps users monitor their daily nutrition intake. The app allows users to record meals, track nutritional information, and maintain a comprehensive food diary. Built with both Java and Kotlin, it provides a seamless experience for users to manage their dietary habits and nutritional goals.",
    technologies: ["Java", "Kotlin", "Android", "SQLite"],
    category: "fullstack",
    image: "/images/nutriplan.jpg",
    slug: "nutriplan",
    githubUrl: "https://github.com/Sai-Naman-Gangiredla/NutriPlan",
    featured: false,
    problem: "People needed an easy way to track their meals and monitor nutritional intake.",
    solution: "Developed a user-friendly Android app for meal tracking and nutritional recording.",
    features: [
      "Meal recording and tracking",
      "Nutritional information tracking",
      "Food diary management",
      "Local data storage",
      "User-friendly interface",
    ],
    screenshots: [
      "/images/nutriplan-1.jpg",
      "/images/nutriplan-2.jpg",
    ],
  },
  {
    id: 6,
    title: "Research Paper: Real-Time Traffic Prediction Using Deep Learning and Edge Computing",
    description: "A research paper submitted on Real-Time Traffic Prediction Using Deep Learning and Edge Computing.",
    longDescription: "A comprehensive research paper exploring the application of deep learning and edge computing for real-time traffic prediction. The paper discusses methodologies, algorithms, and implementation strategies for predicting traffic patterns in real-time scenarios, contributing to the field of intelligent transportation systems.",
    technologies: ["Deep Learning", "Edge Computing", "Python", "Research"],
    category: "backend",
    pdfUrl: "/documents/traffic-prediction.pdf",
    image: "/projects/traffic-prediction.png",
    slug: "traffic-prediction-research",
    githubUrl: "https://github.com/Sai-Naman-Gangiredla/Research-paper-on-Real-Time-Traffic-Prediction-Using-Deep-Learning-and-Edge-Computing-",
    featured: false,
    problem: "Traffic management systems needed accurate real-time prediction capabilities.",
    solution: "Researched and documented deep learning approaches combined with edge computing for real-time traffic prediction.",
    features: [
      "Deep learning models for traffic prediction",
      "Edge computing integration",
      "Real-time prediction algorithms",
      "Comprehensive research documentation",
      "Methodology and implementation details",
    ],
  },
];

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string) => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

