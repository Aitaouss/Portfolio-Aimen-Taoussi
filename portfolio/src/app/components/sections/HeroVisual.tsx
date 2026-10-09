"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import type { JSX } from "react";

type Directory = "~" | "~/projects";
type LineKind = "command" | "output" | "error" | "system";

interface TerminalLine {
  id: number;
  kind: LineKind;
  text: string;
}

const BOOT_LINES = [
  "Aimen Portfolio Shell · v1.0.0",
  'Welcome, visitor. Type "help" to explore.',
];

const COMMANDS = [
  "help",
  "ls",
  "cd",
  "cat",
  "whoami",
  "hostname",
  "pwd",
  "date",
  "echo",
  "status",
  "history",
  "open",
  "clear",
] as const;

const PROJECTS = [
  "profita",
  "create-stackforge-app",
  "ocp-supply-chain",
  "hse-dashboard",
  "outdoorpal",
  "aioxagent",
  "maghreb-grillage",
  "ebazaar",
  "intraevent",
  "ft_transcendence",
  "webserv",
];

const FILES: Record<string, string> = {
  "about.txt":
    "Aimen Taoussi — Full-Stack Engineer & UI/UX Designer based in Casablanca, Morocco.",
  "skills.txt":
    "Frontend  React · Next.js · TypeScript · Tailwind CSS\nBackend   Node.js · NestJS · Express · Fastify · Prisma\nDesign    Figma · UI/UX · Design systems\nTools     Docker · Git · PostgreSQL · SQLite",
  "contact.txt":
    "Email     taoussi.aimen@gmail.com\nGitHub    github.com/aitaouss\nLinkedIn  linkedin.com/in/aimen-taoussi",
  "readme.md":
    "Welcome to Aimen's interactive portfolio.\nTry: ls, cat about.txt, cd projects, or open github",
};

const OPEN_TARGETS: Record<string, string> = {
  github: "https://github.com/aitaouss",
  linkedin: "https://www.linkedin.com/in/aimen-taoussi/",
  cv: "/Aimen_Taoussi_cv_en.pdf",
  profita: "https://profita.aitaouss.me/",
  stackforge: "https://stack-forge.aitaouss.me/",
};

function WindowChrome({ title }: { title: string }): JSX.Element {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-neutral-900/80">
      <div className="flex items-center gap-1.5" aria-hidden>
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
      </div>
      <span className="text-[10px] font-mono text-neutral-400 truncate max-w-[60%]">
        {title}
      </span>
      <span className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400/80">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        live
      </span>
    </div>
  );
}

