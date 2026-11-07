import type { BlogArticle } from "../../../redux/interfaces/BlogArticleInterface";
import EngineeringDeepDiveBlockRenderer from "../../../components/Article/Blocks/EngineeringDeepDiveBlockRenderer";
import ArticleTableOfContents from "../../../components/Article/Shared/ArticleTableOfContents";
import ArticleCategories from "../../../components/Article/Shared/ArticleCategories";
import "./EngineeringDeepDive.css";

interface EngineeringDeepDiveTemplateProps {
  article: BlogArticle;
}

const EngineeringDeepDiveTemplate = ({ article }: EngineeringDeepDiveTemplateProps) => {
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
    .map((block) => `${block.title} ${block.content}`)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <main className="engineering-deep-dive">
      <div className="engineering-deep-dive-container">
        <header className="engineering-deep-dive-header">
          <div className="engineering-deep-dive-eyebrow">
            <span className="engineering-deep-dive-eyebrow-line" />
            <span>ENGINEERING DEEP DIVE</span>
          </div>

          <h1>{article.article_title}</h1>

          <p className="engineering-deep-dive-overview">{article.article_overview}</p>

          <div className="engineering-deep-dive-meta">
            <span>{readingTime} min read</span>
            <span className="engineering-deep-dive-meta-divider">·</span>
            <span>{wordCount.toLocaleString()} words</span>
          </div>

          <ArticleCategories categories={article.category} />
        </header>

        {article.banner_image_path && (
          <figure className="engineering-deep-dive-banner">
            <img src={article.banner_image_path} alt={article.article_title} />
          </figure>
        )}

        <div className="engineering-deep-dive-reading-layout">
          <aside className="article-toc-sidebar engineering-deep-dive-sidebar">
            <ArticleTableOfContents headings={headings} />
          </aside>

          <article className="engineering-deep-dive-article">
            <EngineeringDeepDiveBlockRenderer blocks={article.blocks} />
          </article>
        </div>
      </div>
    </main>
  );
};

export default EngineeringDeepDiveTemplate;
