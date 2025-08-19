// Portfolio data - easily replaceable content
export const portfolioData = {
  personal: {
    name: "Alex Morgan",
    title: "Full Stack Developer",
    tagline: "Crafting digital experiences with clean code and creative solutions",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
    location: "San Francisco, CA",
    currentRole: "Senior Developer at TechCorp",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 123-4567",
    resumeUrl: "/resume.pdf"
  },
  
  social: {
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan",
    twitter: "https://twitter.com/alexmorgan",
    website: "https://alexmorgan.dev"
  },
  
  skills: [
    { name: "JavaScript", level: "Expert", category: "Frontend" },
    { name: "TypeScript", level: "Expert", category: "Frontend" },
    { name: "React", level: "Expert", category: "Frontend" },
    { name: "Next.js", level: "Advanced", category: "Frontend" },
    { name: "Vue.js", level: "Intermediate", category: "Frontend" },
    { name: "Node.js", level: "Expert", category: "Backend" },
    { name: "Python", level: "Advanced", category: "Backend" },
    { name: "PostgreSQL", level: "Advanced", category: "Database" },
    { name: "MongoDB", level: "Intermediate", category: "Database" },
    { name: "AWS", level: "Advanced", category: "Cloud" },
    { name: "Docker", level: "Intermediate", category: "DevOps" },
    { name: "Git", level: "Expert", category: "Tools" }
  ],
  
  projects: [
    {
      id: 1,
      title: "EcommerceHub",
      description: "Full-stack e-commerce platform with React, Node.js, and Stripe integration. Features admin dashboard, inventory management, and real-time analytics.",
      image: "/project-1.jpg",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "https://ecommercehub-demo.com",
      codeUrl: "https://github.com/alexmorgan/ecommercehub",
      featured: true
    },
    {
      id: 2,
      title: "TaskFlow Pro",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      image: "/project-2.jpg",
      tech: ["Vue.js", "Express.js", "Socket.io", "MongoDB"],
      liveUrl: "https://taskflow-pro.com",
      codeUrl: "https://github.com/alexmorgan/taskflow-pro",
      featured: true
    },
    {
      id: 3,
      title: "WeatherWise",
      description: "Modern weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      image: "/project-3.jpg",
      tech: ["React Native", "TypeScript", "OpenWeather API"],
      liveUrl: "https://weatherwise-app.com",
      codeUrl: "https://github.com/alexmorgan/weatherwise",
      featured: false
    },
    {
      id: 4,
      title: "DevBlog CMS",
      description: "Headless CMS built for developers with markdown support, syntax highlighting, and SEO optimization.",
      image: "/project-4.jpg",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
      liveUrl: "https://devblog-cms.com",
      codeUrl: "https://github.com/alexmorgan/devblog-cms",
      featured: false
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "TechCorp",
      role: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Lead development of customer-facing web applications serving 100K+ users. Mentor junior developers and establish best practices.",
      highlights: [
        "Reduced application load time by 40% through optimization",
        "Led migration to microservices architecture",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      id: 2,
      company: "StartupXYZ",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Built MVP and scaled platform from 0 to 10K users. Worked directly with founders on product strategy and technical decisions.",
      highlights: [
        "Developed core platform features using React and Node.js",
        "Integrated payment processing and subscription management",
        "Maintained 99.9% uptime across production systems"
      ]
    },
    {
      id: 3,
      company: "Digital Agency",
      role: "Frontend Developer",
      period: "2019 - 2020",
      description: "Created responsive websites and web applications for diverse clients ranging from small businesses to Fortune 500 companies.",
      highlights: [
        "Delivered 15+ client projects on time and within budget",
        "Improved client website performance by average of 35%",
        "Collaborated with design team to ensure pixel-perfect implementations"
      ]
    }
  ]
};

export const skillCategories = [
  "Frontend",
  "Backend", 
  "Database",
  "Cloud",
  "DevOps",
  "Tools"
];