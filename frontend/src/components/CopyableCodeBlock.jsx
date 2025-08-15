// components/CopyableCodeBlock.jsx
import { useState } from "react";

const CopyableCodeBlock = ({ language, value, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = typeof children === "string" ? children : children?.[0] || "";
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 bg-[#1f1f1f] text-white border border-white/10 px-2 py-1 text-xs rounded hover:bg-[#333] transition-opacity opacity-0 group-hover:opacity-100"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="overflow-x-auto rounded-xl bg-[#0d1117] p-4 text-sm text-white">
        <code className={`language-${language || ""}`}>
          {typeof children === "string" ? children : children?.[0]}
        </code>
      </pre>
    </div>
  );
};

export default CopyableCodeBlock;
