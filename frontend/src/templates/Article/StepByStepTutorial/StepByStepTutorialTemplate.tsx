import type { BlogArticle, BlogBlock } from "../../../redux/interfaces/BlogArticleInterface";

import ArticleBlockRenderer from "../../../components/Article/Blocks/ArticleBlockRenderer";
import ArticleTableOfContents, {
  type ArticleHeading,
} from "../../../components/Article/Shared/ArticleTableOfContents";
import ArticleCategories from "../../../components/Article/Shared/ArticleCategories";

import "./StepByStepTutorial.css";

interface StepByStepTutorialTemplateProps {
  article: BlogArticle;
}

type TutorialSectionType =
  "introduction" | "step" | "verification" | "security" | "common_mistakes" | "conclusion";

interface TutorialSection {
  heading: BlogBlock;
  blocks: BlogBlock[];
  sectionType: TutorialSectionType | null;
  stepNumber?: number;
}

interface GroupedArticle {
  sections: TutorialSection[];
  unsectionedBlocks: BlogBlock[];
}

const getSectionType = (block: BlogBlock): TutorialSectionType | null => {
  if (block.block_type !== "heading") return null;

  const sectionType = block.configuration.section_type;

  const allowedTypes: TutorialSectionType[] = [
    "introduction",
    "step",
    "verification",
    "security",
    "common_mistakes",
    "conclusion",
  ];

  return typeof sectionType === "string" &&
    allowedTypes.includes(sectionType as TutorialSectionType)
    ? (sectionType as TutorialSectionType)
    : null;
};