export default function HeroVisual(): JSX.Element {
  const [bootLineCount, setBootLineCount] = useState(BOOT_LINES.length);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState<Directory>("~");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const nextLineId = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    setBootLineCount(0);
    let count = 0;
    const interval = window.setInterval(() => {
      count += 1;
      setBootLineCount(count);
      if (count >= BOOT_LINES.length) window.clearInterval(interval);
    }, 260);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const terminalBody = terminalBodyRef.current;
    if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight;
  }, [bootLineCount, lines]);

  const makeLine = (kind: LineKind, text: string): TerminalLine => ({
    id: nextLineId.current++,
    kind,
    text,
  });

  const focusPrompt = (): void => inputRef.current?.focus();

  const openTarget = (target: string): string => {
    if (target === "projects" || target === "contact" || target === "about") {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      return `Opening #${target}...`;
    }

    const href = OPEN_TARGETS[target];
    if (!href) {
      return `open: unknown target '${target}'. Try: github, linkedin, cv, profita, stackforge, projects, contact`;
    }

    window.open(href, "_blank", "noopener,noreferrer");
    return `Opening ${target}...`;
  };

  const runCommand = (rawCommand: string): void => {
    const command = rawCommand.trim();
    if (!command) return;

    const [rawName, ...args] = command.split(/\s+/);
    const name = rawName.toLowerCase();
    const commandLine = makeLine(
      "command",
      `visitor@portfolio:${cwd}$ ${command}`
    );

    setCommandHistory((previous) => [...previous, command]);
    setHistoryIndex(-1);

    if (name === "clear") {
      setLines([]);
      return;
    }

    let result: TerminalLine;

    switch (name) {
      case "help":
        result = makeLine(
          "output",
          "Available commands\n  help                 show this guide\n  ls [projects]        list files or projects\n  cd <dir>             change directory\n  cat <file>           read about.txt, skills.txt, contact.txt\n  whoami · hostname    identity and host info\n  pwd · date           current path and local date\n  echo <text|$VAR>     print text or portfolio variables\n  status               availability status\n  history              previous commands\n  open <target>        open projects, contact, github, linkedin, cv\n  clear                clear the terminal\n\nTip: use ↑/↓ for history and Tab to autocomplete."
        );
        break;
      case "whoami":
        result = makeLine(
          "output",
          "Aimen Taoussi · Full-Stack Engineer & UI/UX Designer"
        );
        break;
      case "hostname":
        result = makeLine("output", "1337-coding-school · 42-network");
        break;
      case "pwd":
        result = makeLine(
          "output",
          cwd === "~"
            ? "/home/aitaouss/portfolio"
            : "/home/aitaouss/portfolio/projects"
        );
        break;
      case "ls": {
        const target = args[0]?.replace(/\/$/, "").toLowerCase();
        if (target === "projects" || cwd === "~/projects") {
          result = makeLine("output", PROJECTS.join("  "));
        } else if (!target || target === "-la" || target === ".") {
          result = makeLine(
            "output",
            "about.txt  skills.txt  contact.txt  readme.md  projects/  resume.pdf"
          );
        } else {
          result = makeLine("error", `ls: cannot access '${args[0]}': No such file or directory`);
        }
        break;
      }
      case "cd": {
        const target = (args[0] ?? "~").replace(/\/$/, "").toLowerCase();
        if (["~", "..", "/home/aitaouss/portfolio"].includes(target)) {
          setCwd("~");
          result = makeLine("system", "Directory changed to ~/portfolio");
        } else if (["projects", "./projects", "~/projects"].includes(target)) {
          setCwd("~/projects");
          result = makeLine("system", "Directory changed to ~/portfolio/projects");
        } else {
          result = makeLine("error", `cd: no such directory: ${args[0]}`);
        }
        break;
      }
      case "cat": {
        const file = args[0]?.toLowerCase();
        if (!file) {
          result = makeLine("error", "cat: missing file operand");
        } else if (file === "resume.pdf") {
          result = makeLine("output", "Binary PDF. Run 'open cv' to view it.");
        } else if (FILES[file]) {
          result = makeLine("output", FILES[file]);
        } else {
          result = makeLine("error", `cat: ${args[0]}: No such file`);
        }
        break;
      }
      case "date":
        result = makeLine(
          "output",
          new Intl.DateTimeFormat(undefined, {
            dateStyle: "full",
            timeStyle: "medium",
          }).format(new Date())
        );
        break;
      case "echo": {
        const value = args.join(" ");
        const variables: Record<string, string> = {
          "$STACK": "React · Next.js · TypeScript · Node.js · NestJS · Tailwind",
          "$LOCATION": "Casablanca, Morocco · UTC+1",
          "$EMAIL": "taoussi.aimen@gmail.com",
        };
        result = makeLine("output", variables[value.toUpperCase()] ?? value);
        break;
      }
      case "status":
        result = makeLine(
          "output",
          "open_to_projects=true  open_to_roles=true  location=Morocco"
        );
        break;
      case "history":
        result = makeLine(
          "output",
          [...commandHistory, command]
            .map((item, index) => `${String(index + 1).padStart(3, " ")}  ${item}`)
            .join("\n")
        );
        break;
      case "open":
        if (!args[0]) {
          result = makeLine("error", "open: missing target. Try 'open projects'.");
        } else {
          const target = args[0].toLowerCase();
          const message = openTarget(target);
          result = makeLine(message.startsWith("open:") ? "error" : "system", message);
        }
        break;
      case "sudo":
        result = makeLine("error", "visitor is not in the sudoers file. Nice try.");
        break;
      default:
        result = makeLine(
          "error",
          `${rawName}: command not found. Type 'help' for available commands.`
        );
    }

    setLines((previous) => [...previous, commandLine, result]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    runCommand(input);
    setInput("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!commandHistory.length) return;
      const nextIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      const trimmedInput = input.trimStart();
      if (!trimmedInput || trimmedInput.includes(" ")) return;
      const matches = COMMANDS.filter((command) => command.startsWith(trimmedInput));
      if (matches.length === 1) {
        setInput(`${matches[0]} `);
      } else if (matches.length > 1) {
        setLines((previous) => [
          ...previous,
          makeLine("system", matches.join("  ")),
        ]);
      }
      return;
    }

    if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      setLines([]);
    }
  };

  return (
    <div className="relative w-full max-w-[460px] mx-auto lg:mr-0 lg:ml-auto">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[300px] bg-white/[0.04] blur-3xl rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 w-full sm:w-[96%] -rotate-1 hover:rotate-0 transition-transform duration-500">
        <div className="border-surface rounded-xl overflow-hidden bg-neutral-950/95 shadow-2xl shadow-black/60 backdrop-blur-sm">
          <WindowChrome title="visitor@portfolio — interactive zsh" />
          <div
            ref={terminalBodyRef}
            className="terminal-scrollbar h-[246px] overflow-y-auto p-3 sm:p-4 pb-2 font-mono text-[10px] sm:text-[11px] leading-relaxed bg-[#0c0c0c] cursor-text"
            onClick={focusPrompt}
            role="log"
            aria-live="polite"
            aria-label="Interactive portfolio terminal output"
            data-native-cursor="true"
          >
            {BOOT_LINES.slice(0, bootLineCount).map((line, index) => (
              <div
                key={line}
                className={index === 0 ? "text-emerald-400/90" : "text-neutral-500 mb-2"}
              >
                {line}
              </div>
            ))}

            {lines.map((line) => (
              <div
                key={line.id}
                className={`whitespace-pre-wrap break-words mb-1.5 ${
                  line.kind === "command"
                    ? "text-emerald-400/90"
                    : line.kind === "error"
                      ? "text-red-400/90"
                      : line.kind === "system"
                        ? "text-sky-300/80"
                        : "text-neutral-400"
                }`}
              >
                {line.text}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center min-w-0">
              <label htmlFor="portfolio-command" className="sr-only">
                Enter a terminal command
              </label>
              <span className="text-emerald-400/90 shrink-0">
                visitor@portfolio:<span className="text-sky-300/90">{cwd}</span>$
              </span>
              <input
                ref={inputRef}
                id="portfolio-command"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                className="min-w-0 flex-1 ml-1 bg-transparent text-neutral-200 caret-emerald-400 outline-none border-0 p-0 font-mono text-[10px] sm:text-[11px]"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                aria-describedby="terminal-hint"
              />
            </form>
          </div>
          <button
            type="button"
            onClick={focusPrompt}
            id="terminal-hint"
            className="flex w-full items-center justify-between gap-3 px-3 py-1.5 border-t border-white/[0.06] bg-neutral-900/70 text-[8px] sm:text-[9px] font-mono text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            <span className="flex items-center gap-1.5 text-emerald-400/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Click terminal &amp; type
            </span>
            <span className="hidden sm:inline">↑↓ history · Tab complete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
