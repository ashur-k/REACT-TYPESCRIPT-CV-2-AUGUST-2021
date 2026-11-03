import { Container, Grid } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Blog from "./pages/Blog/Blog";
import GitPage from "./pages/GitPage/GitPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import { Login } from "./pages/Login/Login";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import WorkExperienceDetail from "./pages/WorkExperienceDetail/WorkExperienceDetail";
import ScrollToTop from "./components/FunctionalComponents/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
          <Profile />
        </Grid>

        <Grid size="grow">
          <Router>
            <ScrollToTop />
            <Header />

            <div className="main-content container_shadow">
              <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-detail/:id?" element={<BlogDetail />} />
                <Route path="/GitPage" element={<GitPage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<Resume />} />
                <Route path="/work-experience/:id" element={<WorkExperienceDetail />} />
              </Routes>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
