import { Layout } from "react-grid-layout";
import { generateCSSCode, generateHTMLCode } from "./functions";
import { memo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IoCheckmark } from "react-icons/io5";

interface CodeBlockProps {
  title: string;
  type: "html" | "css";
  cols: number;
  rows: number;
  margin: number;
  layout: Layout[];
}

const CodeBlock: React.FC<CodeBlockProps> = memo(({ title, type, cols, rows, margin, layout }) => {
  
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {

    const code = type === "css" ? generateCSSCode({ cols, rows, margin, layout }) : generateHTMLCode({ layout });
    navigator.clipboard.writeText(code);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // 2 sekunddan keyin qayta "Copy" bo‘lsin
  };

  return (
    <div className="p-4 bg-primary rounded-lg max-h-max">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-white">{title}</h3>
        <button
          className="bg-blue-700 text-white px-2 py-1 text-xs rounded hover:bg-blue-600 flex items-center gap-1"
          onClick={handleCopy}
        >
          {copied ? <span className="flex items-center gap-0.5"><IoCheckmark className="text-[16px]" /> Copied</span> : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={type}
        style={atomDark}
        showLineNumbers
        customStyle={{ borderRadius: "8px", padding: "16px" }}
      >
        {type === "css" ? generateCSSCode({ cols, rows, margin, layout }) : generateHTMLCode({ layout })}
      </SyntaxHighlighter>
    </div>
  );
});

export default CodeBlock;
