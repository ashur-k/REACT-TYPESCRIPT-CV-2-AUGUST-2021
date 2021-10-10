import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { blogDetail as blogDetailAction } from '../../redux/actions/blogDetailActions'

import { Grid, Typography } from '@material-ui/core';
import { Image, ListGroup } from 'react-bootstrap';
import { blogs as blogData, Category, Blog } from '../Blog/data';
import SiteTitle from '../../components/SiteTitle/SiteTitle';

import './BlogDetail.css'
import BlogDescription from '../../components/BlogDescription/BlogDescription';
import BlogRequirements from '../../components/BlogRequirements/BlogRequirements';
import BlogSteps from '../../components/BlogSteps/BlogSteps';


// Custom components import
const BlogDetail = ({ match }: any) => {

  const dispatch = useDispatch()
  const {loading, error, data} = useTypedSelector((state) => state.blogDetail);
  
  console.log(loading, error)
  
  useEffect(() => {
    dispatch(blogDetailAction(match.params.id))
  }, [dispatch, match.params.id])

  useEffect(() => {

    data.map((blog_detail) => (
      console.log(blog_detail)
    ))
    
  }, [data])


  // const blog : any = blogData.find((blog) => blog.id === match.params.id)

  const blogs = blogData.filter((blog) =>
    blog.id.toString().includes(match.params.id)
  );


  return (
    <div>
      {
        blogs.map((blog: any) => (
          <Grid container className="section pb_45 pt_45">
            <SiteTitle title={blog.article_title} />

            <Grid item xs={12}>
              <Image src={blog.banner_image_path} fluid />
            </Grid>
            {/* */}
            <Grid container className="section pb_45">
              <Grid item xs={12}>
                <Grid container className='resume_timeline'>
                  {/*   */}
                  <Grid item sm={12} md={6}>
                    <BlogDescription article_overview={blog.article_overview} />
                  </Grid>
                  {/* */}
                  <Grid item sm={12} md={6}>
                    <BlogRequirements requirements={blog.requirements} />
                  </Grid>
                </Grid>


                <Grid item xs={12}>
                  <BlogSteps blog_sections={blog.blog_sections} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
    </div>

    // <Grid className="section pb_45 pt_45">
    //   {/* Title */}
    //   <Grid item className="section_title mb_20">
    //     <span></span>
    //     <h6 className="section_title_text">Blogs Detail</h6>
    //   </Grid>  
    //   <div>
    //   {
    //         blogs.map((blog:any) => (  

    //           <Grid container spacing={2}>
    //             <Grid className="blog-title-grid" item xs={12}>
    //               <h5>{blog.article_title}</h5>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <Image src={blog.banner_image_path} fluid />
    //             </Grid>
    //             <Grid container>

    //               <Grid item xs={6} >
    //                 <Grid item className="section_title mb_20">
    //                   <span></span>
    //                   <h6 className="section_title_text">Description</h6>
    //                 </Grid>  

    //               </Grid>
    //               <Grid item xs={6}>
    //                 <Grid item className="section_title mb_20">
    //                   <span></span>
    //                   <h6 className="section_title_text">Requirements</h6>
    //                 </Grid>  

    //                 {
    //                   blog.requirements.map((item:any) => (
    //                     <Grid key={item} item xs={6} >
    //                       <ListGroup className="requirements-list">
    //                           <ListGroup.Item>{item}</ListGroup.Item>                      
    //                       </ListGroup>
    //                     </Grid> 
    //                   ))
    //                 }
    //               </Grid>

    //             </Grid>
    //             <Grid item xs={12}>
    //               <Grid item xs={6} >

    //               </Grid>                   
    //             </Grid>                    
    //         </Grid>
    //         )
    //         )}

    //   </div>
    // </Grid>
  )
}

export default BlogDetail;