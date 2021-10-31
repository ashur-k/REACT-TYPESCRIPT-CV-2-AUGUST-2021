import React, { FunctionComponent, useState, useEffect } from 'react';

// Typescript and data imports
// import { socials } from '../../utils/types';
// Icon helper function imported
// import  getIcon  from '../../helperFunctions/getIcon';

import { Grid, Typography } from '@material-ui/core';
import { Blog } from '../../pages/Blog/data' 
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import './BlogSteps.css';
import SiteTitle from '../SiteTitle/SiteTitle';
import { Image } from 'react-bootstrap';
import  getIcon  from '../../helperFunctions/getIcon';

const BlogSteps:FunctionComponent<{
  blog_sections:Blog["blog_sections"] | any;

}> = ({ blog_sections }) => {

   
  return (
    <div>
      {blog_sections?.map((section: any) => (
        <Grid key={section.id} container className="section pb_45 pt_45" style={{margin:'auto'}}>
            <SiteTitle title={section.title} />
        <Grid container item xs={12} spacing={3} >
          {/*  */}

          {section.blog_reading_links.length ? (
                <Grid item xs={12} md={6} style={{margin:'auto'}}>
                  <Grid container>
                    <Typography variant='body2'>
                      {section.paragraph}
                    </Typography>
                  </Grid>
                </Grid>
              ):(
                <Grid item xs={12} md={12} style={{margin:'auto'}}>
                  <Grid container>
                    <Typography variant='body2'>
                      {section.paragraph}
                    </Typography>
                  </Grid>
                </Grid>
              )}
            {
              section.blog_reading_links.length ? (

              <Grid item xs={12} md={6} >
                <Grid container>
                  <CustomTimeline 
                      title='Readings'
                      icon={getIcon('FaBookReader')}
                      >
                    {
                      section.blog_reading_links.map((link: any) => (                    
                        <TimelineItem key={link.id}>
                          <CustomTimelineSeparator />
                          <TimelineContent className='timeline_content'>
                          <a href={link.link_url} target="_blank" rel="noreferrer">
                            <Typography className="timeline_title">
                              {link.link_title}
                              </Typography>
                          </a>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    }
                  </CustomTimeline>
                </Grid>
              </Grid>
               ):
               (
                <div className="noDisplay"></div>
               )}
            <Grid item xs={12}>
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
