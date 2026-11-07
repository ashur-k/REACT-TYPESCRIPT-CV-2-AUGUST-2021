import type { BlogArticle } from "../../redux/interfaces/BlogArticleInterface";

import TechnicalArticleTemplate from "./TechnicalArticle/TechnicalArticleTemplate";
import EngineeringDeepDiveTemplate from "./Engineering/EngineeringDeepDiveTemplate";
import StepByStepTutorialTemplate from "./StepByStepTutorial/StepByStepTutorialTemplate";
import EngineeringCaseStudyTemplate from "./EngineeringCaseStudy/EngineeringCaseStudyTemplate";
import DeveloperNotesTemplate from "./DeveloperNotes/DeveloperNotesTemplate";

interface ArticleTemplateRendererProps {
  article: BlogArticle;
}

const ArticleTemplateRenderer = ({ article }: ArticleTemplateRendererProps) => {
  switch (article.presentation.template) {
    case "technical_article":
      return <TechnicalArticleTemplate article={article} />;

    case "engineering_deep_dive":
      return <EngineeringDeepDiveTemplate article={article} />;

    case "step_by_step_tutorial":
      return <StepByStepTutorialTemplate article={article} />;
    case "engineering_case_study":
      return <EngineeringCaseStudyTemplate article={article} />;
    case "developer_notes":
      return <DeveloperNotesTemplate article={article} />;

    default:
      return (
        <div className="section pb_45 pt_45">
          <h2>Article template unavailable</h2>
          <p>This article uses a template that has not been implemented yet.</p>
        </div>
      );
  }
};

export default ArticleTemplateRenderer;
