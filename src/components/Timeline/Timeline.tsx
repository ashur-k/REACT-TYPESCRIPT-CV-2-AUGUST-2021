import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import './Timeline.css'

interface timeLineProps {
  title: string;
  icon:any;
  children: any;
}


const CustomTimeline = ({ title, icon, children }: timeLineProps ) => {
  return (
      <Timeline className='timeline' >
        {/* Item Header */}
      <TimelineItem className={'timeline_firstItem'}>
        <TimelineSeparator>
          <TimelineDot className={'timeline_dot_header'}>
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className={'timeline_header'}>
          
          </Typography>
        </TimelineContent>
        {children}
      </TimelineItem>
    </Timeline>
 
  )
};

export const CustomTimelineSeparator: React.FC = () => (
  <TimelineSeparator className={'separator_padding'}>
    <TimelineDot variant={'outlined'} className={'timeline_dot'} />
    
    <TimelineConnector />
  </TimelineSeparator>
)

export default CustomTimeline
