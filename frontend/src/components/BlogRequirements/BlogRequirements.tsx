import React, { FunctionComponent } from "react";
// Redux imports

// Typescript imports

// Icon helper function imported
import getIcon from "../../helperFunctions/getIcon";

// Material UI and bootstrap Components import
import { Typography } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

// Custom components import
import CustomTimeline, { CustomTimelineSeparator } from "../../components/Timeline/Timeline";

// css imports
import "./BlogRequirements.css";

const BlogRequirements: FunctionComponent<{
  requirements: [];
}> = ({ requirements }) => {
  return (
    <CustomTimeline title="Requirements" icon={getIcon("VscChecklist")}>
      {requirements?.map((requirement: any) => (
        <TimelineItem key={requirement}>
          <CustomTimelineSeparator />
          <TimelineContent className="timeline_content">
            <Typography className="timeline_title">{requirement}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </CustomTimeline>
  );
};

export default BlogRequirements;
