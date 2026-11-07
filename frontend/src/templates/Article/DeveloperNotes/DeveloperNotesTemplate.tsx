import type { BlogArticle } from "../../../redux/interfaces/BlogArticleInterface";

import ArticleBlockRenderer from "../../../components/Article/Blocks/ArticleBlockRenderer";
import ArticleTableOfContents from "../../../components/Article/Shared/ArticleTableOfContents";
import ArticleCategories from "../../../components/Article/Shared/ArticleCategories";

import "./DeveloperNotes.css";

interface DeveloperNotesTemplateProps {
  article: BlogArticle;
}

const DeveloperNotesTemplate = ({ article }: DeveloperNotesTemplateProps) => {
  const headings = article.blocks
    .filter((block) => {
      const title = block.title?.trim();

      return title && title.toLowerCase() !== article.article_title.trim().toLowerCase();
    })
    .map((block) => ({
      id: `section-${block.id}`,
      title: block.title.trim(),
      level: 2,
    }));
  const wordCount = article.blocks
    .map((block) => block.content)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <main className="developer-notes">
      <div className="developer-notes-container">
        <header className="developer-notes-header">
          <div className="developer-notes-eyebrow">
            <span className="developer-notes-eyebrow-line" />
            <span>DEVELOPER NOTES</span>
          </div>

          <h1>{article.article_title}</h1>

          <p className="developer-notes-overview">{article.article_overview}</p>

          <div className="developer-notes-reading-info">
            <span>{readingTime} min read</span>
            <span>{wordCount} words</span>
          </div>

          <ArticleCategories categories={article.category} />
        </header>

        {article.banner_image_path && (
          <figure className="developer-notes-banner">
            <img src={article.banner_image_path} alt={article.article_title} />
          </figure>
        )}

        <div className="developer-notes-reading-layout">
          <aside className="article-toc-sidebar">
            <ArticleTableOfContents headings={headings} />
          </aside>

          <article className="developer-notes-body">
            <ArticleBlockRenderer blocks={article.blocks} />
          </article>
        </div>
      </div>
    </main>
  );
};

export default DeveloperNotesTemplate;
