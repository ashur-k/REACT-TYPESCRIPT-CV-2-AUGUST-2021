import { Box, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import BlogNavbar from '../../components/BlogNavbar/BlogNavbar';

import { Category } from './data';
import './Blog.css'
import { BlogCard } from '../../components/BlogCards/BlogCards';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { blogList } from '../../redux/actions/blogActions';
import { Blog as BlogInterface } from './data'

// Custom components import
const Blog = () => {
  const dispatch = useDispatch()
  const {error, loading, blogData} = useTypedSelector((state) => state.blogList);

   // React UseEffects
   useEffect(() => {
    dispatch(blogList())
  }, [dispatch]);



  const [blogs, setBlogs] = useState<BlogInterface | any>([]);
  const [active, setActive] = useState("all");

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

export default Blog;