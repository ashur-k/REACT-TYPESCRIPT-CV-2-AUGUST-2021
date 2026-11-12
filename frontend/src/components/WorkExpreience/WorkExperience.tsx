import React, { FunctionComponent, useState } from "react";
import { ResumeDataInterface } from "../../utils/types";
import getIcon from "../../helperFunctions/getIcon";

import { Typography } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import WorkExperienceLink from "./WorkExperienceLink";

import "./WorkExperience.css";

const WorkExperience: FunctionComponent<{
  work_experiences: ResumeDataInterface["work_experiences"];
}> = ({ work_experiences }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    setExpandedItems((previous) =>
      previous.includes(id) ? previous.filter((itemId) => itemId !== id) : [...previous, id]
    );
  };

  return (
    <CustomTimeline title="Work Experience" icon={getIcon("WorkIcon")}>
      {work_experiences.map((experience) => {
        const expanded = expandedItems.includes(experience.id);

        // Preserve paragraph separation supplied by the backend.
        const paragraphs = (experience.description ?? "")
          .trim()
          .split(/\n\s*\n/)
          .filter((paragraph) => paragraph.trim());

        const canExpand = paragraphs.join(" ").length > 100;

        return (
          <TimelineItem key={experience.id}>
            <CustomTimelineSeparator />

            <TimelineContent className="timeline_content">
              <WorkExperienceLink
                id={experience.id}
                title={experience.title}
                date={experience.date}
              />

              <div
                className={`timeline_description-wrapper ${expanded ? "expanded" : "collapsed"}`}
              >
                <div
                  className="timeline_description-content"
                  onClick={() => canExpand && toggleExpanded(experience.id)}
                  role={canExpand ? "button" : undefined}
                  tabIndex={canExpand ? 0 : undefined}
                  onKeyDown={(event) => {
                    if (canExpand && (event.key === "Enter" || event.key === " ")) {
                      event.preventDefault();
                      toggleExpanded(experience.id);
                    }
                  }}
                  aria-expanded={canExpand ? expanded : undefined}
                >
                  {paragraphs.length > 0 ? (
                    paragraphs.map((paragraph, index) => (
                      <Typography key={index} variant="body2" className="timeline_description">
                        {paragraph.trim()}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body2" className="timeline_description">
                      No description available.
                    </Typography>
                  )}
                </div>

                {canExpand && (
                  <button
                    type="button"
                    className="timeline-read-more"
                    onClick={() => toggleExpanded(experience.id)}
                    aria-expanded={expanded}
                  >
                    {expanded ? "Read less ..." : "Read more ..."}
                  </button>
                )}
              </div>

              <div className="timeline_links">
                {experience.office_job ? (
                  experience.work_url && (
                    <Typography variant="body2" className="timeline_links-typography">
                      <a href={experience.work_url} target="_blank" rel="noreferrer">
                        Work Site
                      </a>
                    </Typography>
                  )
                ) : (
                  <div className="buttons-div">
                    {experience.deployed_url && (
                      <Typography variant="body2" className="timeline_links-typography">
                        <a href={experience.deployed_url} target="_blank" rel="noreferrer">
                          Live Site
                        </a>
                      </Typography>
                    )}

                    {experience.github_url && (
                      <Typography variant="body2" className="timeline_links-typography">
                        <a href={experience.github_url} target="_blank" rel="noreferrer">
                          Codes on Git
                        </a>
                      </Typography>
                    )}
                  </div>
                )}
              </div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </CustomTimeline>
  );
};

export default WorkExperience;