const groupArticleBlocks = (blocks: BlogBlock[]): GroupedArticle => {
  const orderedBlocks = [...blocks].sort((a, b) => a.position - b.position || a.id - b.id);

  const sections: TutorialSection[] = [];
  const unsectionedBlocks: BlogBlock[] = [];

  let currentSection: TutorialSection | null = null;
  let stepNumber = 0;

  orderedBlocks.forEach((block) => {
    if (block.block_type === "heading") {
      if (currentSection) {
        sections.push(currentSection);
      }

      const sectionType = getSectionType(block);

      if (sectionType === "step") {
        stepNumber += 1;
      }

      currentSection = {
        heading: block,
        blocks: [],
        sectionType,
        stepNumber: sectionType === "step" ? stepNumber : undefined,
      };

      return;
    }

    if (currentSection) {
      currentSection.blocks.push(block);
    } else {
      unsectionedBlocks.push(block);
    }
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return { sections, unsectionedBlocks };
};

const TutorialPrerequisites = ({ requirements }: { requirements: string[] }) => {
  if (!requirements.length) return null;

  return (
    <section className="tutorial-prerequisites">
      <div className="tutorial-prerequisites-heading">
        <span className="tutorial-section-accent" />
        <div>
          <span className="tutorial-kicker">GETTING STARTED</span>
          <h2>Before you begin</h2>
        </div>
      </div>

      <p>Make sure you have the following in place before starting:</p>

      <ul>
        {requirements.map((requirement, index) => (
          <li key={`${requirement}-${index}`}>
            <span aria-hidden="true">✓</span>
            {requirement}
          </li>
        ))}
      </ul>
    </section>
  );
};

const TutorialSectionIntroduction = ({ content }: { content: string }) => {
  if (!content?.trim()) return null;

  return <p className="tutorial-section-introduction">{content}</p>;
};

const StepByStepTutorialTemplate = ({ article }: StepByStepTutorialTemplateProps) => {
  const { sections, unsectionedBlocks } = groupArticleBlocks(article.blocks);

  const introduction = sections.find((section) => section.sectionType === "introduction");

  const implementationSteps = sections.filter((section) => section.sectionType === "step");

  const remainingSections = sections.filter(
    (section) => section !== introduction && section.sectionType !== "step"
  );

  const headings: ArticleHeading[] = sections.map((section) => ({
    id: `tutorial-section-${section.heading.id}`,
    title:
      section.sectionType === "step"
        ? `${section.stepNumber}. ${section.heading.title}`
        : section.heading.title || section.heading.content,
    level: 2,
  }));

  console.log("Tutorial TOC headings:", headings);

  const wordCount = article.blocks
    .map((block) => `${block.title} ${block.content}`)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const renderSectionBlocks = (blocks: BlogBlock[]) => {
    const orderedBlocks = [...blocks].sort((a, b) => a.position - b.position || a.id - b.id);

    return <ArticleBlockRenderer blocks={orderedBlocks} />;
  };

  const renderStep = (section: TutorialSection) => (
    <section
      key={section.heading.id}
      id={`tutorial-section-${section.heading.id}`}
      className="tutorial-step"
    >
      <div className="tutorial-step-heading">
        <span className="tutorial-step-number">{section.stepNumber}</span>

        <div className="tutorial-step-title">
          <span className="tutorial-kicker">IMPLEMENTATION STEP {section.stepNumber}</span>
          <h2>{section.heading.title || section.heading.content}</h2>
        </div>
      </div>

      <div className="tutorial-step-body">
        <TutorialSectionIntroduction content={section.heading.content} />
        {renderSectionBlocks(section.blocks)}
      </div>
    </section>
  );

  const renderSupportingSection = (section: TutorialSection) => {
    const sectionTitle = section.heading.title || section.heading.content;

    return (
      <section
        key={section.heading.id}
        id={`tutorial-section-${section.heading.id}`}
        className={`tutorial-supporting-section${
          section.sectionType ? ` tutorial-supporting-section--${section.sectionType}` : ""
        }`}
      >
        <div className="tutorial-supporting-heading">
          <span className="tutorial-section-accent" />
          <div>
            {section.sectionType && (
              <span className="tutorial-kicker">
                {section.sectionType === "verification"
                  ? "CHECK YOUR WORK"
                  : section.sectionType === "security"
                    ? "IMPORTANT CONSIDERATIONS"
                    : section.sectionType === "common_mistakes"
                      ? "TROUBLESHOOTING"
                      : section.sectionType === "conclusion"
                        ? "WRAPPING UP"
                        : ""}
              </span>
            )}
            <h2>{sectionTitle}</h2>
          </div>
        </div>

        <TutorialSectionIntroduction content={section.heading.content} />
        {renderSectionBlocks(section.blocks)}
      </section>
    );
  };

  return (
    <main className="step-by-step-tutorial">
      <header className="tutorial-hero">
        <div
          className={`tutorial-hero-inner${
            article.banner_image_path ? "" : " tutorial-hero-inner--text-only"
          }`}
        >
          <div className="tutorial-hero-copy">
            <div className="tutorial-eyebrow">
              <span className="tutorial-eyebrow-line" />
              STEP-BY-STEP TUTORIAL
            </div>

            <h1>{article.article_title}</h1>

            <p className="tutorial-overview">{article.article_overview}</p>

            <div className="tutorial-hero-meta">
              <span>{readingTime} min read</span>
              <span className="tutorial-meta-dot">·</span>
              <span>{wordCount.toLocaleString()} words</span>
            </div>

            <ArticleCategories categories={article.category} />
          </div>

          {article.banner_image_path && (
            <div className="tutorial-hero-media">
              <img src={article.banner_image_path} alt={article.article_title} />
            </div>
          )}
        </div>
      </header>

      <div className="tutorial-page-container">
        <div className="tutorial-reading-layout">
          <aside className="tutorial-sidebar">
            <div className="tutorial-sidebar-inner">
              <ArticleTableOfContents headings={headings} />
            </div>
          </aside>

          <article className="tutorial-content">
            {unsectionedBlocks.length > 0 && (
              <div className="tutorial-unsectioned-content">
                {renderSectionBlocks(unsectionedBlocks)}
              </div>
            )}

            {introduction && (
              <section
                id={`tutorial-section-${introduction.heading.id}`}
                className="tutorial-introduction"
              >
                <div className="tutorial-introduction-card">
                  <span className="tutorial-introduction-icon">
                    <span aria-hidden="true">✦</span>
                  </span>

                  <div>
                    <h2>{introduction.heading.title || introduction.heading.content}</h2>
                    <TutorialSectionIntroduction content={introduction.heading.content} />
                  </div>
                </div>

                {renderSectionBlocks(introduction.blocks)}
              </section>
            )}

            <TutorialPrerequisites requirements={article.requirements} />

            <div className="tutorial-implementation">{implementationSteps.map(renderStep)}</div>

            <div className="tutorial-supporting-content">
              {remainingSections.map(renderSupportingSection)}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default StepByStepTutorialTemplate;
