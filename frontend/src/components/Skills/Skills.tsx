import React, { FunctionComponent } from 'react';

// Typescript imports
import { ResumeDataInterface } from '../../utils/types';

// Material UI and bootstrap Components import
import { Grid } from '@material-ui/core';

// Custom components import
import { CardComponent } from '../Card/CardComponent';

// css imports
import './Skills.css'

const Skills:FunctionComponent<{
  skills:ResumeDataInterface["skills"];
}> = ({ skills }) => {
  return (
    <Grid container spacing={3} justifyContent='space-around'>
      {skills.map((skill) => (
        <Grid key={skill.id} item sm={12} md={4}>          
          <CardComponent 
            icon={skill.icon} 
            title={skill.title} 
            description={skill.description} 
          />      
        </Grid>
      ))}
  </Grid>
  )
}

export default Skills
