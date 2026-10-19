const PROJECTS = [
  {
    "id": "cloud4saya",
    "name": "Cloud4Saya",
    "sub": "Residential management, with a smarter layer.",
    "type": "Full-stack",
    "year": "2026",
    "tags": [
      "Angular",
      "Spring Boot",
      "MongoDB",
      "AI"
    ],
    "tone": "sage",
    "glyph": "▦",
    "summary": "A team-built platform bringing residences, buildings, apartments and parking into one connected management experience.",
    "detail": "Cloud4Saya connects an Angular frontend to a layered Spring Boot REST API. Its property workflows manage the relationships between residences, buildings, apartments and parking spaces, with validation and structured data access.",
    "features": [
      "Residence, building, apartment and parking management",
      "Connected Angular interfaces and REST APIs",
      "Image analysis for floor and apartment counts",
      "Apartment-price prediction using location, area and other property features"
    ],
    "personal": "I implemented the image-analysis and apartment-price prediction features in my part of the project.",
    "flow": [
      "Residence photo / property details",
      "AI-assisted analysis",
      "Property management workspace"
    ],
    "repo": null,
    "credit": "Academic team project",
    "note": "The frontend, backend and AI-assisted property workflows form one connected project."
  },
  {
    "id": "jira",
    "name": "TicketFlow",
    "sub": "From support tickets to useful insights.",
    "type": "Internship",
    "year": "2026",
    "tags": [
      "Python",
      "Flask",
      "SQLite",
      "Mistral",
      "Docker",
      "GitHub Actions"
    ],
    "tone": "lavender",
    "glyph": "↗",
    "summary": "My second Sopra HR Software internship project: support-ticket management with dashboards and AI-assisted analysis.",
    "detail": "TicketFlow helps organise support requests in a Jira-style workflow. It brings together a Flask backend, Jinja-based web interfaces and SQLite storage, with role-based access and optional Mistral assistance for analysis and resolution.",
    "features": [
      "Ticket creation, tracking and related-problem grouping",
      "Assignment recommendations using problem domain, resolution history and agent workload",
      "Optional Mistral assistance with human confirmation",
      "Dashboards, exports and a containerised delivery workflow"
    ],
    "flow": [
      "Support request",
      "Classification & assignment",
      "Dashboard & follow-up"
    ],
    "repo": "https://github.com/aminegarma/projet-jira",
    "credit": "Sopra HR Software · internship project",
    "note": "Started during my Sopra HR Software internship and extended afterwards with workflow improvements, automated tests, Docker and GitHub Actions."
  },
  {
    "id": "extractor",
    "name": "Certificate Extractor",
    "sub": "Turn document layouts into structured data.",
    "type": "Internship",
    "year": "2025",
    "tags": [
      "Python",
      "PyMuPDF",
      "spaCy",
      "NLP"
    ],
    "tone": "peach",
    "glyph": "⌘",
    "summary": "My first Sopra HR Software internship project, combining PDF extraction with an AI-assisted French document pipeline.",
    "detail": "The project has several implementations. One extracts interactive PDF form fields and reusable coordinate templates with PyMuPDF. The later AI branch combines document-layout processing, a trained French named-entity model, regular-expression patterns and fuzzy matching.",
    "features": [
      "Interactive PDF field extraction and JSON templates",
      "French entity recognition with trained spaCy models",
      "Pattern matching and fuzzy matching",
      "Structured output and entity validation"
    ],
    "flow": [
      "PDF document",
      "Layout + NLP + patterns",
      "Structured entities"
    ],
    "repo": null,
    "credit": "Sopra HR Software · internship project",
    "note": "Includes a form-field extraction implementation and a later hybrid NLP pipeline."
  },
  {
    "id": "nutrinet",
    "name": "Nutrinet Java",
    "sub": "A desktop companion for health and wellbeing.",
    "type": "Desktop",
    "year": "Academic",
    "tags": [
      "Java 17",
      "JavaFX",
      "MySQL",
      "Maven"
    ],
    "tone": "blue",
    "glyph": "✳",
    "summary": "A collaborative JavaFX desktop application connecting health programmes, consultations, a product catalogue and community tools.",
    "detail": "The desktop edition of Nutrinet uses JavaFX and FXML for its interfaces, with Java services and MySQL persistence. The application brings together user accounts, health programmes, consultations, products, orders and progress tracking.",
    "features": [
      "User accounts and administration",
      "Health programmes and progress tracking",
      "Consultations, prescriptions and appointments",
      "Products, orders and community interactions"
    ],
    "flow": [
      "JavaFX interfaces",
      "Java services",
      "MySQL"
    ],
    "repo": "https://github.com/mohamadrayenjbili/NutrinetJava",
    "credit": "ESPRIT · The Smurfs team",
    "note": "This is the JavaFX desktop edition; the web edition is presented separately."
  },
  {
    "id": "smurfs",
    "name": "Nutrinet Web",
    "sub": "The Smurfs’ health platform, in the browser.",
    "type": "Web",
    "year": "Academic",
    "tags": [
      "PHP",
      "Symfony",
      "Twig",
      "MySQL"
    ],
    "tone": "rose",
    "glyph": "◎",
    "summary": "The Web Smurfs project: a browser-based Nutrinet experience for programmes, consultations, community and health-product workflows.",
    "detail": "The web edition uses Symfony, PHP and Twig to connect public-facing health workflows with administration. It shares the Nutrinet concept with the desktop project while offering a separate browser-based implementation.",
    "features": [
      "Accounts and profile workflows",
      "Health programmes and consultations",
      "Community discussion and feedback",
      "Product and administration workflows"
    ],
    "flow": [
      "Browser / Twig",
      "Symfony application",
      "Database"
    ],
    "repo": null,
    "credit": "ESPRIT · The Smurfs team",
    "note": "A collaborative academic web project by The Smurfs team."
  },
  {
    "id": "evenmonet",
    "name": "EvenmoNet",
    "sub": "Bring people and events together.",
    "type": "Web",
    "year": "2023",
    "tags": [
      "PHP",
      "JavaScript",
      "HTML / CSS",
      "SQL"
    ],
    "tone": "yellow",
    "glyph": "✷",
    "summary": "An early collaborative events platform, organised around event management, users and communication.",
    "detail": "EvenmoNet uses a PHP model–view–controller structure with browser interfaces and SQL persistence. Its modules cover events, users, comments, complaints and messaging.",
    "features": [
      "Event and user management",
      "Comments and community interaction",
      "Messaging and conversation modules",
      "Complaint and response workflows"
    ],
    "flow": [
      "Web interfaces",
      "PHP controllers & models",
      "SQL persistence"
    ],
    "repo": null,
    "credit": "Collaborative academic project",
    "note": "Built collaboratively as an early academic web project."
  }
];