import React, { FunctionComponent } from "react";

import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

import "./BlogReadingLinks.css";

type BlogReadingLink = {
  id: number | string;
  link_title: string;
  link_url: string;
};

type BlogReadingLinksProps = {
  links?: BlogReadingLink[] | null;
};

const BlogReadingLinks: FunctionComponent<BlogReadingLinksProps> = ({ links }) => {
  if (!links?.length) {
    return null;
  }

  return (
    <section className="legacy-blog-reading-links">
      <div className="legacy-blog-reading-links__header">
        <MenuBookRoundedIcon />
        <h3>Further Reading</h3>
      </div>

      <div className="legacy-blog-reading-links__list">
        {links.map((link) => (
          <a
            key={link.id}
            className="legacy-blog-reading-link"
            href={link.link_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="legacy-blog-reading-link__content">
              <span className="legacy-blog-reading-link__title">{link.link_title}</span>
            </span>

            <LaunchRoundedIcon className="legacy-blog-reading-link__icon" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogReadingLinks;
