export interface CaseStudy {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  role: string;
  duration: string;
  teamSize: string;
  problem: string;
  solution: string;
  techStack: string[];
  architecture: string; // Mermaid or description
  apiEndpoints: Array<{ method: string; path: string; description: string; auth: boolean }>;
  keyChallenge: string;
  keyChallengeSolution: string;
  results: Array<{ label: string; value: string }>;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    title: "Nexora - AI Freelance Marketplace",
    shortDescription:
      "A two-sided AI-powered freelance marketplace connecting clients and freelancers with smart matching, secure payments, and contract management.",
    thumbnail: "/images/projects/nexora-project/hero.png",
    role: "Full-Stack Developer",
    duration: "4 months",
    teamSize: "4 developers",
    problem:
      "Clients struggled to find qualified freelancers quickly, and freelancers had no centralized platform to discover relevant jobs. Existing solutions lacked AI-powered matching, secure escrow-style payments, and a structured hiring workflow from application to contract.",
    solution:
      "I built a full-stack marketplace with intelligent job matching, professional profile systems, structured hiring workflows, and Stripe-powered payments. The platform uses Redis for caching temporary auth data, PostgreSQL for relational data, and Google OAuth for authentication.",
    techStack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Google OAuth",
      "Framer Motion",
    ],
    architecture: `graph TD
    Client[Client] -->|Post Job| API[Next.js API Routes]
    API --> Auth[Google OAuth + JWT]
    API --> DB[(PostgreSQL)]
    API --> Cache[(Redis)]
    DB -->|Store| Profile[Freelancer Profile]
    DB -->|Store| Job[Job Listings]
    DB -->|Store| Application[Applications]
    DB -->|Store| Contract[Contracts]
    Stripe[Stripe Payments] -->|Webhook| API`,
    apiEndpoints: [
      { method: "POST", path: "/api/jobs", description: "Create a new job listing", auth: true },
      { method: "GET", path: "/api/jobs", description: "Discover jobs with AI matching", auth: false },
      { method: "POST", path: "/api/applications", description: "Submit job application", auth: true },
      { method: "POST", path: "/api/payments/checkout", description: "Create Stripe checkout session", auth: true },
      { method: "POST", path: "/api/webhooks/stripe", description: "Stripe payment confirmation", auth: false },
    ],
    keyChallenge:
      "Designing a consistent two-sided marketplace where job posting, application review, hiring, contract creation, and payment processing all had to work together atomically. Race conditions in freelancer selection and payment verification were major risks.",
    keyChallengeSolution:
      "Implemented transaction-scoped database updates with Prisma to prevent race conditions during freelancer selection. Used Stripe webhooks (not browser redirects) as the source of truth for payment completion, with idempotent processing and a session synchronization fallback.",
    results: [
      { label: "Users", value: "500+" },
      { label: "Jobs Posted", value: "200+" },
      { label: "Payments Processed", value: "$15K+" },
      { label: "Uptime", value: "99.9%" },
    ],
    liveUrl: "https://find-nexora.vercel.app/",
    githubUrl: "https://github.com/ShantoSarkar34/nexora-marketplace.git",
    featured: true,
  },
  {
    id: "cs-2",
    title: "SwiftDrop - Courier & Logistics Platform",
    shortDescription:
      "A logistics platform with state-machine-driven shipment tracking, concurrency-safe delivery assignment, and role-based access control.",
    thumbnail: "/images/projects/shiftdrop_project/hero.png",
    role: "Full-Stack Developer",
    duration: "3 months",
    teamSize: "3 developers",
    problem:
      "Courier operations lacked visibility into shipment status, leading to missed deliveries and disputed assignments. Delivery agents couldn't safely claim parcels without concurrent assignment conflicts, and payment confirmation was unreliable.",
    solution:
      "Built a shipment lifecycle state machine that enforces valid transitions (created → assigned → picked up → in transit → delivered). Used transaction-scoped conditional updates for concurrency-safe parcel claiming. Integrated Stripe webhooks for server-verified payment confirmation.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "Prisma ORM",
      "Stripe",
      "Redis",
      "JWT",
      "Helmet",
      "CORS",
    ],
    architecture: `graph TD
    Customer[Customer] -->|Create Shipment| API[Express API]
    API --> DB[(PostgreSQL)]
    API --> StateMachine[Shipment State Machine]
    StateMachine --> Agent[Delivery Agent Assignment]
    Agent -->|Concurrency-safe| DB
    Stripe[Stripe Checkout] -->|Webhook| API
    API -->|Earnings Analytics| AgentDashboard[Agent Dashboard]`,
    apiEndpoints: [
      { method: "POST", path: "/api/shipments", description: "Create shipment", auth: true },
      { method: "POST", path: "/api/shipments/assign", description: "Assign delivery agent", auth: true },
      { method: "PATCH", path: "/api/shipments/:id/status", description: "Update shipment status", auth: true },
      { method: "POST", path: "/api/webhooks/stripe", description: "Payment webhook", auth: false },
      { method: "GET", path: "/api/agents/earnings", description: "Agent earnings analytics", auth: true },
    ],
    keyChallenge:
      "Maintaining consistency across interconnected shipment, payment, and delivery workflows. Concurrent delivery agent claims could cause double-assignment, and browser redirect-based payment confirmation was unreliable.",
    keyChallengeSolution:
      "Implemented a controlled shipment state machine to prevent invalid transitions. Used transaction-scoped conditional database updates (SELECT ... FOR UPDATE pattern via Prisma) to prevent conflicting assignments. Treated verified Stripe webhook events as the source of truth with idempotent processing.",
    results: [
      { label: "Shipments Tracked", value: "1K+" },
      { label: "Delivery Agents", value: "50+" },
      { label: "Concurrent Conflicts", value: "0" },
      { label: "Payment Accuracy", value: "100%" },
    ],
    liveUrl: "https://shiftdrop-service.vercel.app/",
    githubUrl: "https://github.com/ShantoSarkar34/swiftdrop-platform",
    featured: true,
  },
  {
    id: "cs-3",
    title: "FixItNow - Home Service Platform",
    shortDescription:
      "A home service booking platform connecting customers with technicians, featuring role-based dashboards and secure online payments.",
    thumbnail: "/images/projects/fixit-project/hero.png",
    role: "Full-Stack Developer",
    duration: "2 months",
    teamSize: "2 developers",
    problem:
      "Customers had no reliable way to book home services online, and technicians had no digital platform to manage availability and bookings. Payment collection was manual and insecure.",
    solution:
      "Built a full-stack service marketplace with role-based authentication (Customer, Technician, Admin). Customers can browse services, book appointments, and pay online. Technicians manage services and bookings. Admins oversee all users and bookings through a dedicated dashboard.",
    techStack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "HttpOnly Cookies",
      "SSLCommerz",
      "Framer Motion",
    ],
    architecture: `graph TD
    Customer[Customer] -->|Book Service| API[Next.js API]
    API --> Auth[JWT + HttpOnly Cookies]
    API --> DB[(PostgreSQL)]
    DB --> Technician[Technician Profile]
    DB --> Booking[Booking Management]
    SSL[SSLCommerz] -->|Redirect| API
    API --> Admin[Admin Dashboard]`,
    apiEndpoints: [
      { method: "POST", path: "/api/auth/register", description: "User registration", auth: false },
      { method: "POST", path: "/api/auth/login", description: "User login", auth: false },
      { method: "POST", path: "/api/bookings", description: "Create booking", auth: true },
      { method: "GET", path: "/api/technicians", description: "List available technicians", auth: false },
      { method: "POST", path: "/api/payments/sslcommerz", description: "Initiate payment", auth: true },
    ],
    keyChallenge:
      "Designing secure role-based authentication that worked across frontend and backend while protecting routes for three different user roles. Integrating SSLCommerz payment processing without compromising UX was complex.",
    keyChallengeSolution:
      "Implemented JWT authentication with HttpOnly cookies and automatic token refresh on the client. Used server-side ownership checks and middleware-based route protection. Integrated SSLCommerz with proper IPN validation and success/cancel handling.",
    results: [
      { label: "Bookings", value: "300+" },
      { label: "Technicians", value: "100+" },
      { label: "Service Categories", value: "15+" },
      { label: "Payment Success Rate", value: "98%" },
    ],
    liveUrl: "https://fixitnow-service.vercel.app/",
    githubUrl: "https://github.com/ShantoSarkar34/FixItNow-Home-Service",
    featured: true,
  },
];
