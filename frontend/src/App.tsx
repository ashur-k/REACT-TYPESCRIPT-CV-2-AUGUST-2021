import { HashRouter as Router, Routes, Route } from "react-router";

import "./App.css";
import Footer from "./components/Footer/Footer";

import Blog from "./pages/Blog/Blog";
import GitPage from "./pages/GitPage/GitPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import { Login } from "./pages/Login/Login";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import WorkExperienceDetail from "./pages/WorkExperienceDetail/WorkExperienceDetail";
import ScrollToTop from "./components/FunctionalComponents/ScrollToTop/ScrollToTop";
import Articles from "./pages/Articles/Articles";
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";
import BlogDetailResolver from "./pages/BlogDetail/BlogDetailResolver";
import SiteLayout from "./layouts/SiteLayout/SiteLayout";

import "./styles/article-tokens.css";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <SiteLayout>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail/:id" element={<BlogDetailResolver />} />
          <Route path="/GitPage" element={<GitPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Resume />} />
          <Route path="/work-experience/:id" element={<WorkExperienceDetail />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </SiteLayout>
    </Router>
  );
}

export default App;
