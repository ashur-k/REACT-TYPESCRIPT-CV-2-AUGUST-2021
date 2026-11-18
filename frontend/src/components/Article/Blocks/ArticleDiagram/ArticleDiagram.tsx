import { useEffect, useId, useRef, useState } from "react";
import mermaid from "mermaid";

import "./ArticleDiagram.css";

interface ArticleDiagramProps {
  content: string;
  title?: string;
}

const ArticleDiagram = ({ content, title }: ArticleDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const renderDiagram = async () => {
      if (!containerRef.current || !content.trim()) {
        return;
      }

      setError(null);
      containerRef.current.innerHTML = "";

      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: "default",
          securityLevel: "strict",
          flowchart: {
            useMaxWidth: false,
            htmlLabels: true,
            wrappingWidth: 250,
            nodeSpacing: 60,
            rankSpacing: 80,
          },
          themeVariables: {
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
          },
        });

        const diagramId = `article-diagram-${generatedId.replace(/[^a-zA-Z0-9]/g, "")}`;

        const { svg } = await mermaid.render(diagramId, content.trim());

        if (isMounted && containerRef.current) {
          containerRef.current.innerHTML = svg;

          const renderedSvg = containerRef.current.querySelector("svg");

          if (renderedSvg) {
            renderedSvg.classList.add("article-diagram-svg");

            const viewBox = renderedSvg.getAttribute("viewBox");

            if (viewBox) {
              const [, , width, height] = viewBox
                .trim()
                .split(/[\s,]+/)
                .map(Number);

              if (width > 0 && height > 0) {
                renderedSvg.setAttribute("width", String(width));
                renderedSvg.setAttribute("height", String(height));

                renderedSvg.style.width = `${width}px`;
                renderedSvg.style.height = `${height}px`;
                renderedSvg.style.maxWidth = "none";
              }
            }
          }
        }
      } catch {
        if (isMounted) {
          setError("Unable to render this diagram. Please check the Mermaid syntax.");
        }
      }
    };

    renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [content, generatedId]);

  return (
    <figure className="article-diagram">
      {title && <figcaption className="article-diagram-title">{title}</figcaption>}

      {error ? (
        <div className="article-diagram-error" role="alert">
          {error}
        </div>
      ) : (
        <div
          ref={containerRef}
          className="article-diagram-container"
          role="img"
          aria-label={title || "Article diagram"}
        />
      )}
    </figure>
  );
};

export default ArticleDiagram;
