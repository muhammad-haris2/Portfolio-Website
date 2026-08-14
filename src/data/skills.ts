export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI / Generative AI",
    icon: "brain",
    skills: [
      "LLMs",
      "RAG",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "Prompt Engineering",
      "LLM Integration",
      "Groq",
    ],
  },
  {
    title: "Machine Learning",
    icon: "chart",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "Gradient Boosting",
      "Random Forest",
      "KMeans",
      "GMM",
      "Label Propagation",
    ],
  },
  {
    title: "NLP",
    icon: "text",
    skills: [
      "TF-IDF",
      "Bag of Words",
      "One-Hot Encoding",
      "BLEU",
      "ROUGE",
      "METEOR",
      "Cosine Similarity",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Python", "FastAPI", "REST APIs", "Pydantic", "PHP"],
  },
  {
    title: "Databases / Infrastructure",
    icon: "database",
    skills: [
      "Chroma",
      "FAISS",
      "SQL",
      "MySQL",
      "SQLite",
      "Docker",
      "Git / GitHub",
    ],
  },
  {
    title: "Frontend / Tools",
    icon: "code",
    skills: ["React", "JavaScript", "TypeScript", "Streamlit", "Postman", "VS Code", "Git"],
  },
];
