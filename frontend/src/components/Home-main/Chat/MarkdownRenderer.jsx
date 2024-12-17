import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const MarkdownRenderer = ({ markdownContent }) => {
  const preprocessMarkdown = (markdown) => {
    // Replace \( ... \) inline math
    markdown = markdown.replace(/\\\((.*?)\\\)/g, (match, p1) => {
      return `$${p1}$`;
    });

    // Replace \[ ... \] block math (if needed)
    markdown = markdown.replace(/\\\[(.*?)\\\]/g, (match, p1) => {
      return `$$${p1}$$`;
    });

    return markdown;
  };
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      className="prose max-w-full overflow-x-auto"
      components={{
        a({ node, children, href, ...props }) {
          return (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline duration-150 transition-all"
            >
              {children}
            </a>
          );
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <div className="rounded-lg overflow-hidden my-4">
              <SyntaxHighlighter
                className="!my-0"
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code
              className="bg-gray-100 dark:bg-gray-800 rounded px-1"
              {...props}
            >
              {children}
            </code>
          );
        },
        inlineMath({ node, ...props }) {
          return <InlineMath math={node.value} />;
        },
        math({ node, ...props }) {
          return <BlockMath math={node.value} />;
        },
        table({ children }) {
          return (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                {children}
              </table>
            </div>
          );
        },
        th({ children }) {
          return (
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              {children}
            </th>
          );
        },
        td({ children }) {
          return (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              {children}
            </td>
          );
        },
      }}
    >
      {preprocessMarkdown(markdownContent)}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
