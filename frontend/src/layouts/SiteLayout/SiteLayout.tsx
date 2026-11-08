import { useState, type ReactNode } from "react";
import { Container, Grid } from "@mui/material";

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

  return (
    <SiteSidebarContext.Provider value={{ setArticleHeadings }}>
      <Container className="top_60">
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
            {articleHeadings ? (
              <aside className="site-sidebar-article">
                <ArticleTableOfContents headings={articleHeadings} />
              </aside>
            ) : (
              <Profile />
            )}
          </Grid>

          <Grid size="grow">
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
