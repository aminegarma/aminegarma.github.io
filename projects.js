const PROJECTS = [
  {
    "id": "cloud4saya",
    "name": "Cloud4Saya",
    "sub": "A residential platform, from private cloud to AI-assisted services.",
    "type": "Full-stack",
    "year": "2026",
    "tags": [
      "OpenStack",
      "Kubernetes",
      "Ansible",
      "Heat",
      "Prometheus",
      "Grafana",
      "Angular",
      "Spring Boot",
      "MongoDB",
      "AI"
    ],
    "tone": "sage",
    "glyph": "▦",
    "summary": "A seven-person project combining an OpenStack private cloud, Kubernetes deployment and a residential-management platform with AI-assisted property features.",
    "detail": "Cloud4Saya brings infrastructure and application development together. Our seven-person team built a private cloud with one controller, four compute nodes and two storage nodes, using KVM and OpenStack. A Kubernetes cluster on that infrastructure hosted the Spring Boot REST API and Angular application. The residential platform includes property management alongside user and organisation administration, maintenance, incidents and alerts, finance, community events and solar-energy modules.",
    "features": [
      "Residence, building, apartment and parking management",
      "User authentication, user management and organisation administration",
      "Maintenance management, incident reporting and alerts",
      "Financial management, risk scoring and overdue detection",
      "Community events, registration and feedback",
      "Solar-energy management and gamification modules",
      "Connected Angular interfaces and Spring Boot REST APIs",
      "Residence-photo analysis to estimate floor and apartment counts",
      "Apartment-price prediction using location, area and other property features"
    ],
    "personal": "I implemented the image-analysis and apartment-price prediction features in my part of the project.",
    "flow": [
      "OpenStack + KVM",
      "Kubernetes",
      "Spring Boot API + Angular SPA"
    ],
    "repo": null,
    "credit": "ESPRIT · seven-person academic team",
    "note": "One connected project covering private-cloud infrastructure, automation, monitoring and the residential application. The two property AI features were my individual implementation.",
    "infrastructure": [
      "Keystone — identity and access management",
      "Nova + KVM — virtual-machine compute and virtualisation",
      "Neutron — virtual networks and security rules",
      "Cinder — persistent block-storage volumes",
      "Swift — object storage",
      "Heat — declarative stacks for VMs, networks, volumes and security rules",
      "Ansible — automated configuration of nodes and services",
      "Kubernetes — container orchestration for the Spring Boot API and Angular SPA, with dedicated networks and service ports",
      "Prometheus — distributed metrics collection",
      "Grafana — real-time monitoring dashboards",
      "Alertmanager — alert routing and notifications"
    ]
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
  },
  {
    "id": "jibli",
    "name": "Jibli",
    "sub": "A food-delivery mobile app with connected account roles.",
    "type": "Mobile",
    "year": "Academic",
    "tags": [
      "FlutterFlow",
      "Authentication",
      "Role management",
      "Navigation"
    ],
    "tone": "peach",
    "glyph": "↔",
    "summary": "A team-built food-delivery mobile app connecting client, delivery-person, admin and super-admin experiences.",
    "detail": "Jibli is a food-delivery mobile application built with FlutterFlow. The project brings together clients, delivery personnel, administrators and a super-admin role, with account authentication and navigation linking the application pages.",
    "features": [
      "Client and delivery-person account roles",
      "Administration and super-admin sections",
      "Account authentication flows",
      "Routing and navigation between application pages"
    ],
    "personal": "I contributed to the administration and super-admin sections, account authentication, and the routing and links between pages across the app.",
    "flow": [
      "Account authentication",
      "Client / delivery / admin / super-admin",
      "Connected app pages"
    ],
    "repo": null,
    "credit": "Collaborative academic project",
    "note": "Built with FlutterFlow. Project overview; a public demo is not linked yet."
  }
];
