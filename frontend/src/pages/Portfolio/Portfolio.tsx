import React, { useState, useEffect } from 'react';
// Redux imports
import { useDispatch } from 'react-redux';
import { listProjects } from '../../redux/actions/projectActions';

// Typescript imports
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Category, ProjectInterface } from '../../utils/types';

// Material UI and bootstrap Components import
import {  Card, CardActionArea, CardContent, Grid, Grow, Typography } from '@material-ui/core';
import { Alert, Image, Spinner } from 'react-bootstrap';

// Custom components import
import ProjectsNavbar  from '../../components/ProjectNabar/ProjectNavbar';
import ProjectDialog from '../../components/ProjectDialog/ProjectDialog';

// css imports
import './Portfolio.css';


const Portfolio = () => {
  const dispatch = useDispatch();
   
  const {error, loading, projects} =  useTypedSelector(
      (state) => state.projectList
    );
  const [projectsData, setProjectsData] = useState<ProjectInterface[]>([]);  

  const [projectDialog, setProjectDialog] = useState<null|ProjectInterface>(null);
  const [active, setActive] = useState("all");

  // UseEffect to dispatch listProjects action
  useEffect(() => {
    dispatch(listProjects())
    document.title = "Ash's Portfolio"
  },[dispatch]);

  // UseEffect to update data to ProjectsData
  useEffect(() => {     
    setProjectsData(projects)
  },[projects]);

  // Filtering sytem for Project Navbar
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
  
  // State to handle project dialog
  const [open, setOpen] = React.useState(false);
  const closeDialog = () => {
    setOpen(false);
  };
  
  return (
    <div>
      {
        loading ? (
          <Grid container className="section pb_45 pt_45">
            <Spinner animation="border" variant="danger" />
          </Grid>
        ) 
        : error ? (
          <Grid container className="section pb_45 pt_45">
          <Alert variant='danger'>
            {error} 
          </Alert>
        </Grid>
        ) : (
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
              {projectsData.map((project) => (     
                  <Grid key={project.id} item xs={12} sm={6}>           
                        <div>
                      <Grow in timeout={1000}>
                        <Card
                          className='customCard' 
                          onClick={() => {setProjectDialog(project); setOpen(true)}}
                        >
                          <CardActionArea>
                            <Image src={project.image} rounded thumbnail alt={project.name} /> 
                            <CardContent>
                              <Typography className='customCard_title'>
                                {project.name}
                                {project.image}
                              </Typography>
                              <Typography variant='body2' className='customCard_description'>
                                {project.description}
                              </Typography> 
                            </CardContent>
                          </CardActionArea>
                        </Card>                                         
                      </Grow>
                      
                      </div>                  
                  </Grid>
                ))}              
            </Grid> 
          </Grid>      
        </div>   
        <ProjectDialog projectDialog={projectDialog} open={open} onClose={closeDialog} />   
      </Grid>
        )
      }
    </div>
  )
}

export default Portfolio;
