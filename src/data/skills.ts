export interface SkillCategory {
  index: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    index: "01",
    title: "AI & machine learning",
    description: "From data preparation and classical ML to grounded language-model applications.",
    skills: ["Python", "scikit-learn", "Machine learning", "NLP", "RAG"],
  },
  {
    index: "02",
    title: "LLM & agent engineering",
    description: "Orchestrated systems with retrieval, tools, structured outputs, and validation steps.",
    skills: ["LangChain", "LangGraph", "CrewAI", "Groq", "Retrieval pipelines"],
  },
  {
    index: "03",
    title: "Backend & APIs",
    description: "Typed service boundaries and practical web APIs for AI and data products.",
    skills: ["FastAPI", "Flask", "REST APIs", "Pydantic", "PHP"],
  },
  {
    index: "04",
    title: "Data & persistence",
    description: "Relational data, vector stores, and preprocessing pipelines built around the use case.",
    skills: ["SQL", "MySQL", "SQL Server", "Chroma", "FAISS"],
  },
  {
    index: "05",
    title: "Software development",
    description: "The engineering tools used to turn experiments into maintainable applications.",
    skills: ["Git", "Docker", "Testing", "Java", "C++", "TypeScript", "React"],
  },
];
