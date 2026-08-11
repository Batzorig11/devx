"use client";

import { Check, Copy, TriangleAlert } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type CopyState = "idle" | "copied" | "error";

type CopyColorButtonProps = {
  value: string;
  className?: string;
};

async function writeToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Fall through to the selection-based copy method when permission is denied.
    }
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();

  const didCopy = document.execCommand("copy");
  textArea.remove();

  if (!didCopy) {
    throw new Error("Clipboard copy failed");
  }
}

export function CopyColorButton({
  value,
  className,
}: CopyColorButtonProps) {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  async function copyColor() {
    if (resetTimer.current !== null) {
      window.clearTimeout(resetTimer.current);
    }

    try {
      await writeToClipboard(value);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    resetTimer.current = window.setTimeout(() => setCopyState("idle"), 1800);
  }

  const label =
    copyState === "copied"
      ? "Copied"
      : copyState === "error"
        ? "Copy failed"
        : "Copy code";

  return (
    <button
      type="button"
      onClick={copyColor}
      aria-label={`${label}: ${value}`}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 border-[3px] px-4 font-mono text-xs font-black uppercase tracking-[0.08em] transition-transform",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-presentation-accent focus-visible:ring-offset-2",
        "active:translate-x-1 active:translate-y-1 active:shadow-none",
        className,
      )}
    >
      {copyState === "copied" ? (
        <Check className="size-5" strokeWidth={3} aria-hidden="true" />
      ) : copyState === "error" ? (
        <TriangleAlert className="size-5" strokeWidth={3} aria-hidden="true" />
      ) : (
        <Copy className="size-5" strokeWidth={3} aria-hidden="true" />
      )}
      <span aria-live="polite">{label}</span>
    </button>
  );
}
