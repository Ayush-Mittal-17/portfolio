export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        tagline: "Full-stack marketplace with real-time inventory",
        description: "Built a complete e-commerce solution with product catalog, cart management, secure checkout, and admin dashboard.",
        problem: "Local retailers needed an affordable way to sell online without complex setup or high fees.",
        approach: "Designed a modular architecture with React frontend, Node.js API, and MongoDB for flexible product schemas.",
        solution: "Delivered a production-ready platform with real-time stock updates, order tracking, and analytics dashboard.",
        metrics: [
            { label: "Load Time", value: "< 2s" },
            { label: "Uptime", value: "99.9%" },
            { label: "Products", value: "500+" }
        ],
        techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
        category: "Full-Stack",
        image: null,
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        tagline: "Collaborative project tracker with real-time updates",
        description: "A Kanban-style task manager with drag-and-drop, team collaboration, and deadline notifications.",
        problem: "Remote teams struggled with scattered tasks across emails, chats, and sticky notes.",
        approach: "Created an intuitive drag-and-drop interface with WebSocket integration for real-time sync.",
        solution: "Built a responsive app supporting multiple boards, task assignments, and automated reminders.",
        metrics: [
            { label: "Daily Users", value: "200+" },
            { label: "Tasks Created", value: "5K+" },
            { label: "Response", value: "< 100ms" }
        ],
        techStack: ["React", "Socket.io", "Express", "PostgreSQL"],
        category: "Full-Stack",
        image: null,
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Developer Portfolio",
        tagline: "This very site you're viewing",
        description: "A modern, performant portfolio showcasing frontend craft and attention to detail.",
        problem: "Needed a portfolio that stands out from typical developer websites and demonstrates product thinking.",
        approach: "Focused on typography, micro-interactions, and storytelling over flashy animations.",
        solution: "Created a fast, accessible site with subtle animations that enhance rather than distract.",
        metrics: [
            { label: "Lighthouse", value: "95+" },
            { label: "Load Time", value: "< 1s" },
            { label: "A11y Score", value: "100" }
        ],
        techStack: ["React", "Tailwind", "Framer Motion", "Vite"],
        category: "Frontend",
        image: null,
        liveUrl: "#",
        githubUrl: "#"
    }
];

export const skills = {
    frontend: {
        title: "Frontend Craft",
        icon: "✨",
        description: "Building responsive, accessible interfaces with React and modern CSS.",
        technologies: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Framer Motion"]
    },
    backend: {
        title: "Backend Systems",
        icon: "⚡",
        description: "Designing APIs and database schemas that scale with your product.",
        technologies: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"]
    },
    experience: {
        title: "User Experience",
        icon: "🎯",
        description: "Turning user needs into intuitive flows that feel natural.",
        technologies: ["Figma", "Prototyping", "User Testing", "Accessibility"]
    }
};

export const personalInfo = {
    name: "Ayush Mittal",
    role: "Full-Stack Developer",
    tagline: "I build products that people actually use.",
    bio: "I'm a full-stack developer focused on creating web applications that are fast, accessible, and genuinely useful. I believe great products come from understanding both the technical constraints and the human needs they serve.",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    location: "India"
};
