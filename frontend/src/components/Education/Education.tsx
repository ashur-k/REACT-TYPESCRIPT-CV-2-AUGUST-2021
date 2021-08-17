import React, { FunctionComponent } from 'react';

// Typescript imports
import { ResumeDataInterface } from '../../utils/types';
// import { education } from '../../utils/types';

// Icon helper function imported
import  getIcon  from '../../helperFunctions/getIcon';

// Material UI and bootstrap Components import
import { Typography } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// Custom components import
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';

// css imports
import './Education.css'


const Education:FunctionComponent<{
  education_details:ResumeDataInterface["education_details"];
}> = ({education_details}) => {
  return (
    <CustomTimeline 
      title='Education'
      icon={getIcon('SchoolRoundedIcon')}
      >
      {education_details.map((edu) => (
        <TimelineItem key={edu.id}>
          <CustomTimelineSeparator />
          <TimelineContent className='timeline_content'>
            <Typography className="timeline_title">
              <span>{edu.title}</span> 
              <span> from </span> 
              <span>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Check out Institute Link</Tooltip>}
              >         
                <a href={edu.institute_link} className="education_link" target="_black" rel="noreferrer">
                    {edu.institute_name}                 
                </a>
              </OverlayTrigger>
              </span>                              
            </Typography>
            <Typography variant='caption' className="timeline_date">{edu.date}</Typography>
            <Typography variant='body2' className="timeline_description">{edu.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </CustomTimeline>
  )
}

export default Education
