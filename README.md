<div align="center">

# Aimen Taoussi — Portfolio

### Full-Stack Engineer · UI/UX Designer · Product Builder

A dark, interactive portfolio that brings together production engineering,
thoughtful interface design, and a little command-line personality.

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-aitaouss.me-10b981?style=for-the-badge&logo=vercel&logoColor=white)](https://aitaouss.me)
[![GitHub](https://img.shields.io/badge/GitHub-aitaouss-181717?style=for-the-badge&logo=github)](https://github.com/aitaouss)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aimen_Taoussi-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aimen-taoussi/)

</div>

[![Aimen Taoussi portfolio preview](https://i.ibb.co/b5N6yVhs/image.png)](https://aitaouss.me)

## About the project

This is my personal corner of the web: a place to present the products,
interfaces, and developer tools I have designed and built. The experience is
structured like a polished product rather than a static résumé, with an
interactive terminal, contextual project filtering, a portfolio assistant, and
small details that reward exploration.

The portfolio reflects how I like to work—taking ideas from architecture and
data modeling through to responsive, pixel-conscious interfaces.

## Highlights

- **Interactive portfolio terminal** with virtual files, directories, command
  history, tab completion, and commands such as `ls`, `whoami`, `cat`, and
  `open`.
- **Curated project showcase** with filters for full-stack work, design, and
  developer tools.
- **Built-in portfolio assistant** for quick answers about projects, skills,
  availability, and contact details.
- **Bilingual CV downloads** in English and French.
- **Custom desktop cursor and mouse spotlight** with hover and click feedback.
- **Motion-aware interface** with reduced-motion support and responsive layouts.
- **Focused About section** combining background, working style, and technical
  experience.

## Built with

| Area | Technology |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org/) · React 18 |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) · custom CSS |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Components | Radix Slot · class-variance-authority |
| Icons | [Lucide React](https://lucide.dev/) |

## Try the terminal

Click the terminal in the hero, enter a command, and press <kbd>Enter</kbd>.

| Command | What it does |
| --- | --- |
| `help` | Lists the available commands |
| `ls` or `ls projects` | Lists portfolio files or projects |
| `cd projects` | Opens the virtual projects directory |
| `cat about.txt` | Reads information about me |
| `cat skills.txt` | Displays the main technology stack |
| `whoami` | Shows my role and identity |
| `status` | Displays availability information |
| `open github` | Opens my GitHub profile |
| `open cv` | Opens the English CV |
| `history` | Displays commands from the current session |
| `clear` | Clears the terminal output |

Use <kbd>↑</kbd>/<kbd>↓</kbd> to navigate command history,
<kbd>Tab</kbd> to autocomplete, and <kbd>Ctrl</kbd> + <kbd>L</kbd> to clear.

## Run locally

### Prerequisites

- Node.js 18.17 or newer
- npm

### Installation

```bash
git clone https://github.com/Aitaouss/Portfolio-Aimen-Taoussi.git
cd Portfolio-Aimen-Taoussi/portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production build |
| `npm run type-check` | Validates the TypeScript project |
| `npm run lint` | Runs the Next.js lint command |

## Project structure

```text
portfolio/
├── public/                      # Images, CVs, and static assets
├── src/app/
│   ├── components/
│   │   ├── layout/              # Header, footer, cursor, and assistant
│   │   ├── motion/              # Reusable motion components
│   │   ├── sections/            # Hero, About, Skills, Projects, Contact
│   │   └── ui/                  # Shared UI primitives
│   ├── lib/                     # Motion, utilities, and assistant knowledge
│   ├── globals.css              # Global theme and interaction styles
│   ├── layout.tsx               # Metadata and root layout
│   └── page.tsx                 # Portfolio page composition
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Featured work

The portfolio includes production applications, developer tools, enterprise
dashboards, and design projects such as:

- **profita** — e-commerce profitability and operations SaaS.
- **create-stackforge-app** — full-stack Next.js/NestJS project scaffolder.
- **OCP Supply Chain** — production and inventory management dashboard.
- **HSE SBU Manufacturing** — HSE data and KPI management platform.
- **Outdoorpal** — end-to-end mobile UI/UX design.
- **Ebazaar** — marketplace for digital services.
- **webserv** — HTTP server built from scratch in C++98.

Explore all projects and their demos at [aitaouss.me](https://aitaouss.me).

## Connect

- Email: [taoussi.aimen@gmail.com](mailto:taoussi.aimen@gmail.com)
- LinkedIn: [linkedin.com/in/aimen-taoussi](https://www.linkedin.com/in/aimen-taoussi/)
- GitHub: [github.com/aitaouss](https://github.com/aitaouss)

<div align="center">

Built with care in Casablanca, Morocco.

</div>
