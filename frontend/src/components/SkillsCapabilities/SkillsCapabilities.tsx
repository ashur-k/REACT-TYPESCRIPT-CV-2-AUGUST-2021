import React, { FunctionComponent }  from 'react';

// Material UI and bootstrap Components import
import { Grid, Paper, Typography } from '@material-ui/core';
import {  ResumeDataInterface } from '../../utils/types';
import TimelineDot from '@material-ui/lab/TimelineDot';

// css imports
import './SkillsCapabilities.css'

const SkillsCapabilities:FunctionComponent<{
  skillCapabilities:ResumeDataInterface["skill_capabilities"];
}> = ({ skillCapabilities }) => {
  return (
    <Grid 
      container
      justifyContent='space-between' 
      className="section graybg pb_45 p_50"
    >
      <Grid item xs={12}>
        <Grid container justifyContent="space-between" spacing={3}>
          {skillCapabilities.map((skill) => (
            <Grid key={skill.id} item xs={12} sm={6} md={3} >
              <Paper elevation={0} className='skill'>
                <Typography variant='h6' className="skills_title">
                  {skill.title}
                </Typography>
                {skill.category.map((element) => (
                  <Typography key={element} variant='body2' className='skill_description'>
                    <TimelineDot variant='outlined' className='timeline_dot'/>{element}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SkillsCapabilities
