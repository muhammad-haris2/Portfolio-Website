export const personal = {
  name: "Muhammad Haris",
  shortName: "Haris",
  title: "AI & Software Engineering",
  location: "Islamabad, Pakistan",
  email: "haris101gbb@gmail.com",
  university: "FAST-NUCES Islamabad",
  degree: "BS Computer Science",
  graduationYear: "2027",
  tagline: "I build intelligent systems that solve real problems.",
  subtitle:
    "Computer Science student focused on applied AI, retrieval systems, intelligent agents, and reliable backend software.",
  about: [
    "I’m a final-year Computer Science student at FAST-NUCES Islamabad. My work sits where machine learning experiments become usable software: retrieval pipelines, agent workflows, prediction systems, and the APIs around them.",
    "I enjoy problems that require both investigation and implementation—understanding imperfect data, structuring an AI workflow, and building enough validation around it to know when the system should not answer.",
  ],
  links: {
    github: "https://github.com/muhammad-haris2",
    linkedin: "https://www.linkedin.com/in/muhammad-haris-455166294/",
    email: "mailto:haris101gbb@gmail.com",
    resume: "/resume.pdf",
  },
} as const;

export const navLinks = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "contact", label: "Contact" },
] as const;
