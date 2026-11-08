import React, { FunctionComponent, useEffect, useRef, useState } from "react";

// React Bootstrap components
import { Card } from "react-bootstrap";
import { Link } from "react-router";

// CSS imports
import "./BlogCards.css";

export const BlogCard: FunctionComponent<{
  blogId: number;
  blogTitle: string;
  blogOverview: string;
  blogImagePath: string;
}> = ({ blogId, blogTitle, blogOverview, blogImagePath }) => {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  const overviewRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      const element = overviewRef.current;

      if (element) {
        setCanExpand(element.scrollHeight > element.clientHeight + 1);
      }
    };

    checkOverflow();

    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [blogOverview]);

  return (
    <Card className="blog-card h-100">
      <Card.Img variant="top" src={blogImagePath} className="blog-card-image" alt={blogTitle} />

      <Card.Body className="blog-card-body">
        <Card.Title className="blog-card-title">{blogTitle}</Card.Title>

        <Card.Text
          ref={overviewRef}
          id={`blog-overview-${blogId}`}
          className={`blog-card-overview ${expanded ? "blog-card-overview-expanded" : ""}`}
        >
          {blogOverview}
        </Card.Text>

        {canExpand && (
          <button
            type="button"
            className="blog-card-read-more"
            onClick={() => setExpanded((previous) => !previous)}
            aria-expanded={expanded}
            aria-controls={`blog-overview-${blogId}`}
          >
            {expanded ? "Read less ↑" : "Read more ↓"}
          </button>
        )}
      </Card.Body>

      <Card.Footer className="blog-card-footer">
        <Link to={`/blog-detail/${blogId}`} className="blog-card-button">
          Explore the Article <span aria-hidden="true">→</span>
        </Link>
      </Card.Footer>
    </Card>
  );
};
