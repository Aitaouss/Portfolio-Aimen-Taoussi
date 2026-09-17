export interface ChatReply {
  text: string;
  suggestions?: string[];
}

interface KnowledgeEntry {
  keywords: string[];
  reply: string;
  suggestions?: string[];
}

const KNOWLEDGE: KnowledgeEntry[] = [
  {
    keywords: ["who", "about", "introduce", "background", "aimen"],
    reply:
      "I'm Aimen Taoussi — full-stack engineer and UI/UX designer based in Casablanca. I ship production apps from architecture to polish: SaaS, dashboards, CLIs, and design systems.",
    suggestions: ["Tech stack", "Featured projects", "How to contact you?"],
  },
  {
    keywords: ["stack", "skills", "tech", "technologies", "tools", "typescript", "react"],
    reply:
      "Main stack: React & Next.js, TypeScript, Tailwind CSS, Node.js (NestJS, Express, Fastify), Prisma, PostgreSQL/SQLite, Convex, Clerk, Figma, and Docker. Check the Skills section for the full breakdown.",
    suggestions: ["Featured projects", "Download CV"],
  },
  {
    keywords: ["project", "work", "portfolio", "profita", "stackforge", "stack forge", "built"],
    reply:
      "Highlights: profita (e-commerce profitability SaaS), create-stackforge-app (npm CLI scaffolder), OCP Supply Chain & HSE dashboards, Ebazaar, Maghreb Grillage, and UI/UX work like Outdoorpal. Use “View Work” or scroll to Projects.",
    suggestions: ["Live demo profita", "Open source CLI"],
  },
  {
    keywords: ["profita", "e-commerce", "saas"],
    reply:
      "profita is my flagship SaaS for e-commerce sellers — real-time P&L, inventory, orders, and workflows tuned for Morocco (MAD, TVA, WhatsApp, COD). Live at profita.aitaouss.me",
    suggestions: ["Tech stack", "How to contact you?"],
  },
  {
    keywords: ["cli", "npm", "stackforge", "scaffold", "generator"],
    reply:
      "create-stackforge-app scaffolds Next.js + NestJS + Prisma apps with Docker and auth. Try the live demo at stack-forge.aitaouss.me or search npm for create-stackforge-app.",
    suggestions: ["Featured projects", "Tech stack"],
  },
  {
    keywords: ["contact", "email", "reach", "message", "talk", "hello"],
    reply:
      "Best way to reach me: taoussi.aimen@gmail.com — I usually reply within 24 hours. You can also use LinkedIn or the Contact section on this page.",
    suggestions: ["Available for work?", "Location"],
  },
  {
    keywords: ["hire", "freelance", "job", "role", "available", "open", "collaborat"],
    reply:
      "Yes — I'm open to freelance projects, collaborations, and full-time roles. Tell me about your timeline and stack; I'll share whether it's a good fit.",
    suggestions: ["Contact email", "Download CV"],
  },
  {
    keywords: ["cv", "resume", "download"],
    reply:
      "Download my CV from the hero: English, French, or both PDFs. Files: Aimen_Taoussi_cv_en.pdf and Aimen-Taoussi-CV.pdf.",
    suggestions: ["Tech stack", "How to contact you?"],
  },
  {
    keywords: ["location", "where", "morocco", "casablanca", "remote", "timezone"],
    reply:
      "Based in Casablanca, Morocco (UTC+1). I work with local and remote teams across time zones.",
    suggestions: ["Available for work?", "Contact email"],
  },
  {
    keywords: ["1337", "42", "school", "education"],
    reply:
      "I'm part of the 1337 / 42 Network ecosystem — strong focus on C, systems, and learning by building real projects.",
    suggestions: ["Featured projects", "Tech stack"],
  },
  {
    keywords: ["design", "figma", "ui", "ux"],
    reply:
      "I do UI/UX end to end: user flows, Figma prototypes, design systems, and implementation in React/Next.js. Several projects in the portfolio include Figma links.",
    suggestions: ["Featured projects", "How to contact you?"],
  },
  {
    keywords: ["demo", "live", "website", "link"],
    reply:
      "Live demos include profita.aitaouss.me, stack-forge.aitaouss.me, and more in the Projects section — each card has a Live Demo button when available.",
    suggestions: ["profita", "Open source CLI"],
  },
];

const QUICK_PROMPTS = [
  "What do you build?",
  "Featured projects",
  "Tech stack",
  "Available for work?",
  "Contact email",
] as const;

const DEFAULT_REPLY: ChatReply = {
  text: "I'm not sure about that one — try a quick prompt below, or ask about projects, stack, availability, CV, or how to reach Aimen.",
  suggestions: [...QUICK_PROMPTS],
};

function scoreMatch(input: string, keywords: string[]): number {
  let score = 0;
  for (const keyword of keywords) {
    if (input.includes(keyword)) score += keyword.length > 4 ? 2 : 1;
  }
  return score;
}

export function getChatReply(rawInput: string): ChatReply {
  const input = rawInput.toLowerCase().trim();
  if (!input) return DEFAULT_REPLY;

  let best: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE) {
    const score = scoreMatch(input, entry.keywords);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  if (best && bestScore > 0) {
    return {
      text: best.reply,
      suggestions: best.suggestions ?? QUICK_PROMPTS.slice(0, 3),
    };
  }

  return DEFAULT_REPLY;
}

export function getInitialGreeting(): ChatReply {
  return {
    text: "Hi — I'm Aimen's site assistant. Ask about projects, stack, availability, or how to get in touch.",
    suggestions: [...QUICK_PROMPTS],
  };
}

export { QUICK_PROMPTS };
