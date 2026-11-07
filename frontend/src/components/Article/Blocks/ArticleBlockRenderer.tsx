import type { BlogBlock } from "../../../redux/interfaces/BlogArticleInterface";
import CopyButton from "../UI/CopyButton";

interface ArticleBlockRendererProps {
  blocks: BlogBlock[];
}

const ArticleBlockRenderer = ({ blocks }: ArticleBlockRendererProps) => {
  const renderParagraph = (content: string) =>
    content.split(/\r?\n\r?\n/).map((paragraph, index) => (
      <p key={index}>
        {paragraph.split(/\r?\n/).map((line, lineIndex, lines) => (
          <span key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    ));

  // Parse table content into individual cells.
  const parseTableContent = (content: string) =>
    content
      .split(/\r?\n\s*\r?\n/)
      .map((cell) => cell.trim())
      .filter((cell) => cell.length > 0);

  return (
    <div className="article-blocks">
      {blocks.map((block) => {
        switch (block.block_type) {
          case "heading": {
            const headingId = `section-${block.id}`;

            return (
              <h2 key={block.id} id={headingId} className="article-section-heading">
                {block.title || block.content}
              </h2>
            );
          }

          case "paragraph":
            return (
              <div key={block.id} id={`section-${block.id}`} className="article-paragraph">
                {block.title && <h3 className="article-paragraph-title">{block.title}</h3>}

                {renderParagraph(block.content)}
              </div>
            );

          case "image":
            return block.image ? (
              <figure key={block.id} id={`section-${block.id}`} className="article-image">
                <img src={block.image} alt={block.title || "Article illustration"} />
                {block.title && <figcaption>{block.title}</figcaption>}
              </figure>
            ) : null;

          case "code":
          case "terminal":
            return (
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

          case "quote":
            return (
              <blockquote key={block.id} id={`section-${block.id}`} className="article-quote">
                {renderParagraph(block.content)}
                {block.title && <cite>{block.title}</cite>}
              </blockquote>
            );

          case "callout":
            return (
              <aside key={block.id} id={`section-${block.id}`} className="article-callout">
                {block.title && <h3>{block.title}</h3>}
                {renderParagraph(block.content)}
              </aside>
            );

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

            return (
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
          }

          case "divider":
            return <hr key={block.id} className="article-divider" />;

          case "reading_links":
            return (
              <section key={block.id} className="article-reading-links">
                {block.title && <h3>{block.title}</h3>}
                {renderParagraph(block.content)}
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ArticleBlockRenderer;
