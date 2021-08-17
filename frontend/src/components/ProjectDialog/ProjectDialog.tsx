import React, { FunctionComponent } from 'react';

// Typescript imports
import { ProjectInterface  } from '../../utils/types';

// Get icon helper function
import  getIcon  from '../../helperFunctions/getIcon';

// Material UI components import
import { Grid, Icon, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Image } from 'react-bootstrap';
// Custom components import
import CustomButton from '../Button/Button'

// css imports
import './ProjectDialog.css';

const ProjectDialog:FunctionComponent<{
  projectDialog: null | ProjectInterface;
  open: boolean;
  onClose:(val: boolean) => void;
}> = ({ projectDialog, open, onClose } ) => {

  return (
    <Dialog 
      className="projectDialog" 
      fullWidth 
      open={open} 
      onClose={() => onClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      
      <p className="dialogClose_button"  onClick={() => onClose(false)}>
        <Icon>{getIcon('CloseIcon')}</Icon>
      </p>      

      <DialogTitle className="projectDialog_title" id="alert-dialog-title">{projectDialog?.name}</DialogTitle>
        
        <Image src={projectDialog?.image} rounded fluid alt={projectDialog?.name} />
        <DialogContent id="alert-dialog-description">
          <Typography variant="h6" className="projectDialog_description">
            Description:
          </Typography>
          <Typography variant="body2" className="projectDialog_description">
            {projectDialog?.description}
          </Typography>          
          <Typography variant="h6" className="projectDialog_description">
            Key Techs:
          </Typography>
            <div>
              <Grid container spacing={1}>  
                <Grid container item xs={12} spacing={1}>
                  {
                    projectDialog?.key_techs.map((item) => (
                      <Grid key={item} item xs={2} >
                        <Typography className="key-tech-items" variant="body2">{item}</Typography>
                      </Grid> 
                  ))
                  }
                </Grid> 
              </Grid>
            </div>
         </DialogContent>
          <DialogActions className="projectDialog_actions">
            <a href={projectDialog?.github_url} target="_blank" rel="noreferrer">
              <CustomButton 
                text="View Codes on Github" 
                icon={getIcon('GitHubIcon')}
              //</CustomButton>
              />
            </a>
            <a href={projectDialog?.github_url} target="_blank" rel="noreferrer">
              <CustomButton 
                text="View Live Hosted Site" 
                icon={getIcon(projectDialog?.deployed_url_icon)}
              //</CustomButton>
              />
            </a>
        </DialogActions>
      </Dialog>
  )
}

export default ProjectDialog
