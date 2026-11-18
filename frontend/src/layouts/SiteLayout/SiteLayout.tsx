import { useState, type ReactNode } from "react";
import { Container, Grid } from "@mui/material";
import { useLocation } from "react-router";

import Profile from "../../components/Profile/Profile";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArticleTableOfContents, {
  type ArticleHeading,
} from "../../components/Article/Shared/ArticleTableOfContents";

import SiteSidebarContext from "./SiteSidebarContext";
import "./SiteLayout.css";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  const [articleHeadings, setArticleHeadings] = useState<ArticleHeading[] | null>(null);

  const location = useLocation();

  // Adjust this condition if your actual BlogDetail route differs.
  const isBlogDetailPage = /^\/blog-detail\/[^/]+\/?$/.test(location.pathname);

  return (
    <SiteSidebarContext.Provider value={{ setArticleHeadings }}>
      <Container
        maxWidth={isBlogDetailPage ? false : "lg"}
        className={`top_60 ${isBlogDetailPage ? "site-layout-container--blog-detail" : ""}`}
      >
        <Grid container spacing={3} className={isBlogDetailPage ? "site-layout-blog-detail" : ""}>
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}
            className={isBlogDetailPage ? "site-sidebar-grid" : ""}
          >
            {articleHeadings && isBlogDetailPage ? (
              <aside className="site-sidebar-article">
                <ArticleTableOfContents headings={articleHeadings} />
              </aside>
            ) : !isBlogDetailPage ? (
              <Profile />
            ) : null}
          </Grid>

          <Grid size="grow" className="site-main-grid">
            <Header />

            <div className="main-content container_shadow">{children}</div>

            <Footer />
          </Grid>
        </Grid>
      </Container>
    </SiteSidebarContext.Provider>
  );
};

export default SiteLayout;
