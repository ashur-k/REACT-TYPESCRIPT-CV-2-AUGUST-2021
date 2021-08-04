import { Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import { projects, ProjectsInterface  } from '../../utils/resumeData'
import './Portfolio.css';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import  getIcon  from '../../helperFunctions/getIcon';

const Portfolio = () => {

  const [tabValue, setTabValue] = useState ("All");
  const [projectDialog, setProjectDialog] = useState<null|ProjectsInterface>(null);
  const [showDialog, setShowDialog] = useState(false);


  return (
    <Grid container className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>
      {/* TABS */}
      <Grid item xs={12}>
        <Tabs 
          value={tabValue} 
          indicatorColor='secondary'
          className='custom_tabs'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label='All' 
            value='All' 
            className={
              tabValue ==='All' 
              ? 'customTabs_item active' 
              : 'customTabs_item'
            }
            />
            <Tab
            label='React' 
            value='React' 
            className={
              tabValue ==='All' 
              ? 'customTabs_item active' 
              : 'customTabs_item'
            }
            />
            <Tab
            label='Python' 
            value='Python' 
            className={
              tabValue ==='All' 
              ? 'customTabs_item active' 
              : 'customTabs_item'
            }
            />
            
        </Tabs>
      </Grid>
      
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {
            projects.map((project) =>(
              <div>
                {tabValue === project.tag || tabValue === 'All' ? (
                   <Grid item>
                   <Grow in timeout={1000}>
                     <Card className='customCard' onClick={() => {setProjectDialog(project); setShowDialog(true)}}>
                       <CardActionArea>
                         <CardMedia 
                          className='customCard_image' 
                          image={project.image}
                          title={project.title}
                          />
                          <CardContent >
                            <Typography className='customCard_title'>
                              {project.tag}
                            </Typography>
                            <Typography variant='body2' className='customCard_description'>
                              {project.description}
                            </Typography> 
                          </CardContent>
                       </CardActionArea>
                     </Card>
                   </Grow>                
                 </Grid>
                ) : null}
               
              </div>
            ))
          }

        </Grid>
      </Grid>
        <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
          <DialogTitle>{projectDialog?.title}</DialogTitle>
          <img src="" alt="" />
          <DialogContent>{projectDialog?.description}</DialogContent>
          <DialogActions>
             {
               projectDialog?.links?.map((link) => {
                console.log('LINK:', link) 

                return(
                  <div>
                    <a href='#'>{getIcon('WorkIcon')}{link.hostedLink}</a>
                    <a href='#'>{getIcon('WorkIcon')}{link.GitLink}</a>
                  </div>
               )})
             }
          </DialogActions>
        </Dialog>
    </Grid>  
  )
}

export default Portfolio


