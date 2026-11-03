import React, { FunctionComponent } from "react";
import { Link } from "react-router";
// Redux imports

// Typescript imports
import { ResumeDataInterface } from "../../utils/types";
// Icon helper function imported
import getIcon from "../../helperFunctions/getIcon";

// Material UI and bootstrap Components import
import { Typography } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

// Custom components import
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import WorkExperienceLink from "./WorkExperienceLink";

// css imports
import "./WorkExperience.css";

const WorkExperience: FunctionComponent<{
  work_experiences: ResumeDataInterface["work_experiences"];
}> = ({ work_experiences: work_experiences }) => {
  return (
    <CustomTimeline title="Work Experience" icon={getIcon("WorkIcon")}>
      {work_experiences.map((experience) => (
        <TimelineItem key={experience.id}>
          <CustomTimelineSeparator />
          <TimelineContent className="timeline_content">
            <WorkExperienceLink
              id={experience.id}
              title={experience.title}
              date={experience.date}
            />

            <Typography variant="body2" className="timeline_description">
              {experience.description}
            </Typography>
            <div className="timeline_links">
              {experience.office_job ? (
                <Typography variant="body2" className="timeline_links-typography">
                  <a href={experience.work_url} target="_blank" rel="noreferrer">
                    Work Site
                  </a>
                </Typography>
              ) : (
                <div className="buttons-div">
                  <Typography variant="body2" className="timeline_links-typography">
                    <a href={experience.deployed_url} target="_blank" rel="noreferrer">
                      Live Site
                    </a>
                  </Typography>
                  <Typography variant="body2" className="timeline_links-typography">
                    <a href={experience.github_url} target="_blank" rel="noreferrer">
                      {" "}
                      Codes on Git
                    </a>
                  </Typography>
                </div>
              )}
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </CustomTimeline>
  );
};

export default WorkExperience;
