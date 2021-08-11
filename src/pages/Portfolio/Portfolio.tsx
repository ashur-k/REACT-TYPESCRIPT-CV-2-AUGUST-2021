import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {  Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Typography } from '@material-ui/core';
import { Category, ProjectInterface } from '../../utils/resumeData'

import ProjectsNavbar  from '../../components/ProjectNabar/ProjectNavbar';
import ProjectDialog from '../../components/ProjectDialog/ProjectDialog';
import { useActions } from '../../hooks/useActions';
import './Portfolio.css';

const Portfolio = () => {
  
  const { listProjects } = useActions();
  
  const {error, loading, projects} =  useTypedSelector(
    (state) => state.projectList
    );

  const [projectsData, setProjectsData] = useState(projects);
  const [active, setActive] = useState("all");


  useEffect(() => {
    listProjects()
   }, [])

 
  

  const handleFilterCategory = (category: Category | 'all') => {
    if(category === "all"){
      setProjectsData((projects))
      setActive(category);
      return;
    }
    const newArray = projects.filter((filteredProject)=> 
      filteredProject.category.includes(category)
    );
    setProjectsData(newArray);
    setActive(category);
    }
  
  // State to handel project dialog
  const [open, setOpen] = React.useState(false);
  const closeDialog = () => {
    setOpen(false);
  };

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
            {error && <h3>{error}</h3>}
            {loading && <h3>...Loading</h3>}
            {!error && !loading && projectsData.map((project) => (     
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
                            title={project.name}
                          />
                          <CardContent>
                            <Typography className='customCard_title'>
                              {project.name}
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
