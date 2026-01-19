export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  link?: string;
  objectFit?: "cover" | "contain";
  backgroundColor?: string;
}

export const projects: Project[] = [
  {
    id: "luxury-awaits",
    title: "TRAVEL WEBSITE",
    category: "Branding",
    shortDescription: "Handpicked destinations for extraordinary travelers. A curated collection of exclusive resorts and experiences.",
    fullDescription:
      "Complete brand identity and digital experience for Lumière, a luxury travel specialist. The project involved naming, logo design, and a high-end web platform showcasing exclusive destinations.",
    image: "/project3.png",
    tags: ["Branding", "UI/UX Design", "Strategy"],
    link: "#",
  },
  {
    id: "disygo",
    title: "DISYGO",
    category: "AI Agents",
    shortDescription: "Next-gen intelligent assistant capable of complex task automation. Jarvis leverages advanced NLP to understand context and execute multi-step workflows with precision.",
    fullDescription:
      "Jarvis AI Agent is an intelligent virtual assistant that combines natural language processing, voice recognition, and machine learning to provide personalized assistance and automation.",
    image: "/projects/Gemini_Generated_Image_wy4uvkwy4uvkwy4u.png",
    tags: ["TypeScript", "Gemini API", "Speech Recognition", "NLP", "Docker", "Node.js"],
    link: "#",
  },
  {
    id: "akkshara-stay-inn",
    title: "AKKSHARA STAY INN",
    category: "Web Development",
    shortDescription: "A high-performance e-commerce platform designed for fashion retail. Features real-time inventory management, seamless payment integration, and a mobile-first shopping experience.",
    fullDescription:
      "Fast&Fab is a comprehensive e-commerce solution designed for the fashion industry. Features include product catalog management, secure payment processing, order tracking, and customer management system.",
    image: "/project1.png",
    tags: ["React", "Node.js", "NeonDB", "Cashfree Payment Gateway", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "chatbot-ai",
    title: "CHATBOT AI",
    category: "Branding",
    shortDescription: "Elegant brand identity for lifestyle brand",
    fullDescription:
      "Aarunya brand identity focuses on elegance and sophistication. The design includes logo variations, color palette, typography guidelines, and application across various touchpoints.",
    image: "/project4.png",
    tags: ["Adobe Creative Suite", "Brand Strategy", "Visual Identity"],
    link: "#",
  },
  {
    id: "srke-society",
    title: "SRKE SOCIETY",
    category: "Web Development",
    shortDescription: "Offering aid to the less fortunate. A community-focused platform dedicated to giving back and making the world a better place.",
    fullDescription:
      "SRKE Society is a charitable organization website designed to facilitate donations and community engagement. The platform connects donors with those in need, featuring an intuitive donation system and impact tracking.",
    image: "/Gemini_Generated_Image_htpk66htpk66htpk.png",
    tags: ["React", "UI/UX Design", "Non-Profit"],
    link: "#",
    objectFit: "contain",
    backgroundColor: "#ffffff",
  },
  {
    id: "design-frontend",
    title: "DESIGN FRONTEND",
    category: "Branding",
    shortDescription: "Modern retail brand identity and design system",
    fullDescription:
      "Swank Stores brand identity emphasizes modern retail aesthetics with a focus on premium shopping experience. Includes storefront design, packaging, and digital brand guidelines.",
    image: "/project6.jpg",
    tags: ["Brand Strategy", "Retail Design", "Packaging Design", "Digital Assets"],
    link: "#",
  },
];

export const categories = [
  "All",
  "Web Development",
  "AI Agents",
  "Branding",
  "Mobile App",
];
