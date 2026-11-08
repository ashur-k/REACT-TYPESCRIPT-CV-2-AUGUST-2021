import React, { useState, useEffect } from "react";

// Redux imports
import { useAppDispatch } from "../../hooks/useActions";
import { blogList } from "../../redux/actions/blogActions";

// Typescript imports
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BlogPresentationTemplate, Category } from "./data";

// Material UI and bootstrap Components import
import { Box, Grid } from "@mui/material";
import { Alert, Spinner } from "react-bootstrap";

// Custom components import
import BlogNavbar from "../../components/BlogNavbar/BlogNavbar";
import { BlogCard } from "../../components/BlogCards/BlogCards";

// CSS imports
import "./Blog.css";

const Blog = () => {
  const dispatch = useAppDispatch();

  const { error, loading, blogData } = useTypedSelector((state) => state.blogList);

  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const [activePresentation, setActivePresentation] = useState<BlogPresentationTemplate | "all">(
    "all"
  );

  useEffect(() => {
    dispatch(blogList());
    document.title = "Ash's Blogs";
  }, [dispatch]);

  const filteredBlogs = blogData.filter((blog) => {
    const matchesCategory = activeCategory === "all" || blog.category.includes(activeCategory);

    const matchesPresentation =
      activePresentation === "all" || blog.presentation?.template === activePresentation;

    return matchesCategory && matchesPresentation;
  });

  return (
    <div>
      {loading ? (
        <Grid container className="section pb_45 pt_45">
          <Spinner animation="border" variant="danger" />
        </Grid>
      ) : error ? (
        <Grid container className="section pb_45 pt_45">
          <Alert variant="danger">{error}</Alert>
        </Grid>
      ) : (
        <Grid className="section pb_45 pt_45">
          <Grid className="section_title mb_20">
            <span></span>
            <h6 className="section_title_text">Blogs</h6>
          </Grid>

          <Grid size={12}>
            <BlogNavbar
              active={activeCategory}
              handlerFilterCategory={setActiveCategory}
              activePresentation={activePresentation}
              handlerFilterPresentation={setActivePresentation}
            />
          </Grid>

          <Grid container spacing={1}>
            <Grid container spacing={1} size={12}>
              {filteredBlogs.map((blog) => (
                <Grid key={blog.id} size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex" }}>
                  <Box sx={{ m: 1, width: "100%", display: "flex" }}>
                    <BlogCard
                      blogId={blog.id}
                      blogTitle={blog.article_title}
                      blogOverview={blog.article_overview}
                      blogImagePath={blog.banner_image_path}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Blog;
