import React, { useState, useEffect } from 'react';

// Redux imports
import { useDispatch } from 'react-redux';
import { blogList } from '../../redux/actions/blogActions';

// Typescript imports
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Blog as BlogInterface, Category } from './data';

// Material UI and bootstrap Components import
import { Box, Grid } from '@material-ui/core';
import { Alert, Spinner } from 'react-bootstrap';

// Custom components import
import BlogNavbar from '../../components/BlogNavbar/BlogNavbar';
import { BlogCard } from '../../components/BlogCards/BlogCards';

// css imports
import './Blog.css'


const Blog = () => {

  const dispatch = useDispatch()
  const {error, loading, blogData} = useTypedSelector((state) => state.blogList);

  // USE STATE VARIABLES
  const [blogs, setBlogs] = useState<BlogInterface | any>([]);
  const [active, setActive] = useState("all");

  // useEddect to dispatch URL to get that data from database
  // All redux functionality begins here
   useEffect(() => {
    dispatch(blogList())
    document.title = "Ash's Blogs"
  }, [dispatch]);

  // useEffect for waiting and then loading 
  // blogs into blogs use state variable
  useEffect(() => {
    setBlogs(blogData)
  }, [blogData]);
 

  // Filtering sytem for Project Navbar
  const handleFilterCategory = (category: Category | 'all') => {
    if (category === "all") {
      setBlogs(blogData)
      setActive(category);
      return;
    }
    const newArray = blogData.filter((blog) =>
      blog.category.includes(category)
    );

    setBlogs(newArray);
    setActive(category);
  }

  return (
    <div>
      {
        loading ? (
          <Grid container className="section pb_45 pt_45">
            <Spinner animation="border" variant="danger" />
          </Grid>
        ) : error ? (
        <Grid container className="section pb_45 pt_45">
          <Alert variant='danger'>
            {error} 
          </Alert>
        </Grid>
        ) : (
          <Grid className="section pb_45 pt_45">
          {/* Title */}
          <Grid item className="section_title mb_20">
            <span></span>
            <h6 className="section_title_text">Blogs</h6>
          </Grid>
          {/* Project Navbar */}
          <Grid item xs={12}>
            <BlogNavbar
              handlerFilterCategory={handleFilterCategory}
              active={active}
            />
          </Grid>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={1}>
              {
                blogs.map((blog:any) => (              
                  <Grid container item xs={6} spacing={1}>
                    <Box m={1} >
                      <BlogCard 
                        blogId={blog.id}
                        blogTitle={blog.article_title} 
                        blogOverview={blog.article_overview}
                        blogImagePath={blog.banner_image_path}/>
                    </Box>  
                  </Grid>                          
                )
                )}
            </Grid>
          </Grid>
        </Grid>
        )
      }
    </div>
  )
}

export default Blog;