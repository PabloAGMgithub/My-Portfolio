/*
 * PORTFOLIO CONTENT — edit this file when adding projects.
 * Only include technologies/features you can demonstrate. A public GitHub
 * repository URL should be provided only after confirming it exists.
 */
window.PORTFOLIO_CONTENT = {
  githubUsername: "PabloAGMgithub",
  displayName: "Pablo Alvarez Garcia",
  email: "pablito.alvarezgarciam@gmail.com",
  linkedin: "https://www.linkedin.com/in/pablo-alvarez-garc%C3%ADa-455173215/",
  portfolioRepo: "https://github.com/PabloAGMgithub/My-Portfolio",
  priorityRepositories: ["My-Portfolio"],
  projects: [
    {
      id: "resumeforge", number: "01", category: "APPLICATION DEVELOPMENT", visual: "resume",
      title: "ResumeForge", subtitle: "A document-to-CV workflow built with Python.",
      short: "A local CV application with document import, editable sections, structural checks, live preview, and Word/PDF exports.",
      tags: ["Python", "Streamlit", "PDF / DOCX"],
      demoUrl: "https://resumeforge2026pagm.streamlit.app/", sourceUrl: null,
      context: "Building and refining a CV often requires juggling source documents, section formatting, and export formats.",
      contribution: "Built a Python and Streamlit CV tool supporting document import, editable sections, structural checks, a live preview, and Word/PDF output.",
      features: ["Document import", "Editable CV sections", "Structural checks and live preview", "PDF and DOCX export"],
      qualification: "Project features are based on the supplied CV. The application link is provided as documented; public source-code hosting was not independently verified."
    },
    {
      id: "task-automator", number: "02", category: "AUTOMATION EXPERIMENT", visual: "automation",
      title: "AI Task Automator", subtitle: "A Python workflow orchestration experiment.",
      short: "A text-file task runner for agent-style workflows, including file generation and simulated email and web-scraping steps.",
      tags: ["Python", "Workflow automation", "Agent workflows"],
      demoUrl: null, sourceUrl: null,
      context: "Multi-step tasks can be easier to understand when the instructions and execution stages are explicitly separated.",
      contribution: "Developed a text-file task runner that orchestrates agent-style workflows, including file generation and simulated email and web-scraping operations.",
      features: ["Text-based task definitions", "Multi-step workflow orchestration", "File-generation steps", "Simulated email and web-scraping operations"],
      qualification: "Email and web-scraping steps are simulated. This project is not presented as a deployed production agent or as an externally integrated service."
    },
    {
      id: "emotion-detection", number: "03", category: "NLP · COURSE PROJECT", visual: "nlp",
      title: "Emotion Detection", subtitle: "A Flask application using IBM Watson NLP.",
      short: "An IBM course-based emotion-analysis web app with a user interface, error handling, and tests.",
      tags: ["Python", "Flask", "IBM Watson NLP"],
      demoUrl: null, sourceUrl: null,
      context: "This training project explores how to connect a web interface with an NLP emotion-analysis service.",
      contribution: "Implemented the course-based emotion-analysis web application, including its Flask interface, error handling, and tests.",
      features: ["Flask-based web interface", "IBM Watson NLP integration", "Error handling", "Application tests"],
      qualification: "Identified as an IBM course-based project, not an independently trained NLP model."
    },
    {
      id: "portfolio", number: "04", category: "FRONT-END DEVELOPMENT", visual: "web",
      title: "Personal Portfolio", subtitle: "A public front-end development project.",
      short: "A personal site built with HTML, CSS, and JavaScript, with the code published on GitHub.",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: null, sourceUrl: "https://github.com/PabloAGMgithub/My-Portfolio",
      context: "A portfolio is both a presentation tool and a place to document the thinking behind technical work.",
      contribution: "Created a front-end portfolio to present personal experience and technical projects. This site is the next iteration of that public repository.",
      features: ["Static front-end architecture", "Project-first navigation", "Responsive interface", "Public GitHub source"],
      qualification: "The existing public repository is verified. The upgraded code is prepared for publishing but has not been pushed to GitHub."
    }
  ]
};
