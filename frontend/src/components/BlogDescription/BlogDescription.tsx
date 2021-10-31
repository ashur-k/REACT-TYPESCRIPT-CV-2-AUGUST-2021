import React, { FunctionComponent } from 'react';

// Typescript imports
// import { ResumeDataInterface } from '../../utils/types';
// import { education } from '../../utils/types';

// Icon helper function imported
import  getIcon  from '../../helperFunctions/getIcon';

// Material UI and bootstrap Components import
import { Typography } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// Custom components import
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';

// css imports
import './BlogDescription.css'


const BlogDescription:FunctionComponent<{
  article_overview:string;
}> = ({article_overview}) => {

  return (
    <CustomTimeline 
      title='Blog Overview'
      icon={getIcon('DescriptionIcon')}
      >
        <TimelineItem>
          <CustomTimelineSeparator />
          <TimelineContent className='timeline_content'>
            <Typography className="timeline_title">
              <span>{article_overview}</span>                       
            </Typography>
          </TimelineContent>
        </TimelineItem>
    </CustomTimeline>
  )
}

export default BlogDescription
