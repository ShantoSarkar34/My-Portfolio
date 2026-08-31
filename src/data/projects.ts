import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "proj-5",
    slug: "nexora-ai-freelance-marketplace",
    title: "Nexora - AI-Powered Freelance Marketplace",
    thumbnail: "/images/projects/nexora-project/dashboard_1.png",

    gallery: [
      "/images/projects/nexora-project/hero.png",
      // "/images/projects/nexora-project/home.png",
      "/images/projects/nexora-project/jobs.png",
      // "/images/projects/nexora-project/ai.png",
      // "/images/projects/nexora-project/freelancer-profile.png",
      // "/images/projects/nexora-project/client-dashboard.png",
      "/images/projects/nexora-project/dashboard_1.png",
      "/images/projects/nexora-project/ai.png",
    ],

    shortDescription:
      "An AI-powered freelance marketplace that intelligently connects Clients with Freelancers through smart job discovery, professional profiles, applications, contracts, reviews, and secure online payments.",

    description:
      "Nexora is a modern full-stack freelance marketplace built to streamline the process of discovering talent, finding opportunities, hiring, and managing freelance projects. Clients can publish jobs, evaluate applications, hire suitable Freelancers, manage contracts, and process payments, while Freelancers can build professional profiles, showcase their expertise, discover relevant opportunities, submit applications, and manage their freelance work. The platform is designed around intelligent matching, structured hiring workflows, professional profiles, and secure transactions. Nexora uses a scalable architecture built with Next.js, TypeScript, Express.js, Prisma, PostgreSQL, Redis, Google OAuth, Stripe, and AI integrations.",

    techStack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "Upstash Redis",
      "Google OAuth",
      "JWT",
      "HttpOnly Cookies",
      "Stripe",
      "AI Integration",
    ],

    features: [
      "AI-powered matching system for intelligently connecting Freelancers with relevant jobs based on skills, experience, and requirements.",
      "Smart job discovery experience designed to help Freelancers find opportunities relevant to their professional expertise.",
      "Professional Freelancer profile system with skills, experience, portfolio, hourly rate, and profile completion insights.",
      "Structured hiring workflow from job posting and application review to Freelancer selection and contract creation.",
      "Complete application management system for tracking submitted applications and their progress.",
      "Contract lifecycle management between Clients and Freelancers after successful hiring.",
      "Stripe-powered payment workflow for processing secure freelance project payments.",
      "Dedicated payment success and cancellation handling for a reliable transaction experience.",
      "Redis-powered infrastructure for caching and handling temporary application data such as verification and authentication workflows.",
      "Google OAuth authentication for fast account creation and login.",
      "Email verification and OTP-based verification workflow for improving account security.",
      "Professional review and rating system for building reputation and trust within the marketplace.",
      "Client company profiles containing business information, industry, company size, website, and company description.",
      "Job management system supporting job creation, editing, publishing, discovery, and lifecycle tracking.",
      "Saved Jobs functionality allowing Freelancers to bookmark opportunities for later.",
      "Centralized notification system for keeping users informed about important marketplace activities.",
      "Feature-based frontend architecture designed to keep the growing marketplace maintainable and scalable.",
      "Relational PostgreSQL data architecture designed around users, profiles, skills, jobs, applications, contracts, payments, and reviews.",
    ],

    challenges:
      "The primary challenge was designing the architecture of a two-sided freelance marketplace where multiple interconnected workflows had to work together consistently. The platform required carefully structured relationships between users, professional profiles, skills, jobs, applications, contracts, payments, and reviews. Another significant challenge was implementing a reliable hiring lifecycle from job discovery and application submission through selection, contract management, and payment processing. Integrating AI-powered matching, Redis-based temporary data handling, Google OAuth, and Stripe while maintaining a clean and scalable application architecture added further complexity.",

    futureImprovements:
      "Future enhancements include advanced AI job and Freelancer recommendations, AI-assisted proposal generation, AI profile optimization, intelligent skill-gap analysis, real-time messaging, WebSocket-based notifications, advanced marketplace search and filtering, Freelancer availability scheduling, milestone-based contracts, escrow-style payments, file sharing, cloud storage, email and push notifications, dispute management, admin moderation, analytics dashboards, multilingual support, and PWA functionality.",

    liveUrl: "https://find-nexora.vercel.app/",
    githubUrl: "https://github.com/ShantoSarkar34/nexora-marketplace.git",

    backendUrl: "https://nexora-marketplace-backend.vercel.app/",
    backendGithubUrl: "https://github.com/ShantoSarkar34/nexora-backend.git",

    featured: true,
  },
  {
    id: "proj-4",
    slug: "fixitnow-home-service",
    title: "FixItNow Home Service Platform",
    thumbnail: "/images/projects/fixit-project/hero.png",

    gallery: [
      "/images/projects/fixit-project/hero.png",
      "/images/projects/fixit-project/service.png",
      "/images/projects/fixit-project/customer-profile.png",
      "/images/projects/fixit-project/technician-profile.png",
      "/images/projects/fixit-project/admin-profile.png",
      "/images/projects/fixit-project/how-to-work.png",
    ],

    shortDescription:
      "A modern full-stack home service booking platform with role-based dashboards, secure authentication, online payments, and complete service management for Customers, Technicians, and Admins.",

    description:
      "FixItNow is a complete home service marketplace built with Next.js and Express.js, designed to connect customers with skilled technicians for various household services. Customers can browse services, book appointments, complete secure online payments, and leave reviews after service completion. Technicians can manage their own services, availability, and booking requests, while administrators have full control over users, categories, technicians, and bookings through a dedicated dashboard. The project follows a modern full-stack architecture using Next.js App Router, TypeScript, Prisma ORM, PostgreSQL, JWT authentication with HttpOnly cookies, and SSLCommerz payment integration, delivering a secure, scalable, and responsive user experience.",

    techStack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "JWT Authentication",
      "HttpOnly Cookies",
      "REST API",
      "Stripe Payment Gateway",
    ],

    features: [
      "Role-based authentication and authorization for Customer, Technician, and Admin.",
      "Modern responsive UI built with Next.js App Router and Tailwind CSS.",
      "Customers can browse services, book appointments, track booking status, complete payments, and submit reviews.",
      "Technicians can create, update, and manage their services along with booking requests.",
      "Admin dashboard for managing users, technicians, bookings, and service categories.",
      "Secure JWT authentication using HttpOnly cookies with automatic token refresh.",
      "Integrated SSLCommerz payment gateway for secure online payments.",
      "Dynamic technician profiles with ratings, experience, and offered services.",
      "Advanced booking workflow including Pending, Accepted, Completed, and Cancelled statuses.",
      "Profile management system for all user roles with editable personal information.",
      "Smooth animations and premium UI using Framer Motion.",
      "Fully responsive design optimized for desktop, tablet, and mobile devices.",
    ],

    challenges:
      "The biggest challenge was designing a secure role-based authentication system that worked seamlessly across both the frontend and backend while protecting routes for Customers, Technicians, and Admins. Another major challenge was integrating JWT authentication with HttpOnly cookies, implementing automatic token refresh, managing booking workflows, and securely integrating SSLCommerz payment processing without compromising the user experience.",

    futureImprovements:
      "Future enhancements include real-time notifications using WebSockets, live technician location tracking, in-app messaging between customers and technicians, advanced service search with filters and maps, appointment scheduling with calendar integration, image uploads using cloud storage, email notifications, analytics dashboards, multi-language support, and Progressive Web App (PWA) functionality.",

    liveUrl: "https://fixitnow-service.vercel.app/",
    githubUrl: "https://github.com/ShantoSarkar34/FixItNow-Home-Service",
    backendUrl: "https://fixitnow-server.onrender.com/",
    backendGithubUrl:
      "https://github.com/ShantoSarkar34/FixItNow-home-service-backend",

    featured: true,
  },
  {
    id: "proj-1",
    slug: "synthera-project",
    title: "Synthera Online Shop with AI",
    thumbnail: "/images/projects/project-1.png",
    gallery: [],
    shortDescription:
      "A full-featured AI-powered e-commerce platform with role-based dashboards, product management, and an intelligent customer support chatbot.",

    description:
      "Synthera is a modern full-stack e-commerce application designed to provide a seamless shopping experience for customers while offering dedicated dashboards for sellers and administrators. One of its standout features is an AI-powered chatbot that assists users with product information, login issues, purchasing guidance, and general site navigation. The platform implements secure authentication, role-based authorization, complete product management, shopping cart functionality, and an intuitive admin panel.",

    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "Tailwind CSS",
      "REST API",
    ],

    features: [
      "Secure role-based authentication for Admin, Seller, and User.",
      "AI-powered chatbot for customer support and product assistance.",
      "Complete product CRUD operations with seller-specific management.",
      "Shopping cart and order workflow.",
      "Admin dashboard for managing users and sellers.",
      "Responsive UI optimized for desktop and mobile devices.",
    ],

    challenges:
      "One of the biggest challenges was implementing a scalable role-based authorization system while ensuring each user type could only access permitted routes and resources. Integrating the AI chatbot into the shopping experience without affecting overall application performance also required careful planning.",

    futureImprovements:
      "I plan to integrate secure online payment gateways, implement advanced product search with filtering, add order tracking, improve AI capabilities with contextual conversations, and migrate the project to Next.js with PostgreSQL and Prisma for better scalability.",

    liveUrl: "https://synthera-shop.vercel.app/",
    githubUrl: "https://github.com/ShantoSarkar34/synthera-shop.git",
    featured: true,
  },

  // {
  //   id: "proj-2",
  //   slug: "ecommarce-project",
  //   title: "Shop O",
  //   thumbnail: "/images/projects/project-2.png",
  //   gallery: [],
  //   shortDescription:
  //     "A multi-vendor e-commerce platform where anyone can register as a seller and manage their own products.",

  //   description:
  //     "Shop O is a marketplace-style e-commerce application that allows users to create seller accounts and manage their own online stores. The application includes authentication, product management, shopping functionality, and responsive dashboards designed for different user roles. The payment system is currently under development and will be added in a future version.",

  //   techStack: [
  //     "React",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Firebase Authentication",
  //     "Tailwind CSS",
  //     "REST API",
  //   ],

  //   features: [
  //     "Multi-vendor seller registration system.",
  //     "Role-based authentication and authorization.",
  //     "Product management with full CRUD functionality.",
  //     "Shopping cart implementation.",
  //     "Seller dashboard for managing products.",
  //     "Responsive and user-friendly interface.",
  //   ],

  //   challenges:
  //     "Designing a flexible marketplace where multiple sellers could independently manage their products required careful backend architecture and authorization logic. Keeping the application organized as the project grew was another valuable learning experience.",

  //   futureImprovements:
  //     "Complete the payment gateway integration, implement order management, add customer reviews and ratings, improve search and filtering, and migrate the project to Next.js with PostgreSQL and Prisma.",

  //   liveUrl: "https://online-shop9070-bd.surge.sh/",
  //   githubUrl: "https://github.com/ShantoSarkar34/Chicken-hub-client-side",
  //   featured: true,
  // },

  // {
  //   id: "proj-3",
  //   slug: "chicken-hub-project",
  //   title: "Chicken Hub",
  //   thumbnail: "/images/projects/project-3.png",
  //   gallery: [],
  //   shortDescription:
  //     "A food ordering platform focused on chicken products with inventory awareness and expiration tracking.",

  //   description:
  //     "Chicken Hub is a responsive food ordering platform that helps users discover and purchase various chicken products. Alongside standard e-commerce functionality, the application highlights products nearing expiration and expired inventory, making stock management more transparent. The interface includes smooth scrolling, responsive layouts, and an intuitive browsing experience.",

  //   techStack: [
  //     "React",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Firebase Authentication",
  //     "Tailwind CSS",
  //     "REST API",
  //   ],

  //   features: [
  //     "Complete product CRUD management.",
  //     "Food expiration tracking system.",
  //     "Highlights products expiring within the next seven days.",
  //     "Shopping cart functionality.",
  //     "Smooth scrolling and polished user experience.",
  //     "Fully responsive design.",
  //   ],

  //   challenges:
  //     "Implementing expiration-based product filtering required careful date calculations and efficient querying to ensure users always received accurate information about product freshness.",

  //   futureImprovements:
  //     "Add online payment integration, real-time inventory updates, delivery tracking, customer reviews, personalized recommendations, and rebuild the application using Next.js, PostgreSQL, and Prisma.",

  //   liveUrl: "https://chicken-hub.surge.sh/",
  //   githubUrl: "https://github.com/ShantoSarkar34/Chicken-hub-client-side",
  //   featured: true,
  // },
];
