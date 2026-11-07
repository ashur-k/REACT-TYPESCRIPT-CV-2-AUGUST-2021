import type { BlogArticle } from "../../../redux/interfaces/BlogArticleInterface";
import ArticleBlockRenderer from "../../../components/Article/Blocks/ArticleBlockRenderer";
import ArticleTableOfContents from "../../../components/Article/Shared/ArticleTableOfContents";
import ArticleCategories from "../../../components/Article/Shared/ArticleCategories";

import "./TechnicalArticle.css";

interface TechnicalArticleTemplateProps {
  article: BlogArticle;
}

const TechnicalArticleTemplate = ({ article }: TechnicalArticleTemplateProps) => {
  const headings = article.blocks
    .filter((block) => block.block_type === "heading")
    .map((block) => ({
      id: `section-${block.id}`,
      title: block.title || block.content,
      level: 2,
    }))
    .filter(
      (heading) => heading.title.trim().toLowerCase() !== article.article_title.trim().toLowerCase()
    );

  const wordCount = article.blocks
    .map((block) => block.content)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <main className="technical-article">
      <div className="technical-article-container">
        <header className="technical-article-header">
          <div className="technical-article-eyebrow">
            <span className="technical-article-eyebrow-line" />
            <span>TECHNICAL ARTICLE</span>
          </div>

          <h1>{article.article_title}</h1>

          <p className="technical-article-overview">{article.article_overview}</p>

          <ArticleCategories categories={article.category} />
        </header>

        {article.banner_image_path && (
          <figure className="technical-article-banner">
            <img src={article.banner_image_path} alt={article.article_title} />
          </figure>
        )}

        <div className="technical-article-reading-layout">
          <aside className="article-toc-sidebar">
            <ArticleTableOfContents headings={headings} />
          </aside>

          <article className="technical-article-body">
            <ArticleBlockRenderer blocks={article.blocks} />
          </article>
        </div>
      </div>
    </main>
  );
};

export default TechnicalArticleTemplate;
