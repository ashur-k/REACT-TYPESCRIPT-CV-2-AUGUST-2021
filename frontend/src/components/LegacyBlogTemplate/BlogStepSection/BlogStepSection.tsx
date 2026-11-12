import React, { FunctionComponent } from "react";

import { Blog } from "../../../pages/Blog/data";

import SiteTitle from "../../../components/SiteTitle/SiteTitle";

import BlogStepParagraph from "../BlogStepParagraph/BlogStepParagraph";
import BlogReadingLinks from "../BlogReadingLinks/BlogReadingLinks";
import BlogTerminalCommands from "../BlogTerminalCommands/BlogTerminalCommands";
import BlogSectionImages from "../BlogSectionImages/BlogSectionImages";
import BlogCodeSnippets from "../BlogCodeSnippets/BlogCodeSnippets";

import "./BlogStepSection.css";

type BlogSection = NonNullable<Blog["blog_sections"]>[number];

type BlogStepSectionProps = {
  section: BlogSection | any;
};

const BlogStepSection: FunctionComponent<BlogStepSectionProps> = ({ section }) => {
  return (
    <section className="legacy-blog-step-section">
      <div className="legacy-blog-step-header">
        <SiteTitle title={section.title} />
      </div>

      <div className="legacy-blog-step-content">
        <BlogStepParagraph paragraph={section.paragraph} />

        <BlogReadingLinks links={section.blog_reading_links} />

        <BlogTerminalCommands commands={section.blog_section_terminal_commands} />

        <BlogSectionImages mainImage={section.image_path} images={section.blog_section_images} />

        <BlogCodeSnippets snippets={section.blog_section_code_snippets} />
      </div>
    </section>
  );
};

export default BlogStepSection;
