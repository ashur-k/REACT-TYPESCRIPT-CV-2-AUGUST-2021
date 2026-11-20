import React, { type ReactNode } from "react";
import "./ArticleParagraph.css";

interface ArticleParagraphProps {
  id: string;
  title?: string;
  content: string;
}

const renderInline = (content: string): ReactNode[] =>
  content.split(/(\*\*.+?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });

const ArticleParagraph: React.FC<ArticleParagraphProps> = ({ id, title, content }) => {
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
        className={`article-paragraph__text ${
          removeNextParagraphSpacing ? "article-paragraph__text--after-heading" : ""
        }`}
      >
        {currentParagraph.map((line, index) => (
          <React.Fragment key={index}>
            {renderInline(line)}
            {index < currentParagraph.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    );

    currentParagraph = [];
    removeNextParagraphSpacing = false;
  };

  const flushList = () => {
    if (currentList.length === 0) return;

    elements.push(
      <ul key={`list-${elements.length}`} className="article-paragraph__list">
        {currentList.map((item, index) => (
          <li key={index}>{renderInline(item)}</li>
        ))}
      </ul>
    );

    currentList = [];
  };

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      flushParagraph();
      flushList();
      return;
    }

    // Manually numbered bold headings.
    const headingMatch = trimmedLine.match(/^\*\*(\d+)\.\s+(.+?)\*\*:?$/);

    if (headingMatch) {
      flushParagraph();
      flushList();

      const [, number, heading] = headingMatch;

      elements.push(
        <p key={`heading-${elements.length}`} className="article-numbered-heading">
          <span className="article-numbered-heading__number">{number}.</span>

          <strong>{renderInline(heading)}</strong>
        </p>
      );

      removeNextParagraphSpacing = true;
      return;
    }

    // Unordered Markdown lists.
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

  return (
    <div id={`section-${id}`} className="article-paragraph">
      {title && <h3 className="article-paragraph-title">{title}</h3>}

      <div className="article-paragraph__content">{elements}</div>
    </div>
  );
};

export default ArticleParagraph;
