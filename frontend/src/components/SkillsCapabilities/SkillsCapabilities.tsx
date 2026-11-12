import React, { FunctionComponent } from "react";

// Material UI imports
import { Grid, Paper, Typography, Icon } from "@mui/material";
import TimelineDot from "@mui/lab/TimelineDot";

// Typescript imports
import { ResumeDataInterface } from "../../utils/types";
import getIcon from "../../helperFunctions/getIcon";
// CSS imports
import "./SkillsCapabilities.css";

const SkillsCapabilities: FunctionComponent<{
  skillCapabilities: ResumeDataInterface["skill_capabilities"];
}> = ({ skillCapabilities }) => {
  return (
    <Grid container className="section graybg pb_45 p_50">
      <Grid size={12}>
        <div className="skill-capabilities-grid">
          {skillCapabilities.map((skill) => (
            <Paper key={skill.id} elevation={0} className="skill-capability-card">
              <Typography className="skills_title">
                {skill.icon && <Icon className="skill-capability-icon">{getIcon(skill.icon)}</Icon>}
                <span>{skill.title}</span>
              </Typography>

              <div className="skill-capability-items">
                {skill.category.map((element) => (
                  <Typography key={element} variant="body2" className="skill_description">
                    <TimelineDot variant="outlined" className="timeline_dot" />
                    <span>{element}</span>
                  </Typography>
                ))}
              </div>
            </Paper>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default SkillsCapabilities;
