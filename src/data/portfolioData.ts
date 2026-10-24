export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  badge?: string;
  summary: string;
  keyHighlights: string[];
  metrics: Metric[];
  githubUrl: string;
  demoUrl?: string;
  patentUrl?: string;
  architectureDiagram?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  summary?: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: 'core' | 'advanced' | 'familiar';
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  gpa: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    statusBadge: string;
    resumeUrl: string;
    aboutBio: string[];
  };
  projects: Project[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  navLinks: { label: string; href: string }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ameesh Mithanthaya",
    title: "AI & Software Engineer",
    headline:
      "AI & Software Engineer building autonomous agents, security guardrails, and production RAG pipelines with Python, LangGraph, FastAPI, and vector databases.",
    location: "Mangalore / Udupi, India",
    email: "ameeshmith@gmail.com",
    phone: "+91 9035655107",
    linkedin: "https://linkedin.com/in/ameeshmith",
    github: "https://github.com/ameeshmith",
    statusBadge: "Available for AI & Software Roles",
    resumeUrl: "/resume.pdf",
    aboutBio: [
      "I'm a Computer Science graduate passionate about building hands-on AI tools, agentic workflows with LangGraph, and full-stack applications.",
      "From filing an Indian patent on RAG news verification to building real-world projects during internships, I focus on writing clean, working code that solves actual problems."
    ],
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Stack", href: "#stack" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  projects: [
    {
      id: "fora-ai",
      title: "Fora AI",
      subtitle: "Autonomous Research & Intelligence Engine",
      badge: "Agentic Workflow",
      summary:
        "Autonomous multi-step research engine leveraging custom MCP tool servers, reflection loops, and persistent state checkpointing.",
      tags: ["Python", "LangGraph", "MCP", "FastAPI", "SQLite", "Docker"],
      metrics: [
        { label: "Research Turnaround", value: "-75%" },
        { label: "Attribution Accuracy", value: "98%" },
        { label: "Briefing Latency", value: "<45s" },
      ],
      keyHighlights: [
        "Architected an autonomous research engine using custom Model Context Protocol (MCP) tool servers for web scraping and text extraction, cutting manual research turnaround time by 75%.",
        "Implemented cyclical reflection state graphs with automated critique gates, enabling self-correction over failed search queries and driving source attribution accuracy to 98%.",
        "Built an asynchronous FastAPI backend with SQLite state checkpointing, supporting background job polling and delivering structured briefings with live citations in under 45 seconds.",
      ],
      githubUrl: "https://github.com/ameeshmith/fora-ai",
      demoUrl: "https://github.com/ameeshmith/fora-ai#demo",
    },
    {
      id: "agent-security-gateway",
      title: "AI Agent Security Gateway",
      subtitle: "Human-in-the-Loop Guardrail & Prompt Injection Defense",
      badge: "Security & Guardrails",
      summary:
        "FastAPI & LangGraph security gateway enforcing real-time prompt injection scanning, <3.5ms safe approvals, and emergency kill switches for AI agents.",
      tags: ["Python", "FastAPI", "LangGraph", "Prompt Defense", "State Machines", "Security"],
      metrics: [
        { label: "Safe Read Latency", value: "<3.5ms" },
        { label: "Destructive Actions Blocked", value: "100%" },
        { label: "Malicious Attacks Intercepted", value: "100%" },
        { label: "Incident Review Time", value: "-40%" },
      ],
      keyHighlights: [
        "Built a security gateway for AI agents using FastAPI and LangGraph state machines, automatically approving safe read requests in <3.5ms while pausing high-risk database drops and payments for human review—eliminating 100% of unauthorized destructive actions.",
        "Developed an inbound prompt injection scanner that caught and quarantined 100% of malicious override attacks before tools were invoked, preventing rogue agent actions such as production database drops and unauthorized $5,000+ financial transfers.",
        "Created a role-based permission system and emergency kill switch that let operators safely edit dangerous requests in flight, stopping runaway agent loops and cutting incident review time by 40%.",
      ],
      githubUrl: "https://github.com/ameeshmith/agent-security-gateway",
      demoUrl: "https://github.com/ameeshmith/agent-security-gateway#demo",
    },
    {
      id: "smart-news-synthesizer",
      title: "Smart News Synthesizer",
      subtitle: "Indian Patent Published System",
      badge: "Indian Patent Published",
      summary:
        "RAG-based automated news verification, credibility classification, and semantic intelligence engine.",
      tags: ["Python", "FastAPI", "React", "RAG", "Sentence Transformers", "BERT", "FAISS"],
      metrics: [
        { label: "Patent Status", value: "Published" },
        { label: "Retrieval Latency", value: "3–4s" },
        { label: "BERT Classifier F1", value: "0.71" },
        { label: "Reading Time Cut", value: "60%" },
      ],
      keyHighlights: [
        "Built a RAG-based news verification and summarization system integrating credibility classification and semantic retrieval.",
        "Engineered an NLP pipeline using BERT, FAISS, and Sentence Transformers with end-to-end latency optimized to 3–4 seconds.",
        "Achieved a BERT classifier F1-score of 0.71 and reduced article reading time by 60%; system published as an Indian Patent.",
      ],
      githubUrl: "https://github.com/ameeshmith/SmartNewsSynthesizer",
      patentUrl: "https://ipindiaservices.gov.in/PublicSearch",
      demoUrl: "https://github.com/ameeshmith/SmartNewsSynthesizer#patent-details",
    },
    {
      id: "pharma-watch",
      title: "Pharma Watch",
      subtitle: "Drug Adverse Event Trend Analyzer",
      badge: "Data & Analytics",
      summary:
        "Full-cycle pharmacovigilance analytics engine and interactive dashboard analyzing 100K+ FDA adverse event reports.",
      tags: ["Python", "Streamlit", "SQLite", "Pandas", "Plotly", "ETL"],
      metrics: [
        { label: "FAERS Reports", value: "100,000+" },
        { label: "Interactive Visuals", value: "15+" },
        { label: "Pipeline", value: "Automated ETL" },
      ],
      keyHighlights: [
        "Developed a pharmacovigilance analytics dashboard analyzing 100,000+ FDA adverse event reports across thousands of drugs and adverse events.",
        "Built ETL pipelines for FAERS datasets, performing automated data cleaning, validation, standardization, and schema transformation.",
        "Designed an interactive dashboard with 15+ visualizations to identify reporting trends, demographic patterns, and drug-event relationships.",
      ],
      githubUrl: "https://github.com/ameeshmith/pharma-watch",
      demoUrl: "https://github.com/ameeshmith/pharma-watch#live-demo",
    },
  ],

  experience: [
    {
      id: "coreason-ai",
      company: "Coreason AI",
      role: "AI Engineer Intern",
      type: "Internship",
      period: "Jun 2026 – Oct 2026",
      location: "Mangalore, India",
      summary:
        "Engineered production-grade LLM agents, tenant-isolated vector retrieval pipelines, and declarative agent compilers.",
      highlights: [
        "Built and deployed customer-facing agentic workflows in Python and LLMs, reducing manual workflow processing time by 40% in production.",
        "Developed modular MCP tools for distributed agent execution, lowering deployment and inference costs by 35%.",
        "Engineered RAG retrieval pipelines in PostgreSQL with pgvector, HNSW indexing, and tenant-level filters to prevent cross-tenancy data breaches.",
        "Created an automated RAG evaluation & CI/CD pipeline using RAGAS and GitHub Actions across 122+ test suites to halt retrieval regressions.",
        "Engineered a declarative agent lifecycle compiler converting YAML configurations into native LangGraph StateGraphs with validated tool bindings.",
        "Built an offline voice recognition pipeline using sherpa-onnx for multi-channel streaming audio, indexing meeting notes into Obsidian with 95% accuracy.",
      ],
      skills: [
        "Python",
        "LangGraph",
        "MCP",
        "PostgreSQL",
        "pgvector",
        "HNSW",
        "RAGAS",
        "GitHub Actions",
        "sherpa-onnx",
        "Obsidian",
      ],
    },
    {
      id: "goa-shipyard",
      company: "Goa Shipyard Ltd.",
      role: "IT Intern",
      type: "Internship",
      period: "Jun 2025 – Jul 2025",
      location: "Goa, India",
      summary:
        "Developed internal management systems and streamlined enterprise infrastructure administration.",
      highlights: [
        "Deployed a Complaint Management System using Flask and SQLite for 50+ enterprise systems.",
        "Automated user access configuration workflows, cutting onboarding time by 15%.",
        "Administered enterprise DNS/DHCP services across 20+ systems to maximize network reliability.",
      ],
      skills: ["Flask", "SQLite", "DNS / DHCP", "Enterprise Networks", "Automation"],
    },
  ],

  skills: [
    {
      category: "AI / ML & Agents",
      description: "Autonomous reasoning, state machines, evaluation & semantic indexing",
      skills: [
        { name: "LangGraph", level: "core" },
        { name: "LangChain", level: "core" },
        { name: "MCP (Model Context Protocol)", level: "core" },
        { name: "RAG Architecture", level: "core" },
        { name: "Human-in-the-Loop (HITL)", level: "core" },
        { name: "RAGAS (Evaluation)", level: "core" },
        { name: "FAISS", level: "advanced" },
        { name: "pgvector", level: "advanced" },
        { name: "HNSW Indexing", level: "advanced" },
        { name: "Scikit-learn", level: "advanced" },
      ],
    },
    {
      category: "Languages & Frameworks",
      description: "High-performance backend services and interactive web interfaces",
      skills: [
        { name: "Python", level: "core" },
        { name: "SQL", level: "core" },
        { name: "FastAPI", level: "core" },
        { name: "Flask", level: "advanced" },
        { name: "React", level: "advanced" },
        { name: "Streamlit", level: "advanced" },
      ],
    },
    {
      category: "Data & Databases",
      description: "Structured storage, vector indices, and analytical ETL pipelines",
      skills: [
        { name: "PostgreSQL", level: "core" },
        { name: "SQLite", level: "core" },
        { name: "MySQL", level: "advanced" },
        { name: "Pandas", level: "core" },
        { name: "NumPy", level: "advanced" },
      ],
    },
    {
      category: "Infrastructure & Tools",
      description: "Containerization, automated evaluation pipelines, and development workflows",
      skills: [
        { name: "Docker", level: "core" },
        { name: "Linux", level: "core" },
        { name: "Git", level: "core" },
        { name: "GitHub Actions", level: "core" },
        { name: "CI/CD Pipelines", level: "core" },
      ],
    },
  ],

  education: [
    {
      institution: "Nitte University",
      degree: "B.Tech in Computer Science",
      gpa: "CGPA: 8.19 / 10",
      period: "2022 – 2026",
      location: "Mangalore / Nitte, India",
      highlights: [
        "Focus on Artificial Intelligence, Distributed Systems, Database Management Systems, and Machine Learning.",
        "Author & Innovator of Indian Patent Published news verification and semantic RAG retrieval system.",
      ],
    },
  ],
};
