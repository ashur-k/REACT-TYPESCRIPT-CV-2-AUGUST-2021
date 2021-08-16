import React, { FunctionComponent } from 'react';
// Redux imports

// Typescript imports
import { ResumeDataInterface } from '../../utils/types';
// Icon helper function imported
import  getIcon  from '../../helperFunctions/getIcon';

// Material UI and bootstrap Components import
import { Typography } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

// Custom components import
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';

// css imports
import './WorkExpreience.css'

const WorkExpreience:FunctionComponent<{
  work_expereinces:ResumeDataInterface["work_expereinces"];
}> = ({ work_expereinces }) => {
  return (       
      <CustomTimeline 
        title='Work Experience'
        icon={getIcon('WorkIcon')}
        >
        {work_expereinces.map((experience) => (
          <TimelineItem key={experience.title}>
            <CustomTimelineSeparator />
            <TimelineContent className='timeline_content'>
              <Typography className="timeline_title">{experience.title}</Typography>
              <Typography variant='caption' className="timeline_date">{experience.date}</Typography>
              <Typography variant='body2' className="timeline_description">{experience.description}</Typography>
              <div className="timeline_links">
                <Typography variant='body2' className="timeline_links-typography">
                  <a href={experience.deployed_url} target="_black" rel="noreferrer">Live Site</a>                        
                </Typography>
                <Typography variant='body2' className="timeline_links-typography">                
                  <a href={experience.github_url} target="_black" rel="noreferrer"> Codes on Git</a>      
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </CustomTimeline>
    
  )
}

export default WorkExpreience
