"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { FaShieldAlt, FaCreditCard, FaDatabase, FaCodeBranch, FaUsers, FaBolt } from "react-icons/fa";

interface BackendFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
}

const BACKEND_FEATURES: BackendFeature[] = [
  {
    id: "auth",
    title: "Authentication & Authorization",
    description:
      "Production-grade auth with JWT access tokens, rotating refresh tokens, HttpOnly cookies, Google OAuth, and role-based access control.",
    icon: FaShieldAlt,
    details: [
      "JWT + rotating refresh tokens",
      "HttpOnly cookie storage",
      "Google OAuth & social login",
      "Role-based access control (RBAC)",
    ],
  },
  {
    id: "payments",
    title: "Payments & E-commerce",
    description:
      "Secure payment processing with Stripe Checkout, webhook verification, idempotent handling, and SSLCommerz integration.",
    icon: FaCreditCard,
    details: [
      "Stripe Checkout & Webhooks",
      "Idempotent payment processing",
      "SSLCommerz integration",
      "Order & invoice management",
    ],
  },
  {
    id: "database",
    title: "Database Design & Data Integrity",
    description:
      "Relational schema design with PostgreSQL and Prisma ORM. Transaction-safe workflows, state machines, and indexing for performance.",
    icon: FaDatabase,
    details: [
      "PostgreSQL schema design",
      "Prisma ORM modeling",
      "Database transactions",
      "Shipment state machine",
    ],
  },
  {
    id: "concurrency",
    title: "Concurrency & Race Condition Safety",
    description:
      "Transaction-scoped conditional updates and controlled state machines to prevent conflicting assignments and invalid transitions.",
    icon: FaBolt,
    details: [
      "Concurrency-safe parcel claiming",
      "Shipment lifecycle state machine",
      "Transaction-scoped updates",
      "Audit logging",
    ],
  },
  {
    id: "api",
    title: "REST API Design",
    description:
      "Well-structured REST APIs with Zod validation, security headers, CORS, rate limiting, and standardized error responses.",
    icon: FaCodeBranch,
    details: [
      "Zod request validation",
      "Security headers (Helmet)",
      "CORS & rate limiting",
      "Standardized API responses",
    ],
  },
  {
    id: "devops",
    title: "Deployment & DevOps",
    description:
      "CI/CD pipelines with GitHub Actions, deployment on Vercel and Render, environment management, and production monitoring.",
    icon: FaUsers,
    details: [
      "Vercel & Render deployment",
      "GitHub Actions CI/CD",
      "Environment & secret management",
      "Production monitoring",
    ],
  },
];

export default function BackendHighlights() {
  return (
    <section
      id="backend"
      className="scroll-mt-24 px-6 md:px-12 py-16 max-w-6xl mx-auto lg:px-0 "
    >
      <SectionHeading
        eyebrow="~/backend $ cat stack.md"
        title="Backend Expertise"
        align="left"
      />
      <p className="text-(--muted) max-w-2xl mb-12">
        Beyond the UI — I own the full stack. From database design to payment
        processing, here are the backend capabilities I bring to every project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BACKEND_FEATURES.map((feature, i) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-(--accent)/20 bg-(--bg) p-6 hover:border-(--accent)/50 transition-colors flex flex-col"
          >
            <CardHeader className="pb-4 border-none p-0 mb-4">
              <div className="w-10 h-10 rounded-xl bg-(--accent)/10 text-(--accent) flex items-center justify-center mb-3">
                <feature.icon size={20} />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <p className="text-sm text-(--muted) mt-2">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="p-0 pt-0">
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-(--muted)"
                  >
                    <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-(--accent)" />
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
