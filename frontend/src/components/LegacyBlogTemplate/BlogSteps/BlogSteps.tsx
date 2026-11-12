import React, { FunctionComponent } from "react";

import { Blog } from "../../../pages/Blog/data";

import BlogStepSection from "../BlogStepSection/BlogStepSection";

import "./BlogSteps.css";

type BlogStepsProps = {
  blog_sections: Blog["blog_sections"] | any;
};

const BlogSteps: FunctionComponent<BlogStepsProps> = ({ blog_sections }) => {
  if (!blog_sections?.length) {
    return null;
  }

  return (
    <div className="legacy-blog-steps">
      {blog_sections.map((section: any) => (
        <BlogStepSection key={section.id} section={section} />
      ))}
    </div>
  );
};

export default BlogSteps;
