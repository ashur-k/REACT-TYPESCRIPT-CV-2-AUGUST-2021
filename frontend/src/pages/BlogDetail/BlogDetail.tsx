import React, { useState, useEffect } from "react";

// Redux imports
import { useAppDispatch } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { blogDetail as blogDetailAction } from "../../redux/actions/blogDetailActions";

// Typescript imports
import { Blog } from "../Blog/data";

// Material UI and bootstrap Components import
import Grid from "@mui/material/Grid";
import { Alert, Image, Spinner } from "react-bootstrap";
import SiteTitle from "../../components/SiteTitle/SiteTitle";

// Custom components import
import BlogDescription from "../../components/BlogDescription/BlogDescription";
import BlogRequirements from "../../components/BlogRequirements/BlogRequirements";
import BlogSteps from "../../components/BlogSteps/BlogSteps";

// css imports
// @ts-ignore CSS is loaded by the bundler and has no TypeScript declarations.
import "./BlogDetail.css";

const BlogDetail = ({ match }: any) => {
  const dispatch = useAppDispatch();
  const { loading, error, blogDetailData } = useTypedSelector((state) => state.blogDetail);

  // USE STATE VARIABLES
  const [blogs, setBlogs] = useState<Blog | any>([]);
  const [requirements, setRequirements] = useState<Blog["requirements"] | any>([]);
  const [blogSections, setBlogSections] = useState<Blog["blog_sections"] | any>([]);

  // useEddect to dispatch URL ID to get that object from database
  // All redux functionality begins here
  useEffect(() => {
    dispatch(blogDetailAction(match.params.id));
  }, [dispatch, match.params.id]);

  // useEffect for waiting and then loading
  // blogDetailData into blogs use state variable
  useEffect(() => {
    setBlogs(blogDetailData);
    document.title = "Ash's Blogs-Details";
  }, [blogDetailData]);

  // useEffect for waiting and then loading
  // blog-sections and requiremnts into their use state variables
  useEffect(() => {
    setRequirements(blogs.requirements);
    setBlogSections(blogs.blog_sections);
  }, [blogs]);

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
        <Grid container className="section pb_45 pt_45">
          <SiteTitle title={blogs.article_title} />
          <Grid size={12}>
            <div>
              <hr></hr>
              <Image src={blogs.banner_image_path} fluid />
              <hr></hr>
            </div>
          </Grid>
          {/* */}
          <Grid container className="section pb_45">
            <Grid size={12}>
              <Grid container className="resume_timeline">
                {/*   */}
                <Grid
                  size={{
                    sm: 12,
                    md: 6
                  }}>
                  {<BlogDescription article_overview={blogs.article_overview} />}
                </Grid>
                {/* */}
                <Grid
                  size={{
                    sm: 12,
                    md: 6
                  }}>
                  {<BlogRequirements requirements={requirements} />}
                </Grid>
              </Grid>
              <Grid size={12}>
                {<BlogSteps blog_sections={blogSections} />}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default BlogDetail;
