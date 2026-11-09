import React from "react";

// Typescript imports
import { profile, socials } from "../../utils/types";

// Material UI and bootstrap Components import
import { Typography } from "@mui/material";
import CustomTimeLine, { CustomTimelineSeparator } from "../Timeline/Timeline";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";
import { CV_DOWNLOAD_URL } from "../../utils/cv";

// css and Images imports
import profileImage from "../../assets/images/ash.jpg";

import "./profile.css";

interface customTimelinechildren {
  title: string;
  text: string;
  link: string | null;
}

// Custom timeline copmponent to show socail icons in sidebar section
const CustomTimelineItem = ({ title, text, link }: customTimelinechildren) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent>
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{profile.name}</Typography>
        <Typography className="title">{profile.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={profileImage} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeLine title={""} icon={<ImageSearchIcon className="SVG" />}>
          <CustomTimelineItem title="Mobile" text="0739-732-5523" link="" />
          <CustomTimelineItem title="Email" text={profile.email} link="" />
          <CustomTimelineItem title="Address" text="Falkirk Scotland" link="" />
          {socials.map((social) => (
            <CustomTimelineItem
              key={social.title}
              title={social.title}
              text={social.text}
              link={social.link}
            />
          ))}
        </CustomTimeLine>
        <div className="button-container">
          <a href={CV_DOWNLOAD_URL}>
            <CustomButton text="Download CV" icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
