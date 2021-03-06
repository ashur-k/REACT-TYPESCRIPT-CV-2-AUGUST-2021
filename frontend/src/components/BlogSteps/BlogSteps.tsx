import React, { FunctionComponent, useState, useEffect } from 'react';

// Typescript and data imports
// import { socials } from '../../utils/types';
// Icon helper function imported
// import  getIcon  from '../../helperFunctions/getIcon';

import { Grid, Typography, Paper, Icon } from '@material-ui/core';
import { Blog } from '../../pages/Blog/data'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import './BlogSteps.css';
import SiteTitle from '../SiteTitle/SiteTitle';
import { Image } from 'react-bootstrap';
import getIcon from '../../helperFunctions/getIcon';


const BlogSteps: FunctionComponent<{
  // Declaring function props data interface
  blog_sections: Blog["blog_sections"] | any;
}> = ({ blog_sections }) => {
  console.log(blog_sections)
  return (
    <div>
      {blog_sections?.map((section: any) => (
        <Grid key={section.id} container className="section pb_45 pt_45" style={{ margin: 'auto' }}>
          <SiteTitle title={section.title} />
          <Grid container item xs={12} spacing={3} >
            {section.blog_reading_links.length ? (
              <Grid item xs={12} md={12} style={{ margin: 'auto' }}>
                <Grid container>
                  <Typography variant='body2'>
                    {section.paragraph}
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid item xs={12} md={12} style={{ margin: 'auto' }}>
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
              ) :
                (
                  <div className="noDisplay"></div>
                )}

            {
              section.blog_section_terminal_commands.length ? (

                <Grid item xs={12} md={6} >
                  <Grid container>
                    <CustomTimeline
                      title='Terminal Commands'
                      icon={getIcon('BsFillTerminalFill')}
                    >
                      {
                        section.blog_section_terminal_commands.map((command: any) => (
                          <TimelineItem key={command.id}>
                            <CustomTimelineSeparator />
                            <TimelineContent className='timeline_content'>
                                <Typography className="timeline_title">
                                  <code><pre>{command.command}</pre></code>
                                </Typography>
                             
                            </TimelineContent>
                          </TimelineItem>
                        ))
                      }
                    </CustomTimeline>
                  </Grid>
                </Grid>
              ) :
                (
                  <div className="noDisplay"></div>
                )}

            <Grid item xs={12}>
              <hr></hr>
              <Typography variant='h6'>{getIcon('MdAspectRatio')} Screen Shots</Typography>
              <hr></hr>
              <Grid container>
                <div>
                  <Image src={section.image_path} fluid />
                </div>

                 
               
                {
                  section.blog_section_images.map((image: any) => (
                    <div>
                 <hr></hr>
                      <Image src={image.image_path} fluid />
                      
                    </div>
                  ))
                }
              </Grid>
            </Grid>
            {
              section.blog_section_code_snippets.length ? (
                <Grid item xs={12}>
                  <hr></hr>
                  <Typography variant='h6'>{getIcon('BiCodeBlock')} Code Blocks</Typography>
                  <hr></hr>
                  <Grid container>
                    {
                      section.blog_section_code_snippets.map((snippet: any) => (
                        <div className="m-1">
                          <h6>{snippet.code_title}</h6>
                          <Paper elevation={3} className="code-paper-padding">
                            <code><pre>{snippet.code_snippet}</pre></code>
                          </Paper>
                        </div>
                      ))
                    }
                  </Grid>
                </Grid>
              ):
                (<div className="noDisplay"></div>)
            }
            
            
          </Grid>
        </Grid>
      ))}
    </div>
  )
}

export default BlogSteps
