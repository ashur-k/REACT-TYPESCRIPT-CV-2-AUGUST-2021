import React, { FunctionComponent, useState } from "react";

import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

import "./BlogCodeSnippets.css";

type BlogCodeSnippet = {
  id: number | string;
  code_title: string;
  code_snippet: string;
  language?: string;
};

type BlogCodeSnippetsProps = {
  snippets?: BlogCodeSnippet[] | null;
};

const BlogCodeSnippets: FunctionComponent<BlogCodeSnippetsProps> = ({ snippets }) => {
  const [copiedSnippet, setCopiedSnippet] = useState<number | string | null>(null);

  if (!snippets?.length) {
    return null;
  }

  const copySnippet = async (code: string, id: number | string) => {
    try {
      await navigator.clipboard.writeText(code);

      setCopiedSnippet(id);

      window.setTimeout(() => {
        setCopiedSnippet((current) => (current === id ? null : current));
      }, 2000);
    } catch (error) {
      console.error("Unable to copy code snippet:", error);
    }
  };

  return (
    <section className="legacy-blog-code-snippets">
      <div className="legacy-blog-code-snippets__heading">
        <CodeRoundedIcon />
        <h3>Code Examples</h3>
      </div>

      <div className="legacy-blog-code-snippets__list">
        {snippets.map((snippet) => {
          const isCopied = copiedSnippet === snippet.id;

          return (
            <article key={snippet.id} className="legacy-blog-code-snippet">
              <div className="legacy-blog-code-snippet__header">
                <div className="legacy-blog-code-snippet__title">
                  <CodeRoundedIcon />

                  <h4>{snippet.code_title}</h4>
                </div>

                <div className="legacy-blog-code-snippet__actions">
                  {snippet.language && (
                    <span className="legacy-blog-code-snippet__language">{snippet.language}</span>
                  )}

                  <button
                    type="button"
                    className="legacy-blog-code-snippet__copy"
                    onClick={() => copySnippet(snippet.code_snippet, snippet.id)}
                    aria-label="Copy code snippet"
                    title={isCopied ? "Copied" : "Copy code"}
                  >
                    {isCopied ? <CheckRoundedIcon /> : <ContentCopyRoundedIcon />}
                  </button>
                </div>
              </div>

              <div className="legacy-blog-code-snippet__body">
                <pre>
                  <code>{snippet.code_snippet}</code>
                </pre>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BlogCodeSnippets;
