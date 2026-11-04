import React, { FunctionComponent } from "react";

// Typescript imports
import { ProjectInterface } from "../../utils/types";

// Get icon helper function
import getIcon from "../../helperFunctions/getIcon";

// Material UI components import
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Image } from "react-bootstrap";

// Custom components import
import CustomButton from "../Button/Button";

// CSS imports
import "./ProjectDialog.css";

const ProjectDialog: FunctionComponent<{
  projectDialog: null | ProjectInterface;
  open: boolean;
  onClose: (val: boolean) => void;
}> = ({ projectDialog, open, onClose }) => {
  return (
    <Dialog
      className="projectDialog"
      fullWidth
      open={open}
      onClose={() => onClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* Red title bar with close button */}
      <DialogTitle className="projectDialog_title" id="alert-dialog-title">
        <span className="projectDialog_heading">{projectDialog?.name}</span>

        <IconButton
          className="dialogClose_button"
          onClick={() => onClose(false)}
          aria-label="Close project dialog"
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Project image */}
      <Image
        className="projectDialog_image"
        src={projectDialog?.image}
        rounded
        fluid
        alt={projectDialog?.name}
      />

      {/* Project details */}
      <DialogContent id="alert-dialog-description">
        <Typography variant="h6" className="projectDialog_description">
          Description:
        </Typography>

        <Typography variant="body2" className="projectDialog_description">
          {projectDialog?.description}
        </Typography>

        <div className="projectDialog_technologies">
          <Typography variant="h6" className="projectDialog_description">
            Technologies Used
          </Typography>

          <div className="technology-tags">
            {projectDialog?.key_techs.map((item) => (
              <span className="technology-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>

      {/* Project action buttons */}
      <DialogActions className="projectDialog_actions">
        <a href={projectDialog?.github_url} target="_blank" rel="noreferrer">
          <CustomButton text="View Codes on Github" icon={getIcon("GitHubIcon")} />
        </a>

        <a href={projectDialog?.deployed_url} target="_blank" rel="noreferrer">
          <CustomButton
            text="View Live Hosted Site"
            icon={getIcon(projectDialog?.deployed_url_icon)}
          />
        </a>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDialog;
