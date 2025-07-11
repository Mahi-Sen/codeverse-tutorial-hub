import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import Prism from 'prismjs';

// Import Prism.js CSS
import 'prismjs/themes/prism-tomorrow.css';

// Import language support
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-less';
import 'prismjs/components/prism-stylus';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-nginx';
import 'prismjs/components/prism-apache';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Map common language aliases to Prism language names
  const getLanguageClass = (lang: string) => {
    const languageMap: { [key: string]: string } = {
      'html': 'markup',
      'xml': 'markup',
      'svg': 'markup',
      'js': 'javascript',
      'ts': 'typescript',
      'jsx': 'jsx',
      'tsx': 'tsx',
      'py': 'python',
      'rb': 'ruby',
      'sh': 'bash',
      'shell': 'bash',
      'yml': 'yaml',
      'cs': 'csharp',
      'c++': 'cpp',
      'objective-c': 'objectivec',
    };
    
    return languageMap[lang.toLowerCase()] || lang.toLowerCase();
  };

  const prismLanguage = getLanguageClass(language);

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
          <span className="text-xs text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))] px-2 py-1 rounded font-mono">
            {language.toUpperCase()}
          </span>
          <button
            onClick={copyToClipboard}
            className="p-2 rounded bg-[hsl(var(--muted))] hover:bg-[hsl(var(--muted-foreground))] hover:bg-opacity-10 transition-colors"
            title={copied ? 'Copied!' : 'Copy code'}
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            )}
          </button>
        </div>

        {/* Code content with Prism highlighting */}
        <pre className={`${title ? 'rounded-t-none' : 'rounded-lg'} bg-[#2d3748] border border-[hsl(var(--border))] overflow-x-auto pt-12 pb-4 px-4`}>
          <code className={`language-${prismLanguage} text-sm leading-relaxed`}>
            {code.trim()}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;