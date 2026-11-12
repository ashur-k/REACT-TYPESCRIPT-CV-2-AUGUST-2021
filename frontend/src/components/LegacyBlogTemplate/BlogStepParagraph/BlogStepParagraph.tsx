import React, { FunctionComponent } from "react";

import "./BlogStepParagraph.css";

type BlogStepParagraphProps = {
  paragraph?: string | null;
};

const BlogStepParagraph: FunctionComponent<BlogStepParagraphProps> = ({ paragraph }) => {
  if (!paragraph?.trim()) {
    return null;
  }

  return (
    <div className="legacy-blog-paragraph">
      <p>{paragraph}</p>
    </div>
  );
};

export default BlogStepParagraph;
