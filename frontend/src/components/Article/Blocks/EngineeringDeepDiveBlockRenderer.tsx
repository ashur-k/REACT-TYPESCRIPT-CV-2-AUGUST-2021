import type { BlogBlock } from "../../../redux/interfaces/BlogArticleInterface";
import CopyButton from "../UI/CopyButton";

interface EngineeringDeepDiveBlockRendererProps {
  blocks: BlogBlock[];
}

const renderParagraphs = (content: string) => {
  return content
    .split(/\r?\n\s*\r?\n/)
    .filter((paragraph) => paragraph.trim())
    .map((paragraph, index) => (
      <p key={index}>
        {paragraph.split(/\r?\n/).map((line, lineIndex) => (
          <span key={lineIndex}>
            {line}
            {lineIndex < paragraph.split(/\r?\n/).length - 1 && <br />}
          </span>
        ))}
      </p>
    ));
};

const EngineeringDeepDiveBlockRenderer = ({ blocks }: EngineeringDeepDiveBlockRendererProps) => {
  return (
    <div className="engineering-deep-dive-content">
      {blocks.map((block) => {
        const language =
          typeof block.configuration?.language === "string" ? block.configuration.language : "";

        switch (block.block_type) {
          case "heading":
            return (
              <section className="engineering-deep-dive-section" key={block.id}>
                <h2 id={`section-${block.id}`} className="engineering-deep-dive-section-heading">
                  {block.title || block.content}
                </h2>

                {block.title && block.content && (
                  <div className="engineering-deep-dive-section-body">
                    {renderParagraphs(block.content)}
                  </div>
                )}
              </section>
            );

          case "paragraph":
            return (
              <section className="engineering-deep-dive-paragraph" key={block.id}>
                {block.title && <h3>{block.title}</h3>}
                {renderParagraphs(block.content)}
              </section>
            );

          case "code":
          case "terminal":
            return (
              <figure
                className={`engineering-deep-dive-code engineering-deep-dive-code--${block.block_type}`}
                key={block.id}
              >
                <div className="engineering-deep-dive-code-header">
                  <span>
                    {block.title || (block.block_type === "terminal" ? "Terminal" : "Code")}
                  </span>
                  {language && <span>{language}</span>}
                  <CopyButton text={block.content} />
                </div>

                <pre>
                  <code>{block.content}</code>
                </pre>
              </figure>
            );

          case "quote":
            return (
              <blockquote className="engineering-deep-dive-quote" key={block.id}>
                {renderParagraphs(block.content)}
                {block.title && <cite>{block.title}</cite>}
              </blockquote>
            );

          case "callout":
            return (
              <aside className="engineering-deep-dive-callout" key={block.id}>
                {block.title && <h3>{block.title}</h3>}
                {renderParagraphs(block.content)}
              </aside>
            );

          case "table": {
            const cells = block.content
              .split(/\r?\n\s*\r?\n/)
              .map((cell) => cell.trim())
              .filter(Boolean);

            const configuredColumns = block.configuration?.columns;
            const columns =
              typeof configuredColumns === "number" &&
              Number.isInteger(configuredColumns) &&
              configuredColumns > 0
                ? configuredColumns
                : 3;

            const rows: string[][] = [];

            for (let index = 0; index < cells.length; index += columns) {
              rows.push(cells.slice(index, index + columns));
            }

            const hasHeader = block.configuration?.has_header !== false;

            return (
              <div className="engineering-deep-dive-table-wrapper" key={block.id}>
                {block.title && <h3>{block.title}</h3>}

                <table className="engineering-deep-dive-table">
                  {hasHeader && rows.length > 0 && (
                    <thead>
                      <tr>
                        {rows[0].map((cell, index) => (
                          <th key={index}>{cell}</th>
                        ))}
                      </tr>
                    </thead>
                  )}

                  <tbody>
                    {rows.slice(hasHeader ? 1 : 0).map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          case "image":
            return block.image ? (
              <figure className="engineering-deep-dive-image" key={block.id}>
                <img src={block.image} alt={block.title || ""} />
                {block.title && <figcaption>{block.title}</figcaption>}
              </figure>
            ) : null;

          case "divider":
            return <hr className="engineering-deep-dive-divider" key={block.id} />;

          case "reading_links":
            return (
              <section className="engineering-deep-dive-reading-links" key={block.id}>
                {block.title && <h3>{block.title}</h3>}
                {renderParagraphs(block.content)}
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default EngineeringDeepDiveBlockRenderer;
