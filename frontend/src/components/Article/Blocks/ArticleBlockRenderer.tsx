import type { ReactNode } from "react";
import type { BlogBlock } from "../../../redux/interfaces/BlogArticleInterface";
import ArticleDiagram from "./ArticleDiagram/ArticleDiagram";
import ArticleParagraph from "./ArticleParagraph/ArticleParagraph";
import CopyButton from "../UI/CopyButton";
import ArticleDesign from "./ArticleDesign/ArticleDesign";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import { BookOpen } from "lucide-react";

interface ArticleBlockRendererProps {
  blocks: BlogBlock[];
}

const ArticleBlockRenderer = ({ blocks }: ArticleBlockRendererProps) => {
  const renderInline = (content: string): ReactNode[] =>
    content.split(/(\*\*.+?\*\*)/g).map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }

      return part;
    });

  const renderParagraph = (content: string) => {
    const lines = content.split(/\r?\n/);
    const elements: ReactNode[] = [];

    let currentParagraph: string[] = [];
    let currentList: string[] = [];
    let removeNextParagraphSpacing = false;

    const flushParagraph = () => {
      if (currentParagraph.length === 0) return;

      elements.push(
        <p
          key={`paragraph-${elements.length}`}
          style={removeNextParagraphSpacing ? { marginTop: "0", paddingTop: "0" } : undefined}
        >
          {currentParagraph.map((line, index) => (
            <span key={index}>
              {renderInline(line)}
              {index < currentParagraph.length - 1 && <br />}
            </span>
          ))}
        </p>
      );

      currentParagraph = [];
      removeNextParagraphSpacing = false;
    };

    const flushList = () => {
      if (currentList.length === 0) return;

      elements.push(
        <ul key={`list-${elements.length}`}>
          {currentList.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </ul>
      );

      currentList = [];
    };

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      // Ignore empty lines and separate paragraphs/lists.
      if (!trimmedLine) {
        flushParagraph();
        flushList();
        return;
      }

      // Detect manually numbered Markdown headings.
      // Example: **1. My heading:**
      const headingMatch = trimmedLine.match(/^\*\*(\d+)\.\s+(.+?)\*\*:?$/);

      if (headingMatch) {
        flushParagraph();
        flushList();

        const [, number, heading] = headingMatch;

        elements.push(
          <p
            key={`heading-${elements.length}`}
            className="article-numbered-heading"
            style={{ marginBottom: 0 }}
          >
            <span className="article-numbered-heading__number">{number}.</span>

            <strong>{renderInline(heading)}</strong>
          </p>
        );

        removeNextParagraphSpacing = true;

        return;
      }

      // Detect unordered Markdown lists.
      const bulletMatch = trimmedLine.match(/^[-*]\s+(.+)$/);

      if (bulletMatch) {
        flushParagraph();
        currentList.push(bulletMatch[1]);
        return;
      }

      flushList();
      currentParagraph.push(line);
    });

    flushParagraph();
    flushList();

    return elements;
  };

  // Parse table content into individual cells.
  const parseTableContent = (content: string) =>
    content
      .split(/\r?\n\s*\r?\n/)
      .map((cell) => cell.trim())
      .filter((cell) => cell.length > 0);

  const renderReadingLinks = (readingLinks: BlogBlock[]) => (
    <section key={readingLinks[0].id} className="article-reading-links">
      <h2>{readingLinks.length === 1 ? "Further Reading" : "Further Reading & Documentation"}</h2>

      <p className="article-reading-links-description">
        {readingLinks.length === 1
          ? "A recommended resource"
          : "Recommended resources and documentations"}
      </p>

      <div className="article-reading-links-list">
        {readingLinks.map((link) => (
          <a
            key={link.id}
            href={link.content}
            target="_blank"
            rel="noopener noreferrer"
            className="article-reading-link"
          >
            <div className="article-reading-link-header">
              <BookOpen size={18} className="article-reading-link-icon" />
              <span className="article-reading-link-text">{link.title}</span>
              <span className="article-reading-link-arrow">↗</span>
            </div>

            <span className="article-reading-link-description">
              {typeof link.configuration?.description === "string"
                ? link.configuration.description
                : ""}
            </span>
          </a>
        ))}
      </div>
    </section>
  );

  return (
    <div className="article-blocks">
      {(() => {
        const elements: ReactNode[] = [];

        for (let i = 0; i < blocks.length; i++) {
          const block = blocks[i];

          if (block.is_disabled ?? false) continue;

          if (block.block_type === "reading_links") {
            const readingLinks: BlogBlock[] = [];

            while (i < blocks.length && blocks[i].block_type === "reading_links") {
              if (!(blocks[i].is_disabled ?? false)) {
                readingLinks.push(blocks[i]);
              }

              i++;
            }

            if (readingLinks.length > 0) {
              elements.push(renderReadingLinks(readingLinks));
            }

            i--;
            continue;
          }

          switch (block.block_type) {
            case "heading": {
              const headingId = `section-${block.id}`;

              elements.push(
                <h2 key={block.id} id={headingId} className="article-section-heading">
                  {block.title || block.content}
                </h2>
              );
              break;
            }

            case "paragraph":
              elements.push(
                <ArticleParagraph
                  key={block.id}
                  id={String(block.id)}
                  title={block.title}
                  content={block.content}
                />
              );
              break;

            case "image":
              if (block.image) {
                elements.push(
                  <figure key={block.id} id={`section-${block.id}`} className="article-image">
                    <img src={block.image} alt={block.title || "Article illustration"} />
                    {block.title && <figcaption>{block.title}</figcaption>}
                  </figure>
                );
              }
              break;

            case "code":
              elements.push(
                <section
                  key={block.id}
                  id={`section-${block.id}`}
                  className="article-code-block article-code-block--source"
                >
                  <div className="article-code-header">
                    <span>{block.title || "Python"}</span>
                    <CopyButton text={block.content} />
                  </div>

                  <pre>
                    <code
                      className="language-python"
                      dangerouslySetInnerHTML={{
                        __html: Prism.highlight(block.content, Prism.languages.python, "python"),
                      }}
                    />
                  </pre>
                </section>
              );
              break;

            case "terminal":
              elements.push(
                <section
                  key={block.id}
                  id={`section-${block.id}`}
                  className={`article-code-block ${block.block_type}`}
                >
                  <div className="article-code-header">
                    <span>
                      {block.title || (block.block_type === "terminal" ? "Terminal" : "Code")}
                    </span>

                    <CopyButton text={block.content} />
                  </div>

                  <pre>
                    <code>{block.content}</code>
                  </pre>
                </section>
              );
              break;

            case "quote":
              elements.push(
                <blockquote key={block.id} id={`section-${block.id}`} className="article-quote">
                  {renderParagraph(block.content)}
                  <b>{block.title && <cite>{block.title}</cite>}</b>
                </blockquote>
              );
              break;

            case "callout":
              elements.push(
                <aside key={block.id} id={`section-${block.id}`} className="article-callout">
                  {block.title && <h3>{block.title}</h3>}
                  {renderParagraph(block.content)}
                </aside>
              );
              break;

            case "table": {
              const cells = parseTableContent(block.content);

              // Use configured column count, defaulting to three.
              const configuredColumns = block.configuration?.columns;

              const columns =
                typeof configuredColumns === "number" &&
                Number.isInteger(configuredColumns) &&
                configuredColumns > 0
                  ? configuredColumns
                  : 3;

              // Tables have headers by default.
              const hasHeader = block.configuration?.has_header !== false;

              const headerCells = hasHeader ? cells.slice(0, columns) : [];

              const bodyCells = hasHeader ? cells.slice(columns) : cells;

              // Group remaining cells into rows.
              const rows: string[][] = [];

              for (let i = 0; i < bodyCells.length; i += columns) {
                rows.push(bodyCells.slice(i, i + columns));
              }

              elements.push(
                <div key={block.id} id={`section-${block.id}`} className="article-table-wrapper">
                  {block.title && <h3>{block.title}</h3>}

                  {cells.length > 0 ? (
                    <div className="article-table-scroll">
                      <table className="article-table">
                        {hasHeader && (
                          <thead>
                            <tr>
                              {Array.from({ length: columns }, (_, index) => (
                                <th key={index}>{headerCells[index] || ""}</th>
                              ))}
                            </tr>
                          </thead>
                        )}

                        <tbody>
                          {rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {Array.from({ length: columns }, (_, columnIndex) => (
                                <td key={columnIndex}>{row[columnIndex] || ""}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="article-table-empty">No table content available.</p>
                  )}
                </div>
              );
              break;
            }

            case "divider":
              elements.push(<hr key={block.id} className="article-divider" />);
              break;

            case "diagram":
              elements.push(
                <div key={block.id} id={`section-${block.id}`} className="article-diagram-block">
                  <ArticleDiagram content={block.content} title={block.title} />
                </div>
              );
              break;

            case "design":
              elements.push(<ArticleDesign key={block.id} block={block} />);
              break;

            default:
              break;
          }
        }

        return elements;
      })()}
    </div>
  );
};

export default ArticleBlockRenderer;
