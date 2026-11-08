import type { BlogArticle } from "../../../redux/interfaces/BlogArticleInterface";

import ArticleBlockRenderer from "../../../components/Article/Blocks/ArticleBlockRenderer";
import ArticleTableOfContents from "../../../components/Article/Shared/ArticleTableOfContents";
import ArticleCategories from "../../../components/Article/Shared/ArticleCategories";
import getIcon from "../../../helperFunctions/getIcon";
import "./EngineeringCaseStudy.css";

interface EngineeringCaseStudyTemplateProps {
  article: BlogArticle;
}

interface ProjectMetric {
  icon: string;
  value: string;
  label: string;
}

const getProjectMetrics = (configuration: Record<string, unknown>): ProjectMetric[] => {
  const projectOverview = configuration.project_overview;

  if (!projectOverview || typeof projectOverview !== "object" || Array.isArray(projectOverview)) {
    return [];
  }

  const metrics = (projectOverview as Record<string, unknown>).metrics;

  if (!Array.isArray(metrics)) {
    return [];
  }

  return metrics
    .filter(
      (metric): metric is ProjectMetric =>
        typeof metric === "object" &&
        metric !== null &&
        !Array.isArray(metric) &&
        typeof metric.icon === "string" &&
        "value" in metric &&
        "label" in metric &&
        (typeof metric.value === "string" || typeof metric.value === "number") &&
        typeof metric.label === "string"
    )
    .map((metric) => ({
      icon: metric.icon as string,
      value: String(metric.value),
      label: metric.label as string,
    }));
};

const EngineeringCaseStudyTemplate = ({ article }: EngineeringCaseStudyTemplateProps) => {
  const headings = article.blocks
    .filter((block) => block.title.trim().length > 0)
    .map((block) => ({
      id: `section-${block.id}`,
      title: block.title,
      level: 2,
    }));

  const wordCount = article.blocks
    .map((block) => block.content)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const metrics = getProjectMetrics(article.presentation.configuration);

  return (
    <main className="engineering-case-study">
      <div className="engineering-case-study-container">
        <header className="engineering-case-study-header">
          <div className="engineering-case-study-eyebrow">
            <span className="engineering-case-study-eyebrow-line" />
            <span>ENGINEERING CASE STUDY</span>
          </div>

          <h1>{article.article_title}</h1>

          <p className="engineering-case-study-overview">{article.article_overview}</p>

          <div className="engineering-case-study-reading-info">
            <span>{readingTime} min read</span>
            <span>{wordCount} words</span>
          </div>

          <ArticleCategories categories={article.category} />
        </header>

        {article.banner_image_path && (
          <figure className="engineering-case-study-banner">
            <img src={article.banner_image_path} alt={article.article_title} />
          </figure>
        )}

        {metrics.length > 0 && (
          <section className="engineering-case-study-overview-panel" aria-label="Project overview">
            <h2>Project Overview</h2>

            <div className="engineering-case-study-metrics">
              {metrics.map((metric, index) => (
                <div key={`${metric.label}-${index}`} className="engineering-case-study-metric">
                  <div className="engineering-case-study-metric-heading">
                    <span className="engineering-case-study-metric-icon">
                      {getIcon(metric.icon)}
                    </span>

                    <strong>{metric.value}</strong>
                  </div>

                  <span className="engineering-case-study-metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}
        {article.requirements.length > 0 && (
          <section className="engineering-case-study-technology">
            <h2>Technology Stack</h2>

            <div className="engineering-case-study-technology-list">
              {article.requirements.map((technology, index) => (
                <span
                  key={`${technology}-${index}`}
                  className="engineering-case-study-technology-item"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>
        )}

        <div className="engineering-case-study-reading-layout">
          <aside className="article-toc-sidebar">
            <ArticleTableOfContents headings={headings} />
          </aside>

          <article className="engineering-case-study-body">
            <ArticleBlockRenderer blocks={article.blocks} />
          </article>
        </div>
      </div>
    </main>
  );
};

export default EngineeringCaseStudyTemplate;
