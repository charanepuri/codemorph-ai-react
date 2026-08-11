import ReactMarkdown from "react-markdown";

import "./MarkdownRenderer.css";

function MarkdownRenderer({ content = "" }) {
  if (!content.trim()) {
    return (
      <div className="markdown-empty">
        <p>No explanation available yet.</p>
      </div>
    );
  }

  return (
    <div className="markdown-renderer">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="markdown-title">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="markdown-heading">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="markdown-subheading">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="markdown-paragraph">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="markdown-list">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="markdown-list">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li>{children}</li>
          ),

          blockquote: ({ children }) => (
            <blockquote className="markdown-blockquote">
              {children}
            </blockquote>
          ),

          code: ({ children, className }) => {
            const isInline = !className;

            if (isInline) {
              return (
                <code className="markdown-inline-code">
                  {children}
                </code>
              );
            }

            return (
              <pre className="markdown-code-block">
                <code className={className}>
                  {children}
                </code>
              </pre>
            );
          },

          hr: () => (
            <hr className="markdown-divider" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;