import React from 'react';

// Typescript imports
import { profile, socials } from '../../utils/types';

// Material UI and bootstrap Components import
import { Typography } from '@material-ui/core'
import CustomTimeLine, { CustomTimelineSeparator } from '../Timeline/Timeline';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';

import jsPDF from 'jspdf';
// import AshurkanwalCV from '../../../public/images/AshurkanwalCV.pdf';




// css and Images imports
import profileImage from '../../assets/images/ash.jpg';
import './profile.css';
import DownloadButton from '../DownloadButton/DownloadButton';
import { Link } from 'react-router-dom';

interface customTimelinechildren {
  title: string;
  text: string;
  link: string | null;
}

// Custom timeline copmponent to show socail icons in sidebar section 
const CustomTimelineItem = ({title, text, link}: customTimelinechildren) => (
 
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent>
      {link ? (
      <Typography className="timelineItem_text">
        <span>{title}:</span>{" "}
        <a href={link} target='_blank' rel='noreferrer'>
          {text}
        </a>        
      </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}: </span>{text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {

  const downloadPDF = () => {
    // const doc = new jsPDF('portrait', 'px', 'a4', 'false');
    // doc.addImage(AshurkanwalCV)
    
    console.log('doc')
  }

  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{profile.name}</Typography>
        <Typography className='title'>{profile.title}</Typography>
      </div>

      <figure className='profile_image'>
        <img src={profileImage} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeLine title={''} icon={<ImageSearchIcon className="SVG"/>}  >
          <CustomTimelineItem title='Mobile' text='0739-732-5523' link=""/>
          <CustomTimelineItem title='Email' text={profile.email} link=""/>
          <CustomTimelineItem title='Address' text='Falkirk Scotland' link=""/>
          {
            socials.map((social) => (
              <CustomTimelineItem 
                key={social.title}
                title={social.title} 
                text={social.text} 
                link={social.link} 
              />
            ))
          }
        </CustomTimeLine>
        <div className='button-container'>
        <a href={profile.cv} target="_blank" rel="noreferrer" download>
          <CustomButton 
            text={"Download Cv"} 
            icon={< GetAppIcon />}
            />
        </a>


        </div>
        
      </div>
    </div>
  )
}

export default Profile
