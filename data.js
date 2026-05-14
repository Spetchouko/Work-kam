// ============================================================
// WORK-KAM — Données de démonstration
// ============================================================

const WK_DATA = {

  stats: {
    offres: 1248,
    candidats: 8640,
    entreprises: 312,
    placements: 2100
  },

  sectors: [
    "Informatique & Tech",
    "Finance & Banque",
    "Santé & Médical",
    "BTP & Construction",
    "Commerce & Vente",
    "Agriculture & Agro",
    "Enseignement & Formation",
    "Télécommunications",
    "Transport & Logistique",
    "Hôtellerie & Tourisme"
  ],

  contractTypes: ["CDI", "CDD", "Stage", "Freelance", "Temps partiel"],

  locations: ["Yaoundé", "Douala", "Bafoussam", "Garoua", "Maroua", "Bamenda", "Limbe", "Kribi", "Buea", "Ngaoundéré"],

  companies: [
    {
      id: 1,
      name: "MTN Cameroun",
      logo: "MTN",
      sector: "Télécommunications",
      description: "Leader des télécommunications en Afrique subsaharienne, MTN Cameroun offre des services mobiles, internet et services financiers à des millions de Camerounais.",
      location: "Douala",
      website: "www.mtn.cm",
      activeOffers: 5,
      employees: "500-2000",
      color: "#FFD700"
    },
    {
      id: 2,
      name: "Afriland First Bank",
      logo: "AFB",
      sector: "Finance & Banque",
      description: "Première banque panafricaine fondée au Cameroun, Afriland First Bank accompagne les particuliers et entreprises dans leurs projets financiers sur tout le continent.",
      location: "Yaoundé",
      website: "www.afrilandfirstbank.com",
      activeOffers: 3,
      employees: "200-500",
      color: "#1a6b3c"
    },
    {
      id: 3,
      name: "Société Générale Cameroun",
      logo: "SGC",
      sector: "Finance & Banque",
      description: "Filiale camerounaise du groupe Société Générale, offrant des services bancaires complets pour les particuliers, PME et grandes entreprises.",
      location: "Douala",
      website: "www.sgcib.cm",
      activeOffers: 4,
      employees: "200-500",
      color: "#e30613"
    },
    {
      id: 4,
      name: "CAMTEL",
      logo: "CMT",
      sector: "Télécommunications",
      description: "Opérateur historique des télécommunications du Cameroun, CAMTEL fournit des solutions internet fibre optique, téléphonie fixe et services d'entreprise.",
      location: "Yaoundé",
      website: "www.camtel.cm",
      activeOffers: 2,
      employees: "1000+",
      color: "#003399"
    },
    {
      id: 5,
      name: "Brasseries du Cameroun",
      logo: "BDC",
      sector: "Commerce & Vente",
      description: "Filiale du groupe Castel, leader dans la production et distribution de boissons au Cameroun avec des marques iconiques comme Castel, Mutzig, et 33 Export.",
      location: "Douala",
      website: "www.brasseriesducameroun.com",
      activeOffers: 6,
      employees: "500-2000",
      color: "#f5a623"
    },
    {
      id: 6,
      name: "Orange Cameroun",
      logo: "ORG",
      sector: "Télécommunications",
      description: "Deuxième opérateur mobile au Cameroun, Orange propose des services voix, data, Orange Money et des solutions digitales innovantes pour les entreprises.",
      location: "Douala",
      website: "www.orange.cm",
      activeOffers: 4,
      employees: "500-2000",
      color: "#FF6900"
    },
    {
      id: 7,
      name: "TechAfrica Solutions",
      logo: "TAS",
      sector: "Informatique & Tech",
      description: "Startup camerounaise spécialisée dans le développement de solutions digitales pour les entreprises africaines : applications mobiles, plateformes web et IA.",
      location: "Yaoundé",
      website: "www.techafrica.cm",
      activeOffers: 7,
      employees: "50-200",
      color: "#00C896"
    },
    {
      id: 8,
      name: "Hôpital Général de Yaoundé",
      logo: "HGY",
      sector: "Santé & Médical",
      description: "Principal hôpital de référence nationale du Cameroun, offrant des soins médicaux de qualité et formant les futurs praticiens de santé du pays.",
      location: "Yaoundé",
      website: "www.hgy.cm",
      activeOffers: 3,
      employees: "1000+",
      color: "#e74c3c"
    }
  ],

  jobs: [
    {
      id: 1,
      title: "Développeur Full Stack React/Node.js",
      company: "TechAfrica Solutions",
      companyId: 7,
      sector: "Informatique & Tech",
      location: "Yaoundé",
      contract: "CDI",
      salary: "300 000 - 500 000 FCFA/mois",
      experience: "2-5 ans",
      date: "2026-05-10",
      expires: "2026-06-10",
      featured: true,
      description: "Nous recherchons un Développeur Full Stack passionné pour rejoindre notre équipe tech en pleine croissance. Vous travaillerez sur des projets d'envergure pour des clients africains et internationaux.",
      responsibilities: [
        "Développer des applications web React et des API Node.js/Express",
        "Concevoir et maintenir des bases de données MongoDB et PostgreSQL",
        "Collaborer avec l'équipe design pour intégrer des interfaces UI/UX",
        "Participer aux revues de code et aux sprints agiles",
        "Contribuer à l'amélioration continue de l'architecture technique"
      ],
      profile: [
        "Maîtrise de React.js, Node.js, et REST API",
        "Expérience avec Git, Docker et CI/CD",
        "Bonne connaissance des bases de données SQL/NoSQL",
        "Capacité à travailler en équipe et en autonomie",
        "Bac+3 minimum en Informatique ou domaine connexe"
      ],
      skills: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Docker", "Git"]
    },
    {
      id: 2,
      title: "Chargé de Clientèle Bancaire",
      company: "Afriland First Bank",
      companyId: 2,
      sector: "Finance & Banque",
      location: "Douala",
      contract: "CDI",
      salary: "250 000 - 350 000 FCFA/mois",
      experience: "1-3 ans",
      date: "2026-05-08",
      expires: "2026-06-08",
      featured: true,
      description: "Afriland First Bank recrute un Chargé de Clientèle dynamique pour développer et fidéliser un portefeuille clients dans notre agence de Douala.",
      responsibilities: [
        "Gérer et développer un portefeuille de clients particuliers et PME",
        "Proposer des produits bancaires adaptés aux besoins des clients",
        "Analyser les dossiers de crédit et formuler des recommandations",
        "Assurer la satisfaction et la fidélisation des clients",
        "Atteindre les objectifs commerciaux mensuels"
      ],
      profile: [
        "Bac+3 en Finance, Banque, Commerce ou équivalent",
        "Expérience en banque ou vente souhaitée",
        "Excellentes compétences en relation client",
        "Bonne maîtrise des outils bureautiques",
        "Résistance au stress et orientation résultats"
      ],
      skills: ["Relation client", "Crédit", "Négociation", "CRM", "Finance", "Excel"]
    },
    {
      id: 3,
      title: "Ingénieur Réseau & Télécoms",
      company: "MTN Cameroun",
      companyId: 1,
      sector: "Télécommunications",
      location: "Douala",
      contract: "CDI",
      salary: "400 000 - 650 000 FCFA/mois",
      experience: "3-7 ans",
      date: "2026-05-05",
      expires: "2026-06-05",
      featured: false,
      description: "MTN Cameroun recrute un Ingénieur Réseau expérimenté pour renforcer notre équipe infrastructure et garantir la qualité de nos services mobiles.",
      responsibilities: [
        "Planifier et optimiser l'architecture réseau 4G/5G",
        "Superviser les équipements réseau et assurer leur maintenance",
        "Analyser les performances et proposer des améliorations",
        "Gérer les incidents réseau et coordonner leur résolution",
        "Documenter les procédures techniques"
      ],
      profile: [
        "Diplôme d'ingénieur en Télécommunications ou équivalent",
        "Expérience en réseau mobile (GSM, LTE, 5G)",
        "Maîtrise des équipements Nokia, Ericsson ou Huawei",
        "Connaissance des protocoles IP et MPLS",
        "Certifications CCNA/CCNP appréciées"
      ],
      skills: ["4G/5G", "Cisco", "Nokia", "MPLS", "IP Routing", "RF Planning"]
    },
    {
      id: 4,
      title: "Responsable Marketing Digital",
      company: "Orange Cameroun",
      companyId: 6,
      sector: "Télécommunications",
      location: "Douala",
      contract: "CDI",
      salary: "350 000 - 500 000 FCFA/mois",
      experience: "3-5 ans",
      date: "2026-05-12",
      expires: "2026-06-12",
      featured: true,
      description: "Orange Cameroun recherche un Responsable Marketing Digital pour piloter notre stratégie de présence en ligne et développer notre marque sur les canaux digitaux.",
      responsibilities: [
        "Définir et exécuter la stratégie marketing digital (SEO, SEA, Social Media)",
        "Gérer les campagnes publicitaires Google Ads et Facebook Ads",
        "Analyser les KPIs et optimiser les performances",
        "Créer du contenu engageant pour les réseaux sociaux",
        "Coordonner avec les agences et prestataires externes"
      ],
      profile: [
        "Bac+4/5 en Marketing, Communication ou Digital",
        "Maîtrise des outils Google Analytics, Ads, Meta Business",
        "Expérience en content marketing et community management",
        "Créativité et sens du résultat",
        "Bilinguisme (français/anglais) apprécié"
      ],
      skills: ["SEO/SEA", "Google Analytics", "Social Media", "Content", "Email Marketing", "Canva"]
    },
    {
      id: 5,
      title: "Comptable Confirmé",
      company: "Brasseries du Cameroun",
      companyId: 5,
      sector: "Finance & Banque",
      location: "Douala",
      contract: "CDI",
      salary: "200 000 - 300 000 FCFA/mois",
      experience: "2-4 ans",
      date: "2026-05-07",
      expires: "2026-06-07",
      featured: false,
      description: "Les Brasseries du Cameroun recrutent un Comptable confirmé pour renforcer leur équipe financière dans un groupe industriel de premier plan.",
      responsibilities: [
        "Tenir la comptabilité générale et analytique",
        "Préparer les états financiers mensuels et annuels",
        "Effectuer les rapprochements bancaires",
        "Gérer les déclarations fiscales et sociales",
        "Contribuer aux audits internes et externes"
      ],
      profile: [
        "Bac+3 en Comptabilité, Finance ou OHADA",
        "Maîtrise du SYSCOHADA révisé",
        "Expérience avec un logiciel comptable (Sage, Ciel...)",
        "Rigueur, discrétion et sens de l'organisation",
        "Bonne maîtrise d'Excel"
      ],
      skills: ["SYSCOHADA", "Sage", "Excel", "Fiscalité", "Audit", "Reporting"]
    },
    {
      id: 6,
      title: "Stage — Développeur Mobile Flutter",
      company: "TechAfrica Solutions",
      companyId: 7,
      sector: "Informatique & Tech",
      location: "Yaoundé",
      contract: "Stage",
      salary: "80 000 - 120 000 FCFA/mois",
      experience: "Débutant",
      date: "2026-05-11",
      expires: "2026-06-11",
      featured: false,
      description: "Rejoins notre équipe mobile en stage de 6 mois pour développer des applications Flutter innovantes dédiées au marché africain.",
      responsibilities: [
        "Développer des fonctionnalités sur nos apps mobiles Flutter",
        "Intégrer des API REST dans les applications",
        "Participer aux tests et debugging",
        "Rédiger la documentation technique",
        "Collaborer avec l'équipe produit"
      ],
      profile: [
        "Étudiant en 3ème année ou Master Informatique",
        "Bases en Dart/Flutter ou souhait d'apprendre",
        "Curiosité et esprit d'équipe",
        "Disponible pour 6 mois minimum"
      ],
      skills: ["Flutter", "Dart", "Firebase", "REST API", "Git"]
    },
    {
      id: 7,
      title: "Médecin Généraliste",
      company: "Hôpital Général de Yaoundé",
      companyId: 8,
      sector: "Santé & Médical",
      location: "Yaoundé",
      contract: "CDI",
      salary: "450 000 - 700 000 FCFA/mois",
      experience: "1-3 ans",
      date: "2026-05-09",
      expires: "2026-06-09",
      featured: false,
      description: "L'Hôpital Général de Yaoundé recrute des médecins généralistes pour renforcer son corps médical dans ses différents services.",
      responsibilities: [
        "Assurer les consultations médicales générales",
        "Établir des diagnostics et prescriptions",
        "Participer aux gardes et astreintes",
        "Assurer le suivi des patients hospitalisés",
        "Collaborer avec les médecins spécialistes"
      ],
      profile: [
        "Doctorat en Médecine (Docteur en médecine)",
        "Inscription au Conseil National de l'Ordre des Médecins du Cameroun",
        "Rigueur clinique et sens de l'éthique médicale",
        "Bonne communication avec les patients",
        "Résistance au stress et aux situations d'urgence"
      ],
      skills: ["Diagnostic", "Consultation", "Urgences", "Suivi patients", "Prescription"]
    },
    {
      id: 8,
      title: "Commercial Terrain — Boissons",
      company: "Brasseries du Cameroun",
      companyId: 5,
      sector: "Commerce & Vente",
      location: "Bafoussam",
      contract: "CDI",
      salary: "150 000 - 250 000 FCFA + Commissions",
      experience: "1-3 ans",
      date: "2026-05-06",
      expires: "2026-06-06",
      featured: false,
      description: "Développez le portefeuille clients des Brasseries du Cameroun dans la région de l'Ouest en tant que Commercial Terrain dynamique et motivé.",
      responsibilities: [
        "Prospecter et développer un réseau de distributeurs/revendeurs",
        "Atteindre les objectifs de vente mensuels",
        "Assurer la visibilité des produits chez les clients",
        "Collecter les paiements et gérer les comptes clients",
        "Remonter les informations marché à la hiérarchie"
      ],
      profile: [
        "Bac+2 minimum en Commerce ou Marketing",
        "Permis de conduire B obligatoire",
        "Expérience en vente terrain appréciée",
        "Excellent relationnel et goût du challenge",
        "Connaissance de la région Ouest appréciée"
      ],
      skills: ["Vente terrain", "Négociation", "CRM", "Reporting", "Prospection"]
    },
    {
      id: 9,
      title: "Analyste Financier Senior",
      company: "Société Générale Cameroun",
      companyId: 3,
      sector: "Finance & Banque",
      location: "Douala",
      contract: "CDI",
      salary: "500 000 - 800 000 FCFA/mois",
      experience: "5+ ans",
      date: "2026-05-03",
      expires: "2026-06-03",
      featured: false,
      description: "SG Cameroun recherche un Analyste Financier Senior pour renforcer son département risque et structure des financements corporate.",
      responsibilities: [
        "Analyser la solvabilité et la rentabilité des dossiers de financement",
        "Structurer des montages financiers complexes",
        "Préparer des notes de crédit pour le comité d'engagement",
        "Assurer la veille réglementaire et sectorielle",
        "Former et encadrer les analystes juniors"
      ],
      profile: [
        "Bac+5 en Finance, Économie ou Grande École de Commerce",
        "Expérience en banque d'investissement ou corporate banking",
        "Maîtrise des modèles financiers (DCF, LBO)",
        "Excellente maîtrise d'Excel et PowerPoint",
        "Bilinguisme français/anglais obligatoire"
      ],
      skills: ["Modélisation", "DCF", "LBO", "Crédit", "Excel", "Finance corporate"]
    },
    {
      id: 10,
      title: "Chef de Projet BTP",
      company: "Afriland First Bank",
      companyId: 2,
      sector: "BTP & Construction",
      location: "Yaoundé",
      contract: "CDD",
      salary: "350 000 - 550 000 FCFA/mois",
      experience: "3-6 ans",
      date: "2026-05-01",
      expires: "2026-06-01",
      featured: false,
      description: "Dans le cadre de l'expansion de notre réseau d'agences, Afriland First Bank recrute un Chef de Projet BTP pour superviser les travaux de construction et rénovation.",
      responsibilities: [
        "Superviser les chantiers de construction et rénovation d'agences",
        "Coordonner les équipes d'architectes et d'entrepreneurs",
        "Gérer les budgets et les délais des projets",
        "Assurer le contrôle qualité des travaux",
        "Rédiger les rapports d'avancement"
      ],
      profile: [
        "Ingénieur en Génie Civil ou Architecture",
        "Expérience en gestion de projets BTP",
        "Maîtrise des logiciels AutoCAD, MS Project",
        "Leadership et capacité à gérer plusieurs projets simultanément",
        "Disponibilité pour des déplacements fréquents"
      ],
      skills: ["Génie Civil", "AutoCAD", "MS Project", "Gestion de chantier", "Budget"]
    },
    {
      id: 11,
      title: "Technicien Fibre Optique",
      company: "CAMTEL",
      companyId: 4,
      sector: "Télécommunications",
      location: "Yaoundé",
      contract: "CDD",
      salary: "150 000 - 220 000 FCFA/mois",
      experience: "1-3 ans",
      date: "2026-04-28",
      expires: "2026-05-28",
      featured: false,
      description: "CAMTEL recrute des Techniciens Fibre Optique pour déployer et maintenir notre réseau internet haut débit à travers le Cameroun.",
      responsibilities: [
        "Installer et raccorder les câbles fibre optique",
        "Réaliser les soudures et mesures de continuité",
        "Diagnostiquer et réparer les pannes réseau",
        "Réaliser les plans d'installation",
        "Assurer la maintenance préventive"
      ],
      profile: [
        "BTS Télécommunications ou Électronique",
        "Expérience en installation fibre ou câbles",
        "Maîtrise des outils de mesure optique (OTDR)",
        "Sens du travail en hauteur si nécessaire",
        "Permis B apprécié"
      ],
      skills: ["Fibre Optique", "OTDR", "Soudure", "Réseau", "Câblage"]
    },
    {
      id: 12,
      title: "Data Analyst — Business Intelligence",
      company: "TechAfrica Solutions",
      companyId: 7,
      sector: "Informatique & Tech",
      location: "Yaoundé",
      contract: "CDI",
      salary: "280 000 - 420 000 FCFA/mois",
      experience: "2-4 ans",
      date: "2026-04-25",
      expires: "2026-05-25",
      featured: false,
      description: "Rejoignez notre division data pour aider nos clients africains à exploiter leurs données et prendre de meilleures décisions stratégiques grâce à la BI.",
      responsibilities: [
        "Collecter, nettoyer et analyser des données complexes",
        "Créer des tableaux de bord et rapports BI (Power BI, Tableau)",
        "Identifier des insights et tendances actionnables",
        "Collaborer avec les équipes métier pour définir les KPIs",
        "Former les clients à l'utilisation des outils BI"
      ],
      profile: [
        "Bac+4/5 en Statistiques, Mathématiques, Informatique ou Data Science",
        "Maîtrise de SQL, Python et Excel avancé",
        "Expérience avec Power BI ou Tableau",
        "Esprit analytique et sens de la communication",
        "Expérience en conseil ou IT serait un plus"
      ],
      skills: ["SQL", "Python", "Power BI", "Tableau", "Excel", "Data Science"]
    }
  ],

  candidateProfile: {
    name: "Jean-Baptiste Mvondo",
    email: "jb.mvondo@gmail.com",
    phone: "+237 677 234 890",
    location: "Yaoundé, Cameroun",
    photo: "JBM",
    title: "Développeur Web Full Stack",
    bio: "Développeur passionné avec 4 ans d'expérience dans la création d'applications web modernes. Spécialisé en React et Node.js, j'aspire à contribuer à des projets innovants qui ont un impact positif sur l'Afrique.",
    skills: ["React.js", "Node.js", "JavaScript", "Python", "PostgreSQL", "Docker", "Git", "REST API", "MongoDB", "TypeScript"],
    experience: [
      { role: "Développeur Frontend Senior", company: "DigitalCam Agency", period: "2024 — Présent", desc: "Développement d'interfaces React pour des clients e-commerce et bancaires." },
      { role: "Développeur Web Junior", company: "StartupYaoundé", period: "2022 — 2024", desc: "Création de sites vitrine et applications web avec WordPress et Vue.js." }
    ],
    education: [
      { degree: "Licence Informatique", school: "Université de Yaoundé I", year: "2022" },
      { degree: "DUT Génie Logiciel", school: "IUT Yaoundé", year: "2020" }
    ],
    availability: "Immédiatement",
    contractWanted: "CDI",
    salaryMin: "300 000 FCFA",
    completeness: 82,
    applications: [
      { id: 1, job: "Développeur Full Stack React/Node.js", company: "TechAfrica Solutions", date: "2026-05-11", status: "En cours", statusClass: "status-progress" },
      { id: 2, job: "Responsable Marketing Digital", company: "Orange Cameroun", date: "2026-05-08", status: "En attente", statusClass: "status-pending" },
      { id: 3, job: "Analyste Financier Senior", company: "Société Générale Cameroun", date: "2026-04-30", status: "Refusé", statusClass: "status-rejected" },
      { id: 4, job: "Data Analyst — Business Intelligence", company: "TechAfrica Solutions", date: "2026-04-26", status: "Accepté", statusClass: "status-accepted" }
    ],
    savedJobs: [1, 3, 9, 12]
  },

  companyDashboard: {
    name: "TechAfrica Solutions",
    logo: "TAS",
    sector: "Informatique & Tech",
    location: "Yaoundé",
    description: "Startup camerounaise spécialisée dans le développement de solutions digitales pour les entreprises africaines.",
    stats: {
      activeOffers: 7,
      totalApplications: 48,
      newThisWeek: 12,
      hired: 3
    },
    offers: [
      { id: 1, title: "Développeur Full Stack React/Node.js", applications: 18, status: "Publié", date: "2026-05-10", expires: "2026-06-10" },
      { id: 6, title: "Stage — Développeur Mobile Flutter", applications: 22, status: "Publié", date: "2026-05-11", expires: "2026-06-11" },
      { id: 12, title: "Data Analyst — Business Intelligence", applications: 8, status: "Publié", date: "2026-04-25", expires: "2026-05-25" },
      { id: 13, title: "UX/UI Designer", applications: 0, status: "Brouillon", date: "2026-05-13", expires: "2026-06-13" }
    ],
    recentApplications: [
      { name: "Jean-Baptiste Mvondo", job: "Développeur Full Stack React/Node.js", date: "2026-05-11", status: "En cours", match: 92 },
      { name: "Aïcha Fouda", job: "Stage — Développeur Mobile Flutter", date: "2026-05-12", status: "En attente", match: 88 },
      { name: "Patrick Ngono", job: "Data Analyst — Business Intelligence", date: "2026-05-10", status: "En cours", match: 75 },
      { name: "Mireille Nkeng", job: "Développeur Full Stack React/Node.js", date: "2026-05-09", status: "Refusé", match: 61 },
      { name: "Samuel Biya", job: "Stage — Développeur Mobile Flutter", date: "2026-05-08", status: "Accepté", match: 95 }
    ]
  }
};
