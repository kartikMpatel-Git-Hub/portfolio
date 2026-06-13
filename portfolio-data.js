export const portfolioData = {
  personal: {
    name: "Kartik Patel",
    title: "Full-Stack Java Developer · Distributed Systems", // resume priority (was: "DotNet Developer · Full Stack Developer")
    location: "Ahmedabad, Gujarat, India",
    phone: "+91 8460888834",
    email: "kartikmpatel1302@gmail.com",
    linkedin: "linkedin.com/in/kartikmpatel",
    github: "github.com/kartikMpatel-Git-Hub",
    leetcode: "leetcode.com/u/KartikMpatel/",
  },

  about:
    "Full-Stack Java Developer with expertise in Spring Boot microservices, distributed systems, and React. Currently working as Junior Software Engineer at Roima Intelligence, delivering scalable enterprise solutions.", // resume priority

  skills: {
    languages: ["Java", "C#", "TypeScript", "JavaScript", "SQL"], // resume priority (Java first); C# kept from JS file
    backend: [
      // resume stack (priority)
      "Spring Boot",
      "Spring MVC",
      "Microservices",
      "Spring Cloud Gateway",
      "Spring Security",
      "REST API Design",
      "Hibernate / JPA",
      // unique from JS file
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "Node.js",
      "Express",
    ],
    frontend: ["React.js", "Redux Toolkit", "Tanstack Query", "Tailwind CSS"],
    database: [
      "Apache Kafka", // added from resume
      "MS SQL Server",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
    security: ["OAuth2", "JWT", "RBAC", "Token Blacklisting", "API Rate Limiter"], // API Rate Limiter added from resume
    devops: ["Docker", "Linux (Commands)", "Render", "Netlify", "Railway"],
    testing: ["JUnit", "JMeter", "Mockito", "Playwright", "Maven", "Git", "Postman"], // resume priority; Playwright kept from JS file
  },

  experience: [
    {
      role: "Junior Software Engineer",
      company: "Roima Intelligence",
      duration: "Jan 2026 - Present",
      location: "India",
      projects: [
        {
          name: "TilliT – Digital Manufacturing Operations Platform",
          technologies: [
            // resume priority (Java stack) + unique from JS file
            "SPRING BOOT",
            "MICROSERVICES",
            "KAFKA",
            "REST APIS",
            "ANGULAR",
            "TYPESCRIPT",
            "PLAYWRIGHT",
          ],
          highlights: [
            // resume priority (more detailed)
            "Contributing to a cloud-native Manufacturing Execution System (MES) operations platform by analyzing microservice architecture, REST APIs, and core modules including production scheduling, asset management, and operational workflows.",
            "Collaborating with Australia-based engineering teams to understand system design, service integrations, security architecture, and business workflows while supporting ongoing platform enhancements.",
          ],
        },
        {
          name: "Roima Portal",
          technologies: [
            // resume priority
            "SPRING BOOT",
            "SPRING SECURITY",
            "REST APIS",
            "JWT",
            "REDIS",
            "MS SQL SERVER",
            "REACT",
            "TANSTACK",
          ],
          highlights: [
            // resume priority (5 detailed points)
            "Developed and maintained enterprise HRMS applications using Spring Boot and React, delivering key modules including Comp-Off Management and Job Management from design through production deployment.",
            "Designed and enhanced enterprise-grade backend services by improving security of user access workflows, optimizing data retrieval strategies, and establishing centralized logging, exception management, and performance improvements to support scalable business operations.",
            "Led the modernization of the legacy Asset Management module by refactoring the codebase, restructuring application architecture, upgrading to current standards, executing database migrations, and successfully merging a long-running development branch with zero data loss.",
            "Enhanced frontend architecture by upgrading React versions, implementing TanStack Query for efficient data management, and developing reusable components to improve scalability, maintainability, and development velocity across modules.",
            "Owned production support and technical delivery by performing root cause analysis, resolving critical issues, conducting code reviews, managing pull requests and branch merges, resolving merge conflicts, coordinating team tasks, and mentoring developers to ensure high-quality releases.",
          ],
        },
        {
          // from resume (not in JS file as standalone)
          name: "Recruitment Management System",
          technologies: [
            "SPRING BOOT",
            "SPRING SECURITY",
            "REST APIS",
            "JWT",
            "CAFFEINE CACHE",
            "MYSQL",
            "REACT",
            "TYPESCRIPT",
            "TANSTACK",
            "CLOUDINARY",
          ],
          highlights: [
            "Architected and developed a Recruitment Management System from the ground up, digitizing the complete hiring lifecycle including candidate onboarding, job management, interview scheduling, and recruitment workflows.",
            "Enhanced platform security, scalability, and performance through role-based access controls, optimized data access strategies, caching mechanisms, and streamlined backend processing to support high-volume recruitment operations.",
            "Automated candidate engagement through email-driven communication workflows and centralized document management, enabling seamless profile handling, secure media storage, standardized APIs, and maintainable architecture for long-term business growth.",
          ],
        },
        {
          // unique from JS file — kept as-is
          name: "Human Resource Management System (HRMS)",
          technologies: [
            "ASP.NET CORE",
            "ENTITY FRAMEWORK",
            "REST APIS",
            "JWT",
            "CACHE",
            "MS SQL SERVER",
            "REACT",
            "TYPESCRIPT",
            "TANSTACK",
            "CLOUDINARY",
          ],
          highlights: [
            "Delivered centralized HRMS platform streamlining employee management, recruitment, and administrative processes.",
            "Designed role-based business workflows and approval processes.",
            "Delivered end-to-end business workflows across employee management and communications.",
            "Developed fairness-driven game slot allocation process eliminating manual coordination.",
          ],
        },
      ],
    },
  ],

  projects: [
    {
      name: "Online Shopping System",
      technologies: [
        // resume priority (Spring Boot stack)
        "SPRING BOOT",
        "SPRING SECURITY",
        "REST APIS",
        "JWT",
        "OAUTH2",
        "CAFFEINE CACHE",
        "MYSQL",
        "REACT",
        "CLOUDINARY",
      ],
      description:
        "Built a scalable e-commerce solution enabling shop owners to manage products, inventory, and orders while providing customers with a secure and intuitive online shopping experience.", // resume priority
      highlights: [
        "Improved platform performance, security, and reliability by implementing optimized data access strategies, role-based access controls, efficient request handling, and centralized error management across critical business workflows.",
        "Streamlined operational processes through automated notifications, cloud-based asset management, comprehensive activity tracking, and responsive user interfaces, enhancing both administrative efficiency and customer engagement.",
      ],
    },
    {
      name: "Blog Application",
      technologies: [
        // resume priority (Spring Boot stack)
        "SPRING BOOT",
        "SPRING SECURITY",
        "JWT",
        "MYSQL",
      ],
      description:
        "Content publishing platform with article management, category-based navigation, image handling, and commenting features to improve content discoverability and engagement.", // resume priority
    },
    {
      name: "Stream Vault – Video Streaming Platform",
      technologies: ["NODE.JS", "EXPRESS", "REACT", "MONGODB"],
      description:
        "Scalable video streaming platform with secure authentication, video publishing, playlists, subscriptions, watch history, cloud media storage, and audience engagement features.", // resume priority (expanded)
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications",
      institution: "Dharmsinh Desai University",
      duration: "2024 – 2026",
      cgpa: "8.8",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "MK Bhavnagar University",
      duration: "2021 – 2024",
      percentage: "76%",
    },
  ],

  achievements: [
    "Runner up, Coding Cauldron, DDU",
    "Solved 470+ LeetCode problems",
    "Led multiple successful enterprise projects with zero data loss",
  ],

  // Add certifications here when you get them
  certifications: [
    {
      name: "Certification Name",
      issuer: "Issuer Name",
      date: "Month Year",
    },
  ],

  // Add testimonials here
  testimonials: [
    {
      name: "Person Name",
      role: "Their Role",
      company: "Company Name",
      text: "Your testimonial here",
    },
  ],
};