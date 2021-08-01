import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { SvgIconTypeMap } from '@material-ui/core';


export interface profileInfo {
  name: string;
  title: string;
  DOB: string;
  email: string;
  address: string;
  phone: string;

  socials: {
    Facebook: {
      link:string;
      text:string;
      icon: any
    }
    Twitter: {
      link:string;
      text:string;
      icon: any
    }
    LinkedIn: {
      link:string;
      text:string;
      icon: any
    }
    GitHub: {
      link:string;
      text:string;
      icon: any
    }
  }
}


export const profile: profileInfo = {
  name: 'Ashur Kanwal',
  title: 'Full-Stack-Developer',
  DOB: 'July-1983',
  email: 'ashurkanwal@yahoo.com',
  address: 'Grangemouth Scotland',
  phone: '07397325523',

  socials: {
    Facebook:{
      link: 'facebook.com',
      text: 'myFacebook',
      icon: FacebookIcon,
    },
    Twitter:{
      link: 'twitter.com',
      text: 'myTwitter',
      icon: TwitterIcon,
    },
    
    LinkedIn:{
      link: 'linkedin.com',
      text: 'myLinkeIn',
      icon: LinkedInIcon,
    },
    GitHub:{
      link: 'github.com',
      text: 'myGitHub',
      icon: GitHubIcon,
    }
  }
}

export interface socialsInterface {
  name: string;
  link: string;
  text:string;
  icon: SvgIconTypeMap;
}

export const socials: any = [
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/',
    text: 'myFacebook',
    icon: FacebookIcon,
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/',
    text: 'myTwitter',
    icon: FacebookIcon,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ashur-kanwal-37979b195/',
    text: 'myLinkedIn',
    icon: FacebookIcon,
  },
  {
    title: 'GitHub',
    link: 'https://github.com/ashur-k',
    text: 'myFacebook',
    icon: FacebookIcon,
  },
]
