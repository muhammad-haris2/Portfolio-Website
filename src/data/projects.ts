export type VisualKind = "retrieval" | "agents" | "prediction" | "desktop" | "nlp" | "mobile";

export interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
  github?: string;
  liveDemo?: string;
  featured: boolean;
  visual: VisualKind;
  role?: string;
  context?: string;
  architecture: string[];
  challenges: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: "ai-research-assistant",
    number: "01",
    title: "AI Research Assistant",
    shortTitle: "Citation-aware research across multiple papers",
    description:
      "A RAG application for asking grounded questions across academic PDFs, with hybrid retrieval, reranking, provenance, and explicit insufficient-evidence handling.",
    problem:
      "Researchers need answers that remain traceable to the source material, especially when a collection of papers contains conflicting or incomplete evidence.",
    contribution:
      "Designed and built the retrieval and generation workflow, FastAPI service, Streamlit interface, evaluation harness, and automated tests.",
    technologies: ["Python", "LangGraph", "BM25", "Chroma", "FastAPI", "PyMuPDF"],
    highlights: ["Hybrid sparse + dense retrieval", "Cross-encoder reranking", "Page-level citation validation", "Retrieval retry and grounding checks"],
    image: "/images/projects/ai-research-assistant.jpg",
    imageAlt: "AI Research Assistant interface showing paper ingestion and a cited answer",
    github: "https://github.com/muhammad-haris2/ai-research-assistant",
    featured: true,
    visual: "retrieval",
    role: "Independent project",
    context: "Applied AI / RAG",
    architecture: ["PDF ingestion", "Hybrid retrieval", "Reranking", "LangGraph", "Citation validation"],
    challenges: ["Keeping page and document provenance intact through chunking and generation", "Balancing lexical and semantic retrieval for technical language", "Declining to answer when the retrieved context does not support a claim"],
    outcomes: ["Multi-document questions with per-source attribution", "History-aware follow-ups and provenance resolution", "A testable service boundary between the interface and RAG workflow"],
  },
  {
    id: "ai-career-assistant",
    number: "02",
    title: "AI Career Assistant",
    shortTitle: "Five agents, one structured career analysis",
    description:
      "A multi-agent system that compares a CV with a job description, surfaces skill gaps, and produces a learning roadmap and tailored cover letter.",
    problem: "Generic career advice rarely connects a candidate’s real experience to the specific requirements of a role.",
    contribution: "Built the five-agent CrewAI workflow, FastAPI backend, document-processing path, and Streamlit experience.",
    technologies: ["CrewAI", "Groq", "FastAPI", "Streamlit", "PyMuPDF", "Tavily"],
    highlights: ["Five specialized agents", "Structured CV and job analysis", "Skill-gap comparison", "Parallel learning-path and cover-letter outputs"],
    image: "/images/projects/ai-career-assistant.jpg",
    imageAlt: "AI Career Assistant interface showing CV and job-description analysis",
    github: "https://github.com/muhammad-haris2/ai-career-assistant",
    liveDemo: "https://ai-career-assistant-crewai.streamlit.app/",
    featured: true,
    visual: "agents",
    role: "Independent project",
    context: "Agentic AI",
    architecture: ["CV + role", "Parse", "Compare", "Plan", "Write"],
    challenges: ["Passing consistent structured context between agents", "Extracting useful signals from differently formatted CVs", "Keeping recommendations tied to the supplied role rather than generic advice"],
    outcomes: ["A single workflow from document upload to actionable outputs", "Separate reasoning responsibilities for extraction, comparison, planning, and writing", "A public demo backed by a FastAPI service"],
  },
  {
    id: "house-price-predictor",
    number: "03",
    title: "Islamabad House Price Predictor",
    shortTitle: "A local housing dataset turned into a usable ML product",
    description:
      "A three-layer machine-learning application that prepares scraped property data, trains a Gradient Boosting model, and serves predictions through FastAPI and Streamlit.",
    problem: "Islamabad property listings are fragmented and vary substantially by location, size, and listing quality.",
    contribution: "Built the data collection, cleaning, training, API, and interface layers as one reproducible workflow.",
    technologies: ["Python", "Selenium", "scikit-learn", "FastAPI", "Pydantic", "Streamlit"],
    highlights: ["Zameen.com data collection", "Location-aware preprocessing", "Gradient Boosting regression", "Separated ML, API, and UI layers"],
    image: "/images/projects/house-price-predictor.jpg",
    imageAlt: "Islamabad House Price Predictor interface with property inputs and estimate",
    github: "https://github.com/muhammad-haris2/islamabad-house-price-predictor",
    liveDemo: "https://islamabad-house-price-predictor.streamlit.app/",
    featured: true,
    visual: "prediction",
    role: "Independent project",
    context: "Machine learning",
    architecture: ["Listings", "Clean + encode", "Train", "FastAPI", "Streamlit"],
    challenges: ["Normalizing inconsistent property attributes and price formats", "Representing a large set of neighborhood categories", "Keeping training artifacts and the serving schema aligned"],
    outcomes: ["Predictions across 100+ Islamabad locations", "API endpoints with typed request and response schemas", "A deployable interface for exploring model estimates"],
  },
  {
    id: "scms",
    number: "04",
    title: "Smart Coworking Space Management System",
    shortTitle: "Layered desktop software for a multi-role workspace",
    description: "A Java desktop application for members, workspaces, bookings, subscriptions, billing, invoices, and administrative reporting.",
    problem: "Coworking operations need coordinated booking, subscription, billing, and reporting workflows across member and administrator roles.",
    contribution: "Worked as Scrum Master, developer, and analyst in team Trinova Tech; contributed across requirements, application logic, and delivery coordination.",
    technologies: ["Java 17", "Swing", "SQL Server", "JDBC", "JUnit 5", "Maven"],
    highlights: ["MVC + Service + DAO", "Role-based dashboards", "Password hashing", "PDF and spreadsheet export"],
    github: "https://github.com/muhammad-haris2/Smart-Coworking-Space-Management-System",
    featured: false,
    visual: "desktop",
    role: "Scrum Master · Developer · Analyst",
    context: "University team project · Spring 2026",
    architecture: ["Swing UI", "Service layer", "DAO", "SQL Server"],
    challenges: ["Maintaining separation between UI, business rules, and persistence", "Coordinating booking costs with subscriptions and promo codes"],
    outcomes: ["Separate member and admin experiences", "Database-backed booking and billing workflows", "JUnit coverage for application logic"],
  },
  {
    id: "reading-comprehension",
    number: "05",
    title: "Reading Comprehension & Quiz Generation",
    shortTitle: "An NLP pipeline for questions and plausible distractors",
    description: "A machine-learning pipeline built on the RACE dataset for reading-comprehension classification, quiz construction, and distractor generation.",
    problem: "Creating plausible reading-comprehension questions and distractors is labor-intensive and difficult to evaluate automatically.",
    contribution: "Completed as a two-person course project with Mohammad Saeed. The public repository documents the shared system, but not a per-member implementation breakdown.",
    technologies: ["Python", "scikit-learn", "XGBoost", "NLTK", "TF-IDF"],
    highlights: ["RACE dataset", "Feature engineering", "XGBoost classifier", "Label Propagation"],
    image: "/images/projects/reading-comprehension.jpg",
    imageAlt: "Reading comprehension and quiz generation project overview",
    github: "https://github.com/muhammad-haris2/race_rc_project",
    featured: false,
    visual: "nlp",
    role: "Two-person university project",
    context: "NLP / educational tools",
    architecture: ["RACE data", "Features", "Classification", "Distractors"],
    challenges: ["Creating distractors that are plausible without duplicating the answer", "Handling varied passage and question types"],
    outcomes: ["Automated quiz-generation pipeline", "Semi-supervised experimentation with label propagation"],
  },
  {
    id: "autocare-hub",
    number: "06",
    title: "AutoCare Hub",
    shortTitle: "A full-stack Android marketplace for vehicle services",
    description: "An Android application connecting vehicle owners and service providers through discovery, booking, repair tracking, chat, and notifications.",
    problem: "Vehicle owners and workshops need one shared flow for service discovery, booking updates, and communication.",
    contribution: "Built the Android client, PHP REST integration, data flows, booking states, chat, and push-notification behavior.",
    technologies: ["Kotlin", "MVVM", "Retrofit", "PHP", "MySQL", "Firebase FCM"],
    highlights: ["Customer + provider modules", "Booking status tracking", "In-app chat", "Push notifications"],
    featured: false,
    visual: "mobile",
    role: "Android / full-stack developer",
    context: "University mobile-development project",
    architecture: ["Android UI", "MVVM", "PHP REST API", "MySQL"],
    challenges: ["Synchronizing booking states across customer and provider views", "Handling API failures and image uploads on mobile"],
    outcomes: ["End-to-end service booking flow", "Separate customer and provider experiences", "FCM notifications for booking and chat events"],
  },
];
