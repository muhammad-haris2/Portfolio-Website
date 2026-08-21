export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  role?: string;
  category?: string;
  team?: string;
  projectType?: string;
  designPatterns?: string[];
  architectureLayers?: string[];
  screenshots?: ProjectScreenshot[];
  modal: {
    problem: string;
    solution: string;
    architecture: string;
    challenges: string[];
    results: string[];
    features?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "scms",
    title: "Smart Coworking Space Management System (SCMS)",
    description:
      "A full-featured desktop application for managing coworking spaces — members, workspaces, bookings, subscriptions, billing, and administrative operations.",
    category: "Desktop Application / Software Engineering",
    role: "Scrum Master · Developer · Analyst",
    team: "Trinova Tech",
    projectType: "University Software Engineering Project — Spring 2026",
    technologies: [
      "Java 17",
      "Java Swing",
      "Maven",
      "SQL Server",
      "JDBC",
      "jBCrypt",
      "Apache PDFBox",
      "Apache POI",
      "JUnit 5",
    ],
    designPatterns: ["MVC", "DAO", "Service Layer", "Singleton", "Factory Method"],
    architectureLayers: [
      "UI / View Layer",
      "Service Layer",
      "DAO / Data Layer",
      "SQL Server Database",
    ],
    highlights: [
      "Secure member registration & authentication",
      "Workspace booking & cancellation",
      "Subscription plans & promo codes",
      "Invoice generation & payment processing",
    ],
    image: "/images/projects/scms/overview.png",
    github: "https://github.com/muhammad-haris2/Smart-Coworking-Space-Management-System",
    screenshots: [
      {
        src: "/images/projects/scms/overview.png",
        alt: "SCMS application overview",
        caption: "Overview",
      },
      {
        src: "/images/projects/scms/login.png",
        alt: "SCMS login and authentication screen",
        caption: "Authentication",
      },
      {
        src: "/images/projects/scms/member-dashboard.png",
        alt: "SCMS member dashboard",
        caption: "Member Dashboard",
      },
      {
        src: "/images/projects/scms/booking.png",
        alt: "SCMS workspace booking interface",
        caption: "Booking",
      },
      {
        src: "/images/projects/scms/admin-dashboard.png",
        alt: "SCMS admin dashboard",
        caption: "Admin Dashboard",
      },
    ],
    modal: {
      problem:
        "Coworking spaces need a centralized system to manage members, workspace availability, bookings, subscriptions, billing, and administrative reporting across separate member and admin roles.",
      solution:
        "Built SCMS as a Java Swing desktop application with layered architecture (MVC + Service + DAO), SQL Server persistence, and role-based dashboards for members and administrators.",
      architecture:
        "UI / View Layer → Service Layer → DAO / Data Layer → SQL Server Database. Patterns: MVC, DAO, Service Layer, Singleton, Factory Method.",
      features: [
        "Secure member registration and authentication",
        "Password reset and account management",
        "Coworking space / room browsing",
        "Workspace booking and cancellation",
        "Booking history",
        "Subscription plans",
        "Promo codes",
        "Smart booking cost calculation",
        "Facility/add-on management",
        "Invoice generation",
        "Payment processing",
        "Member dashboard",
        "Admin dashboard",
        "Occupancy reporting",
        "Member directory",
        "Report export",
        "Role-based functionality",
        "Database-backed persistence",
        "Unit testing with JUnit 5",
      ],
      challenges: [
        "Designing clean separation across View, Service, and DAO layers",
        "Implementing secure authentication with password hashing (jBCrypt)",
        "Coordinating booking logic with subscriptions, promo codes, and cost calculation",
        "Building reliable invoice generation and report export (PDFBox / POI)",
      ],
      results: [
        "End-to-end coworking space management workflow",
        "Separate member and admin role-based experiences",
        "Database-backed persistence with SQL Server",
        "Unit test coverage with JUnit 5",
      ],
    },
  },
  {
    id: "ai-career-assistant",
    title: "AI Career Assistant — Multi-Agent System",
    description:
      "Multi-agent AI system that analyzes CVs and job descriptions, identifies skill gaps, builds personalized learning paths, and generates tailored cover letters.",
    technologies: ["CrewAI", "Groq", "FastAPI", "Streamlit", "Tavily"],
    highlights: [
      "5-agent architecture",
      "CV parsing & job description analysis",
      "Skill-gap analysis",
      "Learning path generation",
      "Cover letter generation",
    ],
    image: "/images/projects/ai-career-assistant.jpg",
    github: "https://github.com/muhammad-haris2/ai-career-assistant",
    liveDemo: "https://ai-career-assistant-crewai.streamlit.app/",
    featured: true,
    modal: {
      problem:
        "Job seekers struggle to align their skills with specific job requirements and lack personalized guidance for career development.",
      solution:
        "Built a multi-agent system using CrewAI with specialized agents for CV analysis, job matching, skill-gap identification, learning path creation, and cover letter generation.",
      architecture:
        "5-agent CrewAI pipeline orchestrated via FastAPI backend with Streamlit frontend. Agents communicate sequentially, sharing context through structured outputs.",
      challenges: [
        "Coordinating multiple agents with consistent context",
        "Parsing diverse CV formats accurately",
        "Generating actionable, personalized learning paths",
      ],
      results: [
        "End-to-end career assistance pipeline",
        "Automated skill-gap analysis",
        "Personalized cover letter generation",
      ],
    },
  },
  {
    id: "ai-research-assistant",
    title: "AI Research Assistant — RAG Application",
    description:
      "End-to-end RAG application for researching multiple academic papers using hybrid retrieval and citation-aware generation.",
    technologies: [
      "LangChain",
      "LangGraph",
      "Groq",
      "FastAPI",
      "Chroma",
      "Streamlit",
      "Python",
    ],
    highlights: [
      "Multi-document research",
      "Hybrid BM25 + dense retrieval",
      "Local embeddings",
      "LangGraph workflow orchestration",
      "Citation-aware responses",
      "Provenance-aware follow-up questions",
      "Insufficient-evidence handling",
    ],
    image: "/images/projects/ai-research-assistant.jpg",
    github: "https://github.com/muhammad-haris2/ai-research-assistant",
    featured: true,
    modal: {
      problem:
        "Researchers need to efficiently analyze multiple academic papers and get accurate, citation-backed answers to complex questions.",
      solution:
        "Developed a RAG system with hybrid retrieval (BM25 + dense), LangGraph workflow orchestration, and citation validation for research-grade responses.",
      architecture:
        "Query → Analysis → Hybrid Retrieval → Reranking → Context Assembly → LLM Generation → Citation Validation → Response with provenance tracking.",
      challenges: [
        "Balancing sparse and dense retrieval for academic text",
        "Ensuring citation accuracy and provenance",
        "Handling insufficient evidence gracefully",
      ],
      results: [
        "Multi-document research capability",
        "Citation-aware answer generation",
        "Robust follow-up question handling",
      ],
    },
  },
  {
    id: "reading-comprehension",
    title: "Reading Comprehension & Quiz Generation System",
    description:
      "Machine learning pipeline for automated quiz and distractor generation using the RACE dataset.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "NLTK"],
    highlights: [
      "87k+ passages",
      "Automated quiz generation",
      "Distractor generation",
      "XGBoost classifier",
      "Semi-supervised Label Propagation",
      "Macro F1: 0.5284",
    ],
    image: "/images/projects/reading-comprehension.jpg",
    github: "https://github.com/muhammad-haris2/race_rc_project",
    modal: {
      problem:
        "Creating high-quality reading comprehension quizzes with plausible distractors is labor-intensive and requires NLP expertise.",
      solution:
        "Built an ML pipeline using XGBoost and semi-supervised Label Propagation on the RACE dataset for automated quiz and distractor generation.",
      architecture:
        "Data preprocessing → Feature extraction (TF-IDF, embeddings) → XGBoost classification → Label Propagation for semi-supervised learning → Quiz generation pipeline.",
      challenges: [
        "Generating plausible distractors that aren't trivially eliminable",
        "Handling class imbalance in answer types",
        "Scaling to 87k+ passages efficiently",
      ],
      results: [
        "Macro F1 score of 0.5284",
        "Automated quiz generation at scale",
        "Effective semi-supervised learning approach",
      ],
    },
  },
  {
    id: "house-price-predictor",
    title: "Islamabad House Price Predictor",
    description:
      "Machine learning application for predicting Islamabad house prices using scraped real-estate listings.",
    technologies: ["Python", "Scikit-learn", "FastAPI", "Selenium", "Streamlit"],
    highlights: [
      "1,600+ listings",
      "100+ Islamabad locations",
      "Gradient Boosting",
      "93.2% R²",
      "FastAPI backend",
      "Streamlit interface",
    ],
    image: "/images/projects/house-price-predictor.jpg",
    github: "https://github.com/muhammad-haris2/islamabad-house-price-predictor",
    liveDemo: "https://islamabad-house-price-predictor.streamlit.app/",
    modal: {
      problem:
        "Property buyers in Islamabad lack data-driven tools to estimate fair house prices across diverse neighborhoods.",
      solution:
        "Scraped 1,600+ real-estate listings across 100+ locations, trained a Gradient Boosting model, and deployed via FastAPI with a Streamlit interface.",
      architecture:
        "Selenium scraping → Data cleaning → Feature engineering → Gradient Boosting model → FastAPI prediction API → Streamlit frontend.",
      challenges: [
        "Handling diverse listing formats from multiple sources",
        "Feature engineering for location-based pricing",
        "Achieving high prediction accuracy across neighborhoods",
      ],
      results: [
        "93.2% R² on test data",
        "Coverage of 100+ Islamabad locations",
        "Production-ready API and UI",
      ],
    },
  },
];
