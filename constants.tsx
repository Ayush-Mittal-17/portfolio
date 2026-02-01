
import { ProfileData } from './types';

export const PROFILE: ProfileData = {
  name: "Ayush Mittal",
  title: "Full-Stack Engineer & AI Developer",
  bio: "Passionate about building scalable web applications and distributed systems. I specialize in React, Node.js, Express.js, MongoDB, MySQL, Python and FastAPIs. I love solving complex problems and providing real-time solutions.",
  email: "mittalayush989@gmail.com",
  location: "New Delhi, India",
  github: "https://github.com/Ayush-Mittal-17",
  linkedin: "https://www.linkedin.com/in/ayushmittal17/",
  twitter: "https://twitter.com",
  skills: [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 90, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 95, category: "Frontend" },
    { name: "Vite", level: 85, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },
    { name: "FastAPI", level: 80, category: "Backend" },
    { name: "MongoDB", level: 85, category: "Databases" },
    { name: "PostgreSQL", level: 85, category: "Databases" },
    { name: "SQL", level: 85, category: "Databases" },
    { name: "Appwrite", level: 80, category: "Databases" },
    { name: "LLM Training & Integration", level: 85, category: "Generative AI" },
    { name: "LangChain", level: 70, category: "Generative AI" },
    { name: "Prompt Engineering", level: 90, category: "Generative AI" },
    { name: "RESTful APIs", level: 70, category: "Architecture" },
    { name: "OOP", level: 90, category: "Architecture" },
    { name: "DSA", level: 70, category: "Architecture" },
    { name: "AWS", level: 75, category: "Cloud & Deploy" },
    { name: "Vercel", level: 90, category: "Cloud & Deploy" },
    { name: "Docker", level: 75, category: "Cloud & Deploy" },
    { name: "Git", level: 90, category: "Version Control" },
    { name: "GitHub", level: 90, category: "Version Control" },
    { name: "C/C++", level: 80, category: "Languages" },
    { name: "Java", level: 70, category: "Languages" },
    { name: "Python", level: 90, category: "Languages" },
  ],
  experiences: [
    {
      id: "exp1",
      role: "Software and AI Developer",
      company: "Trusting Brains IT Solutions Private Limited",
      period: "January'2026 - Present",
      description: [
        "Spearheading the development of live enterprise projects by building responsive UI with Vite and React and engineering high-performance backends using Python and FastAPI.",
        "Leading the lifecycle of Large Language Models (LLMs), training and integrating into production environments, enabling intelligent automation features within live applications.",
        "Designing and optimizing relational SQL databases and RESTful APIs to ensure secure, low-latency data flow between complex AI models and the frontend UI."
      ]
    },
    {
      id: "exp2",
      role: "Full Stack Web Developer",
      company: "Renu Sharma Healthcare and Education Foundation",
      period: "August'2025 - November'2025",
      description: [
        "Contributed to the development of an Intern Management System enabling HODs to assign tasks, monitor intern progress, and allowing CEOs to track overall team performance.",
        "Managed database design and login authorization using Appwrite while supporting both frontend and backend features.",
        "Gained hands-on experience working in a collaborative, fast-paced development environment, strengthening problem-solving skills and deepening knowledge in full-stack web development."
      ]
    },
    {
      id: "exp3",
      role: "Frontend Web Developer",
      company: "IBM SkillsBuild Internship Program Hosted By CSRBox",
      period: "June'2024 - August'2024",
      description: [
        "Led a team of 5 interns to develop a sustainability-focused educational platform providing free learning resources to rural communities on creating reusable and recyclable products.",
        "Contributed to building an integrated marketplace module that allowed users to showcase and sell the sustainable items they created through the platform.",
        "Enhanced leadership, coordination, and full-stack development skills by driving project planning, task delegation, and smooth collaboration throughout the internship."
      ]
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Nebula Dashboard",
      description: "A comprehensive real-time analytics dashboard for monitoring distributed cloud infrastructure.",
      image: "https://picsum.photos/seed/nebula/800/600",
      tags: ["React", "D3.js", "Firebase"],
      link: "#"
    },
    {
      id: "p2",
      title: "EcoSphere E-Commerce",
      description: "A high-performance headless commerce platform focused on sustainable products.",
      image: "https://picsum.photos/seed/eco/800/600",
      tags: ["Next.js", "Prisma", "Stripe"],
      link: "#"
    },
    {
      id: "p3",
      title: "FoodZy",
      description: "A smart dining companion that suggests the perfect meal based on real-time weather conditions. The application features a built-in price comparison engine for platforms like Zomato and Swiggy, helping users make cost-effective choices through a seamless, responsive interface.",
      image: "./assets/foodzy.jpeg",
      tags: ["React", "MySQL", "Python"],
      link: "https://foodzy-nine.vercel.app/"
    }
  ]
};