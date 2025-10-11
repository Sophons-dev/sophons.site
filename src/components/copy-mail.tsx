"use client";

import { useState } from "react";

export default function CopyMail({
  version,
}: {
  version?: "icon-only" | "text";
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sophons.dev@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const copyIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline mr-2"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );

  const emailIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  return (
    <div className="flex items-center gap-2 text-white text-lg">
      <span
        onClick={handleCopyEmail}
        className="cursor-pointer hover:text-gray-300 transition-colors select-none"
        title="Click to copy email"
      >
        {version === "icon-only" ? (
          <>
            {emailIcon}
            {copied && (
              <span className="text-green-400 ml-2">
                ✓ Email copied to clipboard!
              </span>
            )}
          </>
        ) : (
          <>
            {copyIcon}
            sophons.dev@gmail.com{" "}
            {copied && <span className="text-green-400 ml-2">✓ Copied!</span>}
          </>
        )}
      </span>
    </div>
  );
}
