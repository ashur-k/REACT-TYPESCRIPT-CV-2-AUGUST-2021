import React from 'react';
import { Grid, Icon, Paper, Typography } from '@material-ui/core'

import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { TextField } from '@material-ui/core';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../../components/Button/Button';
import { experiences, education, services, skills } from '../../utils/resumeData';
import  getIcon  from '../../helperFunctions/getIcon';
import './Resume.css';

const Resume = () => {

  return (
    <div>
      {/* About Me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className="aboutme_text">
            Full Stack Web Developer, qualified with a Diploma in Software 
            Development from Code Institute (CI) and software 
            engineering degree from Pakistan institute of management science 
            and technology (PIMSAT). Strong understanding of object-oriented 
            programming and more than two years experience of web-development. 
            I am developing my skills set to be a great asset for my employer.
          </Typography>
        </Grid>
      </Grid>

      {/* Expreience and Education */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline 
              title='Work Experience'
              icon={getIcon('WorkIcon')}
              >
              {experiences.map((experience) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className='timeline_content'>
                    <Typography className="timeline_title">{experience.title}</Typography>
                    <Typography variant='caption' className="timeline_date">{experience.date}</Typography>
                    <Typography variant='body2' className="timeline_description">{experience.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline 
                title='Education'
                icon={getIcon('SchoolRoundedIcon')}
                >
                {education.map((edu) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className="timeline_title">{edu.title}</Typography>
                      <Typography variant='caption' className="timeline_date">{edu.date}</Typography>
                      <Typography variant='body2' className="timeline_description">{edu.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
                </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className='section_title_text'>My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>

          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3}>
              <div className="service">
                <Icon className="service_icon">
                  {getIcon(service.icon)}
                </Icon>
                <Typography className="service_title" variant='h6'>
                  {service.title}
                </Typography>
                <Typography className="service_description" variant='body2'>
                  {service.description}
                </Typography>
              </div>
            </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid 
        container
        justify='space-between' 
        className="section graybg pb_45 p_50"
      >
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3} >
                <Paper elevation={0} className='skill'>
                  <Typography variant='h6' className="skills_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant='body2' className='skill_description'>
                      <TimelineDot variant='outlined' className='timeline_dot'/>{element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid container className="section pt_45 pb_45">
      {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className='section_title_text'>Contct Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='name' label='Name'  />
                </Grid>
                <Grid item xs={12}  sm={6}>
                  <TextField fullWidth name='email' label='Email'  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth name='message' label='Message' multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text='submit' icon='' />
                </Grid>
              </Grid>
            </Grid>
            
          </Grid>   
        </Grid>
      {/* Contact Information */}
      <Grid item xs={12} lg={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className="contactInfo_item">
              <span>Address</span>My address
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography className="contactInfo_item">
              <span>Phone</span>My phone
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="contactInfo_item">
              <span>Email</span>My email
            </Typography>
          </Grid>
        </Grid>
        
      </Grid>
    </Grid>
    </div>
  )
}

export default Resume
