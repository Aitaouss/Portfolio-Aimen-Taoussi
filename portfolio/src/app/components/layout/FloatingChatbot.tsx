"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Send, X } from "lucide-react";
import { easeOut, menuPanel } from "../../lib/motion";
import {
  getChatReply,
  getInitialGreeting,
  type ChatReply,
} from "../../lib/chatbot-knowledge";

interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
  suggestions?: string[];
}

function replyToMessage(reply: ChatReply, role: "bot"): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    role,
    text: reply.text,
    suggestions: reply.suggestions,
  };
}

export default function FloatingChatbot(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();
  const titleId = useId();

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([replyToMessage(getInitialGreeting(), "bot")]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const el = listRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, typing]);

  const sendUserMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    const delay = reduceMotion ? 0 : 450;

    window.setTimeout(() => {
      const reply = getChatReply(trimmed);
      setMessages((prev) => [...prev, replyToMessage(reply, "bot")]);
      setTyping(false);
    }, delay);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendUserMessage(input);
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            role="dialog"
            aria-labelledby={titleId}
            aria-modal="true"
            id="chatbot-panel"
            className="pointer-events-auto w-[min(100vw-2rem,22rem)] sm:w-[24rem] flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)]"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            exit="exit"
            variants={menuPanel}
          >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src="/mecaric.png"
                    alt=""
                    width={32}
                    height={32}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <p
                    id={titleId}
                    className="text-sm font-semibold text-white truncate"
                  >
                    Ask Aimen
                  </p>
                  <p className="text-[11px] text-neutral-500 font-mono">
                    Portfolio assistant · FAQ
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div
              ref={listRef}
              className="flex-1 max-h-[min(50vh,20rem)] overflow-y-auto px-3 py-3 space-y-3"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-white text-neutral-950 rounded-br-md"
                        : "bg-white/[0.06] border border-white/10 text-neutral-200 rounded-bl-md"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start" aria-live="polite">
                  <div className="rounded-2xl rounded-bl-md px-3.5 py-3 bg-white/[0.06] border border-white/10 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:120ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:240ms]" />
                  </div>
                </div>
              )}

              {messages.length > 0 &&
                messages[messages.length - 1]?.role === "bot" &&
                !typing &&
                messages[messages.length - 1]?.suggestions && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {messages[messages.length - 1].suggestions!.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => sendUserMessage(prompt)}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-neutral-300 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-white/10 flex gap-2 bg-black/80"
            >
              <label htmlFor="chatbot-input" className="sr-only">
                Message
              </label>
              <input
                id="chatbot-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, stack…"
                className="flex-1 min-w-0 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/25"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="shrink-0 w-9 h-9 rounded-full bg-white text-neutral-950 flex items-center justify-center disabled:opacity-40 hover:bg-neutral-200 transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative pointer-events-auto">
        {!open && (
          <>
            {!reduceMotion && (
              <span
                className="absolute inset-0 rounded-full bg-white/20 animate-ping pointer-events-none"
                aria-hidden
              />
            )}
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 bg-black/90 text-[10px] font-medium text-white whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.45)] pointer-events-none"
              aria-hidden
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                {!reduceMotion && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                )}
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Ask me
            </span>
          </>
        )}

        <motion.button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0 bg-transparent border-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-expanded={open}
          aria-controls={open ? "chatbot-panel" : undefined}
          whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          transition={{ duration: 0.2, ease: easeOut }}
        >
          <Image
            src="/mecaric.png"
            alt=""
            width={64}
            height={64}
            className={`w-full h-full rounded-full object-cover object-top transition-opacity duration-200 pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)] ${
              open ? "opacity-40" : "opacity-100"
            }`}
            priority
            draggable={false}
          />
          {open ? (
            <X
              className="w-5 h-5 text-white absolute inset-0 m-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] pointer-events-none"
              aria-hidden
            />
          ) : null}
          <span className="sr-only">{open ? "Close chat" : "Ask me — open chat"}</span>
        </motion.button>
      </div>
    </div>
  );
}
