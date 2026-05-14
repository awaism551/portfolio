export const content = {
  defaultSeo: {
    title: "Awais Nasir | Senior Software Engineer",
    description: "Awais Nasir is a Senior Software Engineer, experienced in creating beautiful and functional websites and web applications.",
    url: "https://awais-nasir.com",
    previewImage: "/favicon-32x32.png"
  },
  heroData: {
    greetings: "HELLO, ",
    introduction: "I'm Awais Nasir",
    role: "Senior Software Engineer",
    paragraph: "Building reliable, scalable systems that solve real problems and deliver lasting value.",
    button1: "Check my work",
    button2: "Contact me"
  },
  aboutData: {
    aboutTitle: "About me",
    aboutItems: [
      "Senior Software Engineer based in Doha, Qatar, open to onsite, hybrid, and remote opportunities globally.",
      "8+ years of experience delivering production-grade platforms across startups, product companies, and enterprise environments spanning AI, workforce management, real estate, and cultural institutions.",
      "Deep understanding of the full software development lifecycle, from early architecture decisions and team alignment through to production deployment and post-launch operations.",
      "I architect for the long term, take ownership end-to-end, and bridge the gap between technical depth and business outcomes.",
      "Outside of work, I enjoy playing Chess and Cricket, watching movies, and reading books."
    ],
    resumeTitle: "Resume",
    resumeParagraph: "You can check my resume in the link below.",
    resumeButton: "Resume",
    resumeLink: "/resume/Awais-Senior Software Engineer-Qatar.pdf",
    skillsTitle: "Skills",
    skills: [
      {
        category: "Languages",
        items: [ "JavaScript", "TypeScript", "Go", "Python", "Java", "C#", ".NET", "Bash", "SQL" ]
      },
      {
        category: "Frontend",
        items: [ "React", "Next.js", "Angular", "AngularJS", "Ionic", "Tailwind CSS", "Material UI", "SCSS" ]
      },
      {
        category: "Backend",
        items: [ "Node.js", "NestJS", "Express.js", "Spring Boot", "Django", "Flask" ]
      },
      {
        category: "Databases",
        items: [ "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Firebase", "MariaDB", "Apache Cassandra", "Greenplum" ]
      },
      {
        category: "Cloud & DevOps",
        items: [ "AWS", "Microsoft Azure", "Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana", "Jenkins" ]
      },
      {
        category: "AI & Data",
        items: [ "OpenAI APIs", "LangChain", "pgvector", "Apache Airflow", "ETL Pipelines" ]
      },
      {
        category: "Security & Identity",
        items: [ "OAuth2", "OIDC", "SAML", "Keycloak", "RBAC", "ABAC", "JWT", "MFA" ]
      },
      {
        category: "APIs & Integration",
        items: [ "REST", "GraphQL", "gRPC", "WebSockets", "Kong", "Nginx" ]
      },
      {
        category: "Architecture",
        items: [ "Microservices", "Event-Driven Systems", "Distributed Systems", "System Design", "Multi-Tenant Architecture" ]
      },
      {
        category: "Testing",
        items: [ "Jest", "Cypress", "Playwright" ]
      }
    ]
  },
  portfolioData: {
    portfolioTitle: "Portfolio",
    projects: [
      {
        name: "Memberships Portal",
        projectUrl: "https://members.qacreates.com/en",
        imgPath: "projectMedia/membershiplogo.jpg",
        imgAlt: "Memberships Portal preview",
        summary: "Led the architecture and delivery of a centralized Memberships Platform for QC+ and Qatar Museums, migrating 100K+ members from legacy systems and fully digitizing corporate, individual, and event-based memberships.",
        keyFeatures: [ "Memberships Management", "Subscriptions Management", "User-friendly Interface", "Scalable Architecture", "Modern Tech Stack" ]
      },
      {
        name: "Daleel Aqar",
        projectUrl: "https://www.daleelaqar.com/#/nav/home",
        imgPath: "projectMedia/daleelaqar.png",
        imgAlt: "Daleel Aqar preview",
        summary: "Engaged as a Software Consultant to advise and deliver key architectural guidance for Daleel Aqar, a large-scale real estate platform enabling property buying, selling, and rentals.",
        keyFeatures: [ "Comprehensive Real Estate Platform", "User-friendly Interface", "Scalable Architecture", "Modern Tech Stack", "Monorepo Development" ]
      },
      {
        name: "Authentic Influencers",
        projectUrl: "https://authenticstats.com/",
        imgPath: "projectMedia/authentic.jpg",
        imgAlt: "Authentic Influencers preview",
        summary: "Designed and delivered the architecture for a platform connecting Instagram and TikTok influencers with brands, enabling seamless pitching, negotiations, and deal finalization.",
        keyFeatures: [ "Instagram and TikTok Influencers", "Brands", "Collaboration Opportunities", "Pitches", "Negotiate Terms", "Finalize Business Deals" ]
      },
      {
        name: "Performance Reporting",
        projectUrl: "https://portal.afiniti.com/",
        imgPath: "projectMedia/pr.png",
        imgAlt: "Performance Reporting preview",
        summary: "Engineered a user-friendly reporting app that provides stakeholders with clear insights into Afiniti software performance across client environments, using key metrics to improve results",
        keyFeatures: [ "User-friendly dashboard", "Live preview of each Account/Client/Tenant", "Customizable reports", "Role Based Access Control" ]
      },
      {
        name: "WFM",
        imgPath: "projectMedia/wfm.jpg",
        imgAlt: "WFM preview",
        summary: "A large-scale enterprise workforce management platform built for contact centers across multiple global clients. The platform handled the full complexity of managing agent workforces at scale, from day-to-day scheduling visibility to long-term capacity planning.",
        keyFeatures: [ "Scheduling of Agents", "TimeOff Requests Modules", "Work Plans and Work Plan Rotations of Agents", "Forecasting", "Various Live and historical reporting", "ETL (export,transpose,load) based Module" ]
      },
      {
        name: "Visenya",
        imgPath: "projectMedia/visenya.png",
        imgAlt: "Visenya",
        summary: "Designed and delivered an internal platform that automated data pipeline creation and management for AI and Data Integration teams, significantly reducing the manual effort involved in setting up and maintaining complex data workflows.",
        keyFeatures: [ "Automated Data Pipelines", "Data Integration", "AI and Data Integration Teams" ]
      },
      {
        name: "WFM Historical Connectors",
        imgPath: "projectMedia/wfmhistconn.png",
        imgAlt: "WFM Historical Connectors preview",
        summary: "Architected an ETL application to export, transpose, and load historical data from Afiniti databases into client environments, streamlining data synchronization and integration.",
        keyFeatures: [ "ETL (export,transpose,load)", "Data Integration", "Data Migration", "Data Synchronization" ]
      },
      {
        name: "Db Utility",
        imgPath: "projectMedia/dbutility.jpg",
        imgAlt: "Db Utility preview",
        summary: "Developed a utility service for Afiniti's internal teams which enabled the smooth deployment of database schemas, tables, stored procedures, functions, views, and triggers on both production and staging servers.",
        keyFeatures: [ "Database Deployment", "Database Backup", "Database Logs", "Database Schema Management" ]
      },
      {
        name: "Aduro",
        projectUrl: "https://play.google.com/store/apps/details?id=com.nbe.android.adurohybrid1&hl=en",
        imgPath: "projectMedia/aduro.png",
        imgAlt: "Aduro preview",
        summary: "Developed a hybrid app using Ionic1 to interface with hardware controllers which enabled remote management of devices such as DHW systems, hoppers, and boilers:",
        keyFeatures: [ "Remote Management", "Hardware Controllers", "DHW Systems", "Hoppers", "Boilers", "IOT" ]
      }
    ]
  },
  contactData: {
    title: "Contact",
    p1: "Want to know how I work and what I can offer? Check out my ",
    p2: "portfolio",
    p3: " and ",
    p4: "resume",
    resumeLink: "/resume/Awais-Senior Software Engineer-Qatar.pdf",
    subtitle: "You can find me on the following channels"
  }
};
