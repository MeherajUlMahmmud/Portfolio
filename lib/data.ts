// All portfolio content lives here so the site can be updated without touching components.

export const profile = {
  name: 'Meharaj Ul Mahmmud',
  shortName: 'Meharaj',
  role: 'Software Engineer · AI/ML',
  status: 'Senior Officer, AI/ML R&D at Dutch-Bangla Bank',
  location: 'Dhaka, Bangladesh',
  email: 'meharajulmahmmud@gmail.com',
  phone: '+880 1814-325624',
  siteUrl: 'https://meheraj.netlify.app',
  resumeUrl: '/resume.pdf',
  headline: 'I build LLM, OCR and fraud-detection systems that take manual work out.',
  summary:
    'Software Engineer with 4+ years of experience in machine learning and backend systems. At Dutch-Bangla Bank PLC I lead R&D on LLMs, RAG and document AI, and ship production systems for fraud detection, credit assessment and cross-border payments. Outside work I build full-stack AI apps, Flutter apps and developer tools.',
  currently: [
    'Building RAG and document-AI pipelines for banking',
    'Designing in-house LLM infrastructure (vLLM, Ollama)',
    'Shipping Photon, a local-first desktop AI agent',
  ],
}

export const socials = {
  github: 'https://github.com/meharaj-007',
  linkedin: 'https://www.linkedin.com/in/meherajulmahmmud/',
  medium: 'https://meheraj.medium.com/',
}

export const stats = [
  { value: '4+', label: 'Years in industry' },
  { value: '90%+', label: 'Manual reconciliation removed' },
  { value: '3.6M', label: 'Liveness checks served' },
  { value: '2', label: 'Springer publications' },
]

export type Experience = {
  role: string
  company: string
  companyUrl?: string
  location: string
  period: string
  current?: boolean
  highlights: { title: string; points: string[] }[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    role: 'Senior Officer, IT Development Division',
    company: 'Dutch-Bangla Bank PLC',
    companyUrl: 'https://www.dutchbanglabank.com/',
    location: 'Dhaka, Bangladesh',
    period: 'May 2024 – Present',
    current: true,
    highlights: [
      {
        title: 'AI/ML Research & Development',
        points: [
          'Lead R&D on LLMs, RAG, vector search, voice banking and AI chatbots using Ollama and vLLM.',
          'Designed the strategy for in-house AI/LLM infrastructure focused on data sovereignty, regulatory compliance and horizontal scalability.',
        ],
      },
      {
        title: 'Internal AI Chatbot (Knowledge Retrieval)',
        points: [
          'Hybrid search (vector similarity + keyword) with query caching cut response latency by 60% and compute overhead by 45%.',
          'Knowledge pipeline: PDF/image parsing → multi-engine OCR (PaddleOCR, Tesseract) → contextual understanding → embeddings → vector DB.',
        ],
      },
      {
        title: 'ML Fraud Detection & Anomaly Monitoring',
        points: [
          'Behavioural profiling of customer transactions by velocity, amount distribution, merchant category, geography and timing.',
          'K-means segmentation combined with Isolation Forest flags suspicious transactions in real time while keeping false positives low.',
        ],
      },
      {
        title: 'Intelligent Document Processing & Credit Assessment',
        points: [
          'LLM-based OCR extracts data from CIB reports, bank statements, loan applications and NID cards with 95%+ accuracy.',
          'CIB extraction and credit scoring for automated loan approval reduced processing time by 75%.',
        ],
      },
      {
        title: 'Cross-Border Transaction Automation',
        points: [
          'SWIFT MT103, MT940, MT950, MT942 and MT910 parsing, matching and rule-based classification, reconciling statements and credit confirmations against payment instructions. Cut reconciliation from hours to minutes and removed 90%+ of manual effort.',
          'Led migration from legacy MT103 to ISO 20022 pacs.008 for cross-border payment compliance.',
        ],
      },
    ],
    tech: ['Python', 'Django REST', 'LangChain', 'vLLM', 'Ollama', 'ChromaDB', 'PaddleOCR', 'Scikit-learn', 'PostgreSQL', 'Java', 'Spring Boot', 'Oracle PL/SQL', 'React', 'TypeScript'],
  },
  {
    role: 'Management Trainee Officer, IT Development Division',
    company: 'Dutch-Bangla Bank PLC',
    companyUrl: 'https://www.dutchbanglabank.com/',
    location: 'Dhaka, Bangladesh',
    period: 'May 2023 – May 2024',
    highlights: [
      {
        title: 'AI Face Liveness Detection (e-KYC)',
        points: [
          'Designed and trained a custom CNN on 100,000+ images, reaching 99.9% accuracy in production.',
          'Detects 3D masks, printed photos and screen-replay attacks through multi-layer checks.',
          'Served as an API to 3 onboarding systems: ~20,000 requests/day, ~3.6M over 6 months.',
        ],
      },
      {
        title: 'Enterprise Captcha Generation Service',
        points: [
          'REST API for dynamic captchas with multi-level pattern complexity, configurable distortion levels and character sets.',
          'Load-balanced and serving 15+ customer-facing and internal banking systems at under 30ms per response, cutting automated bot attacks by 85%.',
        ],
      },
    ],
    tech: ['Python', 'Flask', 'TensorFlow', 'Keras', 'OpenCV', 'Java', 'Spring Boot'],
  },
  {
    role: 'Jr. Software Engineer',
    company: 'Mirailit Ltd',
    companyUrl: 'https://mirailit.com/',
    location: 'Dhaka, Bangladesh',
    period: 'Feb 2022 – May 2023',
    highlights: [
      {
        title: 'Backend & Mobile',
        points: [
          'Built and maintained scalable REST APIs with Python and Django REST Framework.',
          'Created an NLP-based product mapping model for product comparison and recommendation.',
          'Built and published cross-platform Flutter apps for internal business operations.',
        ],
      },
    ],
    tech: ['Python', 'Django', 'DRF', 'NLP', 'Flutter'],
  },
]

