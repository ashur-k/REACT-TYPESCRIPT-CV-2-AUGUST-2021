import React from 'react';
import { Grid, Icon, Paper, Typography } from '@material-ui/core'

import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import TimelineDot from '@material-ui/lab/TimelineDot';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import { experiences, education, services, skills } from '../../utils/resumeData';
import  getIcon  from '../../helperFunctions/getIcon';
import './Resume.css';
import { Card, CardGroup } from 'react-bootstrap';

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
                <TimelineItem key={experience.title}>
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
                  <TimelineItem key={edu.title}>
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
          <h6 className='section_title_text'>My Skills</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>

          {services.map((service) => (
            <Grid key={service.title} item sm={12} md={4}>
             
                <CardGroup>
                  <Card>
                  <div className="service">                    
                    <Icon className="service_icon" style={{margin:'12px', paddingBottom:"50px"}}>
                      {getIcon(service.icon)}
                    </Icon>
                    <Card.Body>
                      <Card.Title>
                        <Typography className="service_title" variant='h6'>
                          {service.title}
                        </Typography>
                      </Card.Title>
                      <Card.Text>
                      <Typography className="service_description" variant='body2'>
                        {service.description}
                      </Typography>
                      </Card.Text>
                    </Card.Body>
                    </div>
                  </Card>
                </CardGroup>
               
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
              <Grid key={skill.title} item xs={12} sm={6} md={3} >
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
    </div>
  )
}

export default Resume
