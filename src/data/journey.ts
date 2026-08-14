export interface JourneyEntry {
  year: string;
  title: string;
  items: string[];
}

export const journeyEntries: JourneyEntry[] = [
  {
    year: "2024",
    title: "Full-stack & Android Development",
    items: ["Full-stack web development", "Android application development"],
  },
  {
    year: "2025",
    title: "Machine Learning & Backend",
    items: [
      "Machine learning fundamentals",
      "Backend development with Python",
      "Data-driven application building",
    ],
  },
  {
    year: "2026",
    title: "Generative AI & Intelligent Systems",
    items: [
      "Generative AI applications",
      "Agentic AI systems",
      "RAG pipelines",
      "LangChain & LangGraph",
      "End-to-end AI applications",
    ],
  },
  {
    year: "2027",
    title: "Degree Completion",
    items: ["Bachelor of Science in Computer Science — FAST-NUCES"],
  },
];

export const architectureFlows = [
  {
    id: "general",
    title: "General AI Workflow",
    steps: [
      "User",
      "Prompt / Query",
      "AI Workflow",
      "Retriever / Agents",
      "LLM",
      "Validation",
      "Response",
    ],
  },
  {
    id: "rag",
    title: "RAG Pipeline",
    steps: [
      "User Query",
      "Query Analysis",
      "Retrieval",
      "Reranking",
      "Context",
      "LLM",
      "Citation Validation",
      "Answer",
    ],
  },
  {
    id: "agentic",
    title: "Agentic AI",
    steps: [
      "User",
      "Agent",
      "Tools",
      "Specialized Agents",
      "Aggregation",
      "Final Response",
    ],
  },
];
