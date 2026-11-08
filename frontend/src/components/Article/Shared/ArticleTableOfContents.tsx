import { useEffect, useState } from "react";
import "./ArticleTableOfContents.css";

export interface ArticleHeading {
  id: string;
  title: string;
  level: number;
}

interface ArticleTableOfContentsProps {
  headings: ArticleHeading[];
}

type SpecialHeadingType = "security" | "mistakes" | "conclusion" | "readingLinks";

const specialHeadingConfig: Record<SpecialHeadingType, { keywords: string[]; icon: string }> = {
  security: {
    keywords: ["security"],
    icon: "🛡",
  },
  mistakes: {
    keywords: ["mistake", "mistakes"],
    icon: "⚠",
  },
  conclusion: {
    keywords: ["conclusion"],
    icon: "▤",
  },
  readingLinks: {
    keywords: ["reading links", "further reading"],
    icon: "📚",
  },
};

const getSpecialHeadingType = (title: string): SpecialHeadingType | null => {
  const normalisedTitle = title.toLowerCase();

  for (const [type, config] of Object.entries(specialHeadingConfig) as [
    SpecialHeadingType,
    (typeof specialHeadingConfig)[SpecialHeadingType],
  ][]) {
    if (
      config.keywords.some((keyword) => new RegExp(`\\b${keyword}\\b`, "i").test(normalisedTitle))
    ) {
      return type;
    }
  }

  return null;
};

const ArticleTableOfContents = ({ headings }: ArticleTableOfContentsProps) => {
  const [activeHeading, setActiveHeading] = useState(headings[0]?.id ?? "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const regularHeadings = headings.filter((heading) => !getSpecialHeadingType(heading.title));

  const specialHeadings = headings.filter((heading) => getSpecialHeadingType(heading.title));

  useEffect(() => {
    if (!headings.length) return;

    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleHeadings.length) {
          setActiveHeading(visibleHeadings[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveHeading(id);
  };

  const renderHeading = (heading: ArticleHeading, index: number, special = false) => {
    const specialType = getSpecialHeadingType(heading.title);
    const config = specialType ? specialHeadingConfig[specialType] : null;

    return (
      <button
        key={heading.id}
        type="button"
        className={`toc-item ${special ? "toc-item--special" : ""} ${
          activeHeading === heading.id ? "active" : ""
        }`}
        aria-current={activeHeading === heading.id ? "location" : undefined}
        onClick={() => {
          scrollToHeading(heading.id);
          setIsMobileOpen(false);
        }}
      >
        {special && config ? (
          <span className={`toc-special-icon toc-special-icon--${specialType}`} aria-hidden="true">
            {config.icon}
          </span>
        ) : (
          <span className="toc-number">{index + 1}</span>
        )}

        <span className="toc-text">{heading.title}</span>
      </button>
    );
  };

  return (
    <nav className="toc-container toc-container--mobile-collapsible" aria-label="Table of contents">
      <button
        type="button"
        className="toc-mobile-toggle"
        aria-expanded={isMobileOpen}
        aria-controls="toc-mobile-content"
        onClick={() => setIsMobileOpen((open) => !open)}
      >
        <span>On this page</span>

        <span className="toc-mobile-current">
          {headings.find((heading) => heading.id === activeHeading)?.title ?? "Article contents"}
        </span>

        <span className="toc-mobile-chevron" aria-hidden="true" />
      </button>

      <div className="toc-header">
        <span className="toc-menu-icon" aria-hidden="true">
          ☷
        </span>
        <span>Table of Contents</span>
      </div>

      <div id="toc-mobile-content" className={`toc-content ${isMobileOpen ? "is-open" : ""}`}>
        {regularHeadings.map((heading, index) => renderHeading(heading, index))}

        {specialHeadings.length > 0 && (
          <div className="toc-special-group">
            {specialHeadings.map((heading, index) => renderHeading(heading, index, true))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default ArticleTableOfContents;
