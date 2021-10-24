import React, { FunctionComponent } from 'react';
// Redux imports

// Typescript imports

// Icon helper function imported
import  getIcon  from '../../helperFunctions/getIcon';

// Material UI and bootstrap Components import
import { Typography } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

// Custom components import
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';

// css imports
import './BlogRequirements.css';


const BlogRequirements:FunctionComponent<{
  requirements:[];
}> = ({ requirements }) => {
  return (       
      <CustomTimeline 
        title='Requirements'
        icon={getIcon('VscChecklist')}
        >
        {requirements?.map((requirement:any) => (
          <TimelineItem key={requirement}>
            <CustomTimelineSeparator />
            <TimelineContent className='timeline_content'>
              <Typography className="timeline_title">{requirement}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </CustomTimeline>
    
  )
}

export default BlogRequirements
