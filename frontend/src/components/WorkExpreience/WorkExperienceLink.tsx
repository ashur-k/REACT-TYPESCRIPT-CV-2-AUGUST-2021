import React, { FunctionComponent } from "react";
import { Link } from "react-router";
import { Typography } from "@mui/material";

// import "./WorkExperienceLink.css";

interface WorkExperienceLinkProps {
  id: number;
  title: string;
  date: string;
}

const WorkExperienceLink: FunctionComponent<WorkExperienceLinkProps> = ({ id, title, date }) => {
  return (
    <Link to={`/work-experience/${id}`} className="work-experience-link">
      <div className="work-experience-link-content">
        <div>
          <Typography className="timeline_title">{title}</Typography>

          <Typography variant="caption" className="timeline_date">
            {date}
          </Typography>
        </div>

        <span className="work-experience-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
    </Link>
  );
};

export default WorkExperienceLink;
