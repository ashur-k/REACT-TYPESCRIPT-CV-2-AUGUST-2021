import {  Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { projects as projectData, Category  } from '../../utils/resumeData'
import './Portfolio.css';

import ProjectsNavbar  from '../../components/ProjectNabar/ProjectNavbar';
import ProjectDialog from '../../components/ProjectDialog/ProjectDialog'


const Portfolio = () => {

  const [open, setOpen] = React.useState(false);
  const closeDialog = () => {
    setOpen(false);
  };


  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState("all");

  const handleFilterCategory = (category: Category | 'all') => {
    if(category === "all"){
      setProjects((projectData))
      setActive(category);
      return;
    }
    const newArray = projectData.filter((project)=> 
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
    }

  return (
    <Grid className="section pb_45 pt_45">
      <div>
        {/* Title */}
        <Grid item className="section_title mb_20">
          <span></span>
          <h6 className="section_title_text">Portfolio</h6>
        </Grid>

        {/* Project Navbar */}
        <Grid item xs={12}>
          <ProjectsNavbar
            handlerFilterCategory={handleFilterCategory}
            active={active}
          />
        </Grid>
    
        <Grid container spacing={1}>  
          <Grid container item xs={12} spacing={1}>
            {
              projects.map((project) => (     
                <Grid key={project.id} item xs={12} sm={6}>           
                      <div>
                    <Grow in timeout={1000}>
                      <Card
                        className='customCard' 
                        onClick={() => {setOpen(true)}}
                      >
                        <CardActionArea>
                          <CardMedia 
                            className='customCard_image' 
                            image={project.image_path}
                            title={project.title}
                          />
                          <CardContent>
                            <Typography className='customCard_title'>
                              {project.title}
                            </Typography>
                            <Typography variant='body2' className='customCard_description'>
                              {project.description}
                            </Typography> 
                          </CardContent>
                        </CardActionArea>
                      </Card>                                         
                    </Grow>
                    <ProjectDialog projectDialog={project} open={open} onClose={closeDialog} />
                    </div>                  
                </Grid>
              ))}
          </Grid> 
        </Grid>      
      </div>      
    </Grid>
  )
}

export default Portfolio;


