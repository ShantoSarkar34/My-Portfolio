export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web development from database design to frontend deployment. I build scalable, production-ready applications using Next.js, Node.js, PostgreSQL, and modern frontend ecosystems.",
    icon: "FaLaptopCode",
    features: [
      "Next.js App Router architecture",
      "REST & GraphQL API design",
      "Server-side rendering & static generation",
      "Responsive, mobile-first UI",
    ],
  },
  {
    id: "svc-2",
    title: "API & Backend Development",
    description:
      "Secure, performant backend services with proper authentication, authorization, and data integrity. I design REST APIs with Express.js, integrate databases with Prisma ORM, and implement transaction-safe workflows.",
    icon: "FaServer",
    features: [
      "Node.js + Express.js APIs",
      "JWT authentication & OAuth",
      "Database transactions & state machines",
      "Webhooks & background jobs",
    ],
  },
  {
    id: "svc-3",
    title: "Database Design & Optimization",
    description:
      "Relational data modeling with PostgreSQL and Prisma. I design normalized schemas, write efficient queries, implement indexing strategies, and ensure data consistency across transactions.",
    icon: "FaDatabase",
    features: [
      "PostgreSQL schema design",
      "Prisma ORM modeling",
      "Query optimization & indexing",
      "Data migration & seeding",
    ],
  },
  {
    id: "svc-4",
    title: "Payments & E-commerce Integration",
    description:
      "Secure payment processing with Stripe and SSLCommerz. I implement Checkout Sessions, webhook verification, idempotent payment handling, and order lifecycle management.",
    icon: "FaCreditCard",
    features: [
      "Stripe Checkout & Webhooks",
      "SSLCommerz integration",
      "Idempotent payment processing",
      "Order & invoice management",
    ],
  },
  {
    id: "svc-5",
    title: "Authentication & Authorization",
    description:
      "Production-grade auth systems with JWT access tokens, rotating refresh tokens, HttpOnly cookies, and social OAuth providers. Role-based access control for multi-tenant applications.",
    icon: "FaShieldAlt", 
    features: [
      "JWT + rotating refresh tokens",
      "HttpOnly cookie storage",
      "Google OAuth & social login",
      "Role-based access control",
    ],
  },
  {
    id: "svc-6",
    title: "Deployment & DevOps",
    description:
      "CI/CD pipelines, containerization, and cloud deployment. I deploy applications on Vercel, Render, and AWS, with automated testing, environment management, and monitoring.",
    icon: "FaCodeBranch",
    features: [
      "Vercel & Render deployment",
      "GitHub Actions CI/CD",
      "Docker containerization",
      "Environment & secret management",
    ],
  },
];
