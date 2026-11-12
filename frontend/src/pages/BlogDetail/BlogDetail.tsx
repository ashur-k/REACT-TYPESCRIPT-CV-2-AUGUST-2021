import React, { useEffect } from "react";

// Redux imports
import { useAppDispatch } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { blogDetail as blogDetailAction } from "../../redux/actions/blogDetailActions";
import { useParams } from "react-router";

// Material UI and bootstrap Components import
import Grid from "@mui/material/Grid";
import { Alert, Image, Spinner } from "react-bootstrap";
import SiteTitle from "../../components/SiteTitle/SiteTitle";

import BlogDescription from "../../components/BlogDescription/BlogDescription";
import BlogRequirements from "../../components/BlogRequirements/BlogRequirements";
import BlogSteps from "../../components/LegacyBlogTemplate/BlogSteps/BlogSteps";

import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { loading, error, blogDetailData } = useTypedSelector((state) => state.blogDetail);

  // Read blog data directly from Redux
  const blogs = blogDetailData;
  const requirements = blogs?.requirements ?? [];
  const blogSections = blogs?.blog_sections ?? [];

  useEffect(() => {
    if (id) {
      dispatch(blogDetailAction(Number(id)));
    }
  }, [dispatch, id]);

  useEffect(() => {
    document.title = "Ash's Blogs-Details";
  }, []);

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
        <Grid container className="section pb_45 pt_45 blog-detail-page">
          <SiteTitle title={blogs?.article_title ?? ""} />

          <Grid size={12}>
            <div>
              <hr />
              <Image src={blogs?.banner_image_path} fluid />
              <hr />
            </div>
          </Grid>

          <Grid container className="blog-detail-content">
            <Grid size={12}>
              <Grid container className="resume_timeline">
                <Grid size={{ xs: 12, md: 6 }}>
                  <BlogDescription article_overview={blogs?.article_overview ?? ""} />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <BlogRequirements requirements={requirements} />
                </Grid>
              </Grid>

              <Grid size={12}>
                <BlogSteps blog_sections={blogSections} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default BlogDetail;