export type ProjectCategory = 'AI / ML' | 'Full-stack' | 'Mobile' | 'Tools'

export type Screenshot = { src: string; alt: string; width: number; height: number }

export type Project = {
  title: string
  description: string
  category: ProjectCategory
  tech: string[]
  year: string
  source?: string
  live?: string
  status?: string
  featured?: boolean
  /** The first is the card's cover; all open full size on click. */
  screenshots?: Screenshot[]
}

export const projects: Project[] = [
  {
    title: 'Photon',
    description:
      'Local-first desktop AI teammate. An Electron app runs sandboxed tools (files, shell) inside your workspace while a Django server handles auth, encrypted secrets and routing across LLM providers, with an approval step before any write or shell command.',
    category: 'AI / ML',
    tech: ['TypeScript', 'Electron', 'Django', 'DRF', 'LLM agents'],
    year: '2026',
    source: 'https://github.com/meharaj-007/photon',
    status: 'In progress',
    featured: true,
  },
  {
    title: 'oss-clarity',
    description:
      'Open-source, self-hosted session replay and heatmaps for Django. Text is masked in the browser and no IP addresses are stored; 15 documented rules flag rage clicks, dead clicks and form abandons for review in Django admin.',
    category: 'Tools',
    tech: ['Django', 'TypeScript', 'rrweb', 'Celery', 'PostgreSQL'],
    year: '2026',
    source: 'https://github.com/meharaj-007/oss-clarity',
    featured: true,
  },
  {
    title: 'bKash Statement Analyzer',
    description:
      'Turns the password-protected statement PDF that bKash emails into a spending dashboard: balance over time, cash flow, fees, top recipients and when you transact. The PDF is decrypted and parsed entirely in the browser; nothing is uploaded or stored.',
    category: 'Tools',
    tech: ['Next.js', 'TypeScript', 'pdf.js', 'Tailwind', 'Vitest'],
    year: '2026',
    source: 'https://github.com/meharaj-007/bkash-analyzer',
    live: 'https://meharaj-007.github.io/bkash-analyzer/',
    featured: true,
    screenshots: [
      { src: '/projects/bkash-overview.png', alt: 'Dashboard overview: net position, money in and out, fees and insights', width: 1280, height: 800 },
      { src: '/projects/bkash-charts.png', alt: 'Balance over time and money in versus money out by month', width: 1280, height: 800 },
      { src: '/projects/bkash-breakdown.png', alt: 'Where the money goes, where it comes from, top recipients and fees', width: 1280, height: 800 },
    ],
  },
  {
    title: 'Bank Statement Parser',
    description:
      'Extracts transactions from PDF bank statements of any layout using vision LLMs. Pages are processed in parallel, validated with Pydantic and returned with confidence scores and token-cost tracking.',
    category: 'AI / ML',
    tech: ['Python', 'Flask', 'GroqCloud Vision', 'React', 'Tailwind'],
    year: '2026',
    source: 'https://github.com/meharaj-007/bank-statement-parser',
    featured: true,
  },
  {
    title: 'Data Profiler',
    description:
      'Python library that turns a pandas DataFrame into a quality report: completeness, types, statistics, correlations and plots, exported as a Word document.',
    category: 'Tools',
    tech: ['Python', 'pandas', 'matplotlib', 'python-docx'],
    year: '2025',
    source: 'https://github.com/meharaj-007/Data-Profiling',
    featured: true,
  },
  {
    title: 'Pomodoro',
    description:
      'Focus timer with task management, session history, productivity charts, streaks and achievements.',
    category: 'Mobile',
    tech: ['Flutter', 'Dart'],
    year: '2025',
  },
  {
    title: 'GoCV',
    description:
      'Resume builder app to create, edit and preview resumes and export them as PDF, in English and Bengali, backed by a Django REST API shared with JobBoard. My most-starred repository, with 18 stars and 8 forks.',
    category: 'Mobile',
    tech: ['Flutter', 'Dart', 'Django REST'],
    year: '2024',
    source: 'https://github.com/meharaj-007/GoCV',
    featured: true,
  },
  {
    title: 'JobBoard',
    description: 'Job search platform for mobile with a Django REST backend.',
    category: 'Mobile',
    tech: ['Flutter', 'Django REST'],
    year: '2024',
    source: 'https://github.com/meharaj-007/JobBoard',
  },
  {
    title: 'Shining Services',
    description: 'Full-stack website for an Australian cleaning services company.',
    category: 'Full-stack',
    tech: ['React', 'Django REST', 'PostgreSQL'],
    year: '2023',
    live: 'https://www.shiningservices.com.au/',
  },
  {
    title: 'Browsing History Saver',
    description: 'Browser extension that saves, searches and exports your browsing history locally, with CSV export.',
    category: 'Tools',
    tech: ['JavaScript', 'Chrome Extension'],
    year: '2023',
    source: 'https://github.com/meharaj-007/Browsing-History-Extension',
  },
  {
    title: 'JobLand',
    description:
      'Job portal where companies post roles and rate applicants, and applicants apply and keep a public profile.',
    category: 'Full-stack',
    tech: ['Django', 'PostgreSQL'],
    year: '2021',
    source: 'https://github.com/meharaj-007/JobLand',
  },
  {
    title: 'Farmers Activity Prediction',
    description:
      'Pose estimation model that recognises farmer activities, served through a Django REST API to a Flutter app.',
    category: 'AI / ML',
    tech: ['Pose estimation', 'Django REST', 'Flutter'],
    year: '2022',
    source: 'https://github.com/meharaj-007/Farmers-Activity-Prediction',
  },
  {
    title: 'PLOMS',
    description: 'Parking lot occupancy and management system with a React client, Node.js server and Python ML service.',
    category: 'Full-stack',
    tech: ['React', 'Node.js', 'Python', 'OpenCV'],
    year: '2022',
    source: 'https://github.com/meharaj-007/PLOMS-Client',
  },
  {
    title: 'AMIC',
    description:
      'Cloud-based healthcare system: doctor appointments, blood and plasma donation, health advice and a blog.',
    category: 'Full-stack',
    tech: ['Django', 'PostgreSQL'],
    year: '2021',
  },
  {
    title: 'Algorithm Visualizers',
    description: 'Interactive visualizations of A* pathfinding, sorting algorithms, star fields and the toothpick sequence.',
    category: 'Tools',
    tech: ['JavaScript', 'p5.js'],
    year: '2021',
    source: 'https://github.com/meharaj-007/Sort-Viz',
    live: 'https://a-star-visu.netlify.app',
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'Oracle PL/SQL', 'Dart', 'C/C++'] },
  { group: 'AI & LLM', items: ['LangChain', 'RAG', 'vLLM', 'Ollama', 'ChromaDB', 'Vector search', 'Agents & tool use', 'PaddleOCR', 'Tesseract'] },
  { group: 'Machine Learning', items: ['TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'YOLO', 'NLP', 'CNN', 'Anomaly detection'] },
  { group: 'Backend', items: ['Django', 'Django REST', 'FastAPI', 'Flask', 'Spring Boot', 'Node.js', 'Celery'] },
  { group: 'Frontend & Mobile', items: ['React', 'Next.js', 'Tailwind CSS', 'Electron', 'Flutter', 'React Native', 'Android'] },
  { group: 'Data & Infra', items: ['Oracle', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase', 'Redis', 'RabbitMQ', 'Docker', 'AWS', 'GCP', 'Jenkins', 'Git'] },
]

export const education = {
  degree: 'B.Sc. in Computer Science and Engineering',
  institution: 'East West University',
  location: 'Dhaka, Bangladesh',
  period: 'Apr 2018 – May 2022',
  specialization: 'Data Science and Artificial Intelligence',
  cgpa: '3.64 / 4.00',
  coursework: ['Machine Learning', 'Data Mining', 'Algorithm Design', 'Database Systems', 'Software Engineering'],
}

export const achievements = [
  { year: '2021–22', title: "Dean's List", detail: 'East West University' },
  { year: '2019–21', title: 'Medha Lalon Scholarship', detail: 'For outstanding academic performance' },
  { year: '2021', title: 'Undergraduate Teaching Assistant', detail: 'Department of CSE, East West University' },
]

export const earlierEducation = [
  { title: 'HSC, Science', institution: 'Al-Haz Noor Mia Degree College, Cumilla', result: 'GPA 4.00 / 5.00', year: '2017' },
  { title: 'SSC, Science', institution: 'Senbag Govt. Pilot High School, Noakhali', result: 'GPA 5.00 / 5.00', year: '2015' },
]

export const publications = [
  {
    title: 'Human Posture Estimation: In the Aspect of Agricultural Industry',
    authors: 'Mahmmud, M.U., Ahmed, M.A., Alam, S.M., Imam, O.T., Reza, A.W., Arefin, M.S.',
    venue: 'Third International Conference on Image Processing and Capsule Networks (ICIPCN 2022)',
    year: '2022',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-12413-6_38',
  },
  {
    title: 'Improved Virtualization to Reduce e-Waste in Green Computing',
    authors: 'Mahmmud, M.U., Laskar, M.S., Arafin, M., Molla, M.S., Reza, A.W., Arefin, M.S.',
    venue: 'International Conference on Intelligent Computing & Optimization (ICO 2022)',
    year: '2023',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-19958-5_35',
  },
]

export const articles = [
  {
    title: 'Linear Regression: Raw Python Implementation',
    description: 'Univariate linear regression from scratch, without ML libraries.',
    url: 'https://medium.com/@meheraj/linear-regression-raw-python-implementation-d797f5e3508d',
  },
  {
    title: 'Basics of Linear Algebra',
    description: 'Core linear algebra operations implemented in plain Python.',
    url: 'https://medium.com/@meheraj/basics-of-linear-algebra-4ef0570a8313',
  },
  {
    title: 'Inverting a Matrix in Python',
    description: 'A step-by-step script to invert a 3×3 square matrix.',
    url: 'https://medium.com/@meheraj/inverting-a-matrix-in-python-3f7c1c136cf4',
  },
]
