export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Ahsan Habib",
    role: "Tech Lead",
    company: "Depth Search",
    content:
      "Shanto is an exceptional frontend developer who consistently delivers production-ready code. His ability to translate complex UI/UX designs into reusable, scalable React components impressed the entire team. He communicates well, meets deadlines, and writes clean, maintainable TypeScript.",
    avatar: "/images/avatars/ahsan.jpg",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Sara Rahman",
    role: "Product Owner",
    company: "Nexora Marketplace",
    content:
      "Working with Shanto on the Nexora freelance marketplace was a great experience. He took ownership of critical features including AI-powered job matching, Stripe payment flows, and Google OAuth authentication. His full-stack mindset helped us ship faster and with fewer bugs.",
    avatar: "/images/avatars/sara.jpg",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Rahim Chowdhury",
    role: "Engineering Manager",
    company: "SwiftDrop Logistics",
    content:
      "Shanto demonstrated strong backend fundamentals while building SwiftDrop's shipment state machine and concurrency-safe delivery assignment. He understands database transactions, JWT rotation, and webhook-driven payment confirmation at a level beyond most junior developers.",
    avatar: "/images/avatars/rahim.jpg",
    rating: 5,
  },
];
