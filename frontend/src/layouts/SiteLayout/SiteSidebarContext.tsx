import { createContext, useContext } from "react";
import type { ArticleHeading } from "../../components/Article/Shared/ArticleTableOfContents";

interface SiteSidebarContextValue {
  setArticleHeadings: (headings: ArticleHeading[] | null) => void;
}

const SiteSidebarContext = createContext<SiteSidebarContextValue | null>(null);

export const useSiteSidebar = () => {
  const context = useContext(SiteSidebarContext);

  if (!context) {
    throw new Error("useSiteSidebar must be used within SiteLayout.");
  }

  return context;
};

export default SiteSidebarContext;
