import type { BlogBlock } from "../../../../redux/interfaces/BlogArticleInterface";
import {
  Server,
  ShieldCheck,
  Network,
  Code,
  Database,
  Zap,
  Layers,
  Settings,
  Lock,
  Cloud,
  type LucideIcon,
} from "lucide-react";

import "./ArticleDesign.css";

interface FeatureCard {
  title: string;
  description: string;
  icon?: string;
}

interface ArticleDesignProps {
  block: BlogBlock;
}

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  "shield-check": ShieldCheck,
  network: Network,
  code: Code,
  database: Database,
  zap: Zap,
  layers: Layers,
  settings: Settings,
  lock: Lock,
  cloud: Cloud,
};

const ArticleDesign = ({ block }: ArticleDesignProps) => {
  const configuration = block.configuration;

  const layout = configuration.layout;

  const renderFeatureCards = () => {
    const items = configuration.items as FeatureCard[] | undefined;

    const configuredColumns = configuration.columns;

    const columns =
      typeof configuredColumns === "number" &&
      Number.isInteger(configuredColumns) &&
      configuredColumns > 0
        ? Math.min(configuredColumns, 4)
        : 3;

    if (!Array.isArray(items) || items.length === 0) {
      return <p className="article-design-empty">No design content available.</p>;
    }

    return (
      <div
        className="article-design-feature-grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon ? iconMap[item.icon] : undefined;

          return (
            <article key={`${item.title}-${index}`} className="article-design-feature-card">
              {Icon && (
                <div className="article-design-feature-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
              )}

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </article>
          );
        })}
      </div>
    );
  };

  const renderLayout = () => {
    switch (layout) {
      case "feature_cards":
        return renderFeatureCards();

      default:
        return (
          <p className="article-design-empty">
            Unsupported design layout: {String(layout || "undefined")}
          </p>
        );
    }
  };

  return (
    <section id={`section-${block.id}`} className="article-design">
      {block.title && <h3 className="article-design-title">{block.title}</h3>}

      {renderLayout()}
    </section>
  );
};

export default ArticleDesign;
