export type Project = {
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  href?: string;
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "QuickServe",
    description:
      "A local service booking platform connecting customers with service providers. Built as my final-year project.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Chapa",
    ],
    features: [
      "Customer discovery and booking with provider service management",
      "Admin provider verification and role-based access control",
      "Secure chat, ID/selfie verification, OTP/email, and subscriptions",
    ],
    href: "https://quickservehbm.vercel.app",
    featured: true,
  },
  {
    name: "Exit Prep",
    description:
      "An educational platform designed to help university graduates prepare for exit examinations.",
    technologies: ["Web technologies", "Authentication", "AI-assisted learning"],
    features: [
      "Study resources, notes, and practice questions",
      "Learning materials organized by department and course",
      "Admin tools for managing educational resources",
    ],
    href: "https://pjexitprep.vercel.app",
  },
  {
    name: "Liya's Store",
    description:
      "An e-commerce platform planned for a business selling a wide range of products.",
    technologies: ["Next.js", "Supabase", "PostgreSQL"],
    features: [
      "Product browsing, product management, and order management",
      "Admin functionality and delivery personnel management",
    ],
    href: "https://liyadaniel.vercel.app",
  },
];
