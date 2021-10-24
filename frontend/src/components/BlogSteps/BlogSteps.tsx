import React, { FunctionComponent } from 'react';

// Typescript and data imports
import { socials } from '../../utils/types';
// Icon helper function imported
import  getIcon  from '../../helperFunctions/getIcon';

import { Grid, Typography } from '@material-ui/core';
import { Blog } from '../../pages/Blog/data' 



import './BlogSteps.css';
import SiteTitle from '../SiteTitle/SiteTitle';
import { Image } from 'react-bootstrap';

const BlogSteps:FunctionComponent<{
  blog_sections:Blog["blog_sections"];
}> = ({ blog_sections }) => {
  console.log("Coming from BLogs STEPS", blog_sections)
  
  return (
    <div>
      {blog_sections?.map((section) => (
        <Grid key={section.id} container className="section pb_45 pt_45" style={{margin:'auto'}}>
            <SiteTitle title={section.title} />
        <Grid container item xs={12} spacing={3} >
          {/*  */}
        
            <Grid item xs={12} lg={4} style={{margin:'auto'}}>
            
              <Grid container>
               
                <Typography variant='body2'>
                  {section.paragraph}
                </Typography>
              </Grid>
            </Grid>
  
            <Grid item xs={12} lg={8}>
              <Grid container>
                <Image src={section.image_path} fluid />
              </Grid>
            </Grid>
        </Grid>  
      </Grid>
      ))}
    </div>
  )
}

export default BlogSteps
