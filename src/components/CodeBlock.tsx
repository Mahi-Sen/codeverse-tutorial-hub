import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative my-6">
      {title && (
        <div className="bg-[hsl(var(--muted))] px-4 py-2 text-sm font-medium text-[hsl(var(--muted-foreground))] border border-b-0 border-[hsl(var(--border))] rounded-t-lg">
          {title}
        </div>
      )}
      
      <div className="relative">
        {/* Language indicator and copy button */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
          <span className="text-xs text-[hsl(var(--code-foreground))] bg-[hsl(var(--code-border))] px-2 py-1 rounded text-opacity-70">
            {language.toUpperCase()}
          </span>
          <button
            onClick={copyToClipboard}
            className="p-2 rounded bg-[hsl(var(--code-border))] hover:bg-[hsl(var(--code-foreground))] hover:bg-opacity-10 transition-colors"
            title={copied ? 'Copied!' : 'Copy code'}
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-[hsl(var(--code-foreground))] text-opacity-70" />
            )}
          </button>
        </div>

        {/* Code content */}
        <pre className={`code-block ${title ? 'rounded-t-none' : ''} pt-12 pb-4`}>
          <code className="text-sm leading-relaxed">
            {code.trim()}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;