// ============================================================
// portfolioData.js — Centralized configuration for Santhosh U's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Santhosh U",
  firstName: "Santhosh",
  brandName: "Santhosh U",
  title: "Software Developer",
  location: "Chennai, India",
  address: "Puzhal – Chennai 600066",
  phone: "+91 98 4088 9432",
  emails: {
    primary: "Santhosh.u2653@email.com",
    secondary: "",
  },
  summary:
    "Motivated and detail-oriented Software Developer & B.Sc. Computer Science graduate (Agurchand Manmull Jain College, Chennai) Skilled in full-stack web and backend engineering across React, Next.js, TypeScript, NestJS, GSAP, Java, J2EE, Spring Boot, JDBC, SQL/MySQL, and Flutter.",
  resumeUrl: "/Santhosh_U_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/santhoshu2653-maker",
  linkedin: "https://www.linkedin.com/in/santhosh-u-403882313?u",
  instagram: "https://www.instagram.com/santhosh_u__2653?igsi=aWl4cTcwZ2pvam5p",
};

export const heroContent = {
  greeting: "Hi, I'm Santhosh   ",
  titleHighlight: "Software Developer",
  subtitle:
    "I build fast, scalable applications using React, Next.js, NestJS, TypeScript, Java, and Flutter.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:Santhosh.u2653@email.com?subject=Hiring Inquiry – Portfolio&body=Hello Santhosh,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Santhosh_U_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Santhosh</span>, a Software Developer based in Chennai, India. I specialize in engineering clean, scalable full-stack web and cross-platform applications using modern frameworks like React, Next.js, NestJS, Java, Spring Boot, and Flutter.`,
  techStack: ["React", "Next.js", "Java", "NestJS", "Flutter"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, modern, and performance-first approach to develop robust software and scalable full-stack platforms.",
  cards: [
    {
      number: "01",
      title: "Research & Analysis",
      text: "I analyze business requirements, user needs, and architectural tradeoffs to lay a rock-solid foundation for every software project.",
    },
    {
      number: "02",
      title: "Design & Architecture",
      text: "Crafting clean module architecture, intuitive interfaces, and responsive layouts that guarantee high performance and engaging UX.",
    },
    {
      number: "03",
      title: "Develop & Integrate",
      text: "Building modular backends and responsive frontends using React, Next.js, NestJS, Java, and database systems with industry best practices.",
    },
    {
      number: "04",
      title: "Test & Deploy",
      text: "Rigorous testing, validation, and seamless deployment with continuous performance optimization and ongoing refinement.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Frontend & Modern Web",
      skills: [
        { name: "React", level: 92 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "GSAP & Motion", level: 85 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "Backend & Enterprise Java",
      skills: [
        { name: "Java", level: 92 },
        { name: "J2EE & Servlets / JSP", level: 88 },
        { name: "JDBC", level: 90 },
        { name: "NestJS", level: 88 },
        { name: "Spring Boot", level: 82 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Mobile & Cross-Platform",
      skills: [
        { name: "Flutter", level: 85 },
        { name: "Dart", level: 82 },
        { name: "Responsive UI", level: 92 },
        { name: "State Management", level: 85 },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL / SQL", level: 90 },
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "Node.js", level: 86 },
      ],
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Object-Oriented Programming (OOP)", level: 95 },
        { name: "Data Structures & Algorithms", level: 86 },
        { name: "DBMS & Relational Design", level: 88 },
        { name: "File I/O & Exception Handling", level: 90 },
        { name: "Software Engineering (SDLC)", level: 86 },
      ],
    },
  ],
};

// Content Creation / Technical Innovation Data
export const contentCreation = {
  badge: "Technical Innovation",
  heading: "Technical Development & Creative Direction",
  description:
    "Beyond full-stack coding, I craft interactive web experiences, explore modern UI animations with GSAP, and build scalable systems.",
  categories: [
    {
      title: "Web Applications",
      description:
        "Building responsive full-stack applications with React, Next.js, TypeScript, and NestJS.",
      stats: "Production Apps",
      icon: "💻",
    },
    {
      title: "Interactive UI & GSAP",
      description:
        "Crafting smooth motion designs, micro-interactions, and fluid web animations with GSAP and Framer Motion.",
      stats: "Modern Motion",
      icon: "⚡",
    },
    {
      title: "Backend Architecture",
      description:
        "Designing robust enterprise REST APIs and database pipelines using Java, Spring Boot, JDBC, and NestJS.",
      stats: "Scalable Core",
      icon: "⚙️",
    },
    {
      title: "Mobile Experiences",
      description:
        "Developing cross-platform mobile applications with Flutter and Dart for high-performance iOS and Android apps.",
      stats: "Flutter Dev",
      icon: "📱",
    },
  ],
};

// Leadership & Engagement Data
export const leadershipList = [
  {
    title: "DevSpectra — Real-World Application Team",
    description:
      "Collaborating with the engineering team at DevSpectra to build responsive web components, integrate REST APIs, and optimize user experience for client-facing software.",
    role: "Software Developer Intern",
    badge: "Internship",
  },
  {
    title: "Q Spiders Technical Cohort",
    description:
      "Participated in intensive technical sessions covering advanced Core Java, OOP hierarchies, database connectivity, Servlets/JSP, and Spring Boot architecture.",
    role: "Java & Full Stack Trainee",
    badge: "Training",
  },
  {
    title: "Agurchand Manmull Jain College — Tech Initiatives",
    description:
      "Coordinated academic technical seminars and software practice labs, helping peers debug Java code and implement OOP paradigms.",
    role: "Student Coordinator",
    badge: "Academic",
  },
  {
    title: "Full-Stack Application Development",
    description:
      "Engineered end-to-end full stack web platforms, managing front-to-back integration, state flow, and database models.",
    role: "Lead Developer",
    badge: "Engineering",
  },
];

// Internships & Work Experience Data
export const internshipsList = [
  {
    organization: "A7 Infosoft",
    role: "Software Developer Intern",
    duration: "2024 – 2025",
    skills: [
      "Full Stack Web Development",
      "REST API Integration",
      "State Management",
      "Responsive UI Design",
    ],
    tech: ["React", "Next.js", "TypeScript", "NestJS", "GSAP", "Tailwind CSS"],
  },
  {
    organization: "Q Spiders, Chennai",
    role: "Java & Full-Stack Development Trainee",
    duration: "2024 – Present",
    skills: [
      "Core Java & OOPs",
      "JDBC Connectivity",
      "Servlets & JSP",
      "Spring Boot Architecture",
    ],
    tech: ["Java", "J2EE", "Servlets", "JDBC", "Hibernate", "Spring Boot", "MySQL"],
  },
  {
    organization: "Spiro Prime Tech",
    role: "BDE Trainee Developer",
    duration: "2025 oct – 2026 jun",
    skills: [
      "Communication With Clients",
      "File I/O & Exception Handling",
      "CRUD Operations",
      "Real Time Projects",
      "Database Schemas",
    ],
    tech: ["Java", "SQL", "MySQL", "HTML5", "CSS3", "JavaScript"],
  },
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Communication",
    icon: "💬",
    desc: "Fluent in English and Native Tamil. Clear, structured technical and interpersonal communication.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Collaborating across cross-functional teams, peer reviews, and engineering workflows.",
  },
  {
    name: "Quick Learning",
    icon: "🚀",
    desc: "Rapidly mastering new technologies, frameworks, and modern developer toolchains.",
  },
  {
    name: "Project Management",
    icon: "📋",
    desc: "Organizing milestones, version control with Git, and clean documentation.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Seamlessly shifting across frontend React/Next.js, backend Java/NestJS, and mobile Flutter.",
  },
  {
    name: "Attention to Detail",
    icon: "🎯",
    desc: "Delivering pixel-perfect, responsive UI and clean, robust, and maintainable code.",
  },
  {
    name: "Work Ethic",
    icon: "⚡",
    desc: "Dedicated to continuous self-improvement and delivering real-world software value.",
  },
];

// Featured Projects Data
export const projects = [
  {
    id: "student-management-system",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Student Management System",
    description:
      "My project was a Student Management System developed using Java, JDBC, and MySQL. The purpose of the project was to manage student information efficiently. The system allows users to add, update, view, and delete student records using CRUD operations. Java was used for the application logic, JDBC was used to connect the application with the database, and MySQL was used to store student information. This project helped me understand database connectivity, SQL queries, and record management.",
    techTags: [
      "Java",
      "JDBC",
      "MySQL",
      "CRUD Operations",
      "SQL",
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "devspectra-app",
    number: "02",
    badge: "🏢 DevSpectra Internship Project",
    title: "DevSpectra Web Application Platform",
    description:
      "A production-ready responsive web application platform developed during the DevSpectra internship. Features modern component architecture, seamless REST API integration, smooth GSAP animations, and robust state management for client-facing features.",
    techTags: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "GSAP",
      "Tailwind CSS",
      "REST API",
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "student-record-system",
    number: "03",
    badge: "☕ Academic Practice Project",
    title: "Java Console-Based Student Record System",
    description:
      "A robust console application built in Core Java that manages student records with complete CRUD operations (adding, viewing, updating, and deleting). Focused on implementing solid Object-Oriented Programming (OOP) principles, structured file handling/IO for persistent storage, and strict input validation.",
    techTags: [
      "Java",
      "OOPs",
      "File I/O",
      "Exception Handling",
      "CLI",
      "Data Structures",
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
];

// Certifications Data
export const certificates = {
  featured: [
    {
      name: "Full-Stack Dev Specialization",
      issuer: "Full Stack Specialization",
      icon: "💻",
    },
    {
      name: "Core Java & Advanced Java (JDBC, Servlets)",
      issuer: "Q Spiders, Chennai",
      icon: "☕",
    },
    {
      name: "Spring Boot & Enterprise Architecture",
      issuer: "Q Spiders, Chennai",
      icon: "🌱",
    },
    {
      name: "Web Application Development with React & Next.js",
      issuer: "DevSpectra",
      icon: "⚛️",
    },
    {
      name: "Relational Database Management & SQL",
      issuer: "Database Specialization",
      icon: "🗄️",
    },
    {
      name: "Cross-Platform Mobile Development (Flutter)",
      issuer: "Mobile Dev Specialization",
      icon: "📱",
    },
  ],
  viewAllUrl: "#contact",
};

// Education Data
export const education = {
  degree: "Bachelor of Computer Science (B.Sc. CS)",
  institution: "Agurchand Manmull Jain College, Chennai",
  graduation: "2022 – 2025",
  additionalTraining: "Q Spiders, Chennai — Core & Advanced Java, Spring Boot",
  academicProject: "Java Console-Based Student Record System",
};

// Footer Content Data
export const footerContent = {
  taglines: [
    "Software Developer & Full-Stack Engineer",
    "React · Next.js · NestJS · TypeScript",
    "Java · Spring Boot · JDBC · Flutter",
  ],
  credential: "B.Sc. Computer Science · Agurchand Manmull Jain College, Chennai",
  copyright: `© ${new Date().getFullYear()} Santhosh U | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};