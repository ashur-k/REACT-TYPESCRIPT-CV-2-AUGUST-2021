import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import { SvgIconProps } from '@material-ui/core';

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
      icon: string
    }
    Twitter: {
      link:string;
      text:string;
      icon: string
    }
    LinkedIn: {
      link:string;
      text:string;
      icon: string
    }
    GitHub: {
      link:string;
      text:string;
      icon: string
    }
  }
}


export const profile: profileInfo = {
  name: 'Ashur Kanwal',
  title: 'Full-Stack-Developer',
  DOB: 'July',
  email: 'ashurkanwal@yahoo.com',
  address: 'Grangemouth Scotland',
  phone: '07397325523',

  socials:{
    Facebook:{
      link: 'facebook.com',
      text: 'myFacebook',
      icon: 'FacebookIcon',
    },
    Twitter:{
      link: 'twitter.com',
      text: 'myTwitter',
      icon: 'TwitterIcon',
    },
    
    LinkedIn:{
      link: 'linkedin.com',
      text: 'myLinkeIn',
      icon: 'LinkedInIcon',
    },
    GitHub:{
      link: 'github.com',
      text: 'myGitHub',
      icon: 'GitHubIcon',
    }
  }
}

export interface socialsInterface {
  title: string;
  link: string;
  text:string;
  icon: string;
}

export const socials: socialsInterface[] = [
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/',
    text: 'myFacebook',
    icon: 'FacebookIcon',
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/',
    text: 'myTwitter',
    icon: 'TwitterIcon',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ashur-kanwal-37979b195/',
    text: 'myLinkedIn',
    icon: 'LinkedInIcon',
  },
  {
    title: 'GitHub',
    link: 'https://github.com/ashur-k',
    text: 'myFacebook',
    icon: 'GitHubIcon',
  },
]

interface EducationAndExperiencesInterface {
  title: string;
  date: string;
  description: string;
}

export const experiences:EducationAndExperiencesInterface[] = [
  {
    title: 'Project 1',
    date: '2018 - present',
    description: 'Lorem Ipsum text for now'
  },
  {
    title: 'Project 2',
    date: '2017 - 2018',
    description: 'Lorem Ipsum text for now'
  },
  {
    title: 'Project 3',
    date: '2016- 2019',
    description: 'Lorem Ipsum text for now'
  },
]

export const education:EducationAndExperiencesInterface[] = [
  {
    title: 'Education 1',
    date: '2018 - present',
    description: 'Lorem Ipsum text for now'
  },
  {
    title: 'Education 2',
    date: '2017 - 2018',
    description: 'Lorem Ipsum text for now'
  },
  {
    title: 'Education 3',
    date: '2016- 2019',
    description: 'Lorem Ipsum text for now'
  },
]

interface servicesInterface {
  title: string;
  description: string;
  icon: string;
}

export const services: servicesInterface[] = [
  {
    title: 'Web Dev',
    description: 'Lorem Ipsume',
    icon: 'WebOutlinedIcon',
  },
  {
    title: 'Web Dev2',
    description: 'Lorem Ipsume',
    icon: 'AddIcCallIcon',
  },
  {
    title: 'Web De3',
    description: 'Lorem Ipsume',
    icon: 'AndroidIcon',
  }, 
]


export interface SkillInterface {
  title: string;
  description: string[];
}
export const skills: SkillInterface[] = [
  {
    title: "FrontEnd",
    description: [
      "ReactJs",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "Material UI"
    ]
      ,
  },
  {
    title: "Backend",
    description: [
      "Python",
      "Flask",
      "Django",
    ],
  },
  {
    title: "Database",
    description: [
      "SQL",
      "Postgres-sql",
      "Firebase",
    ],
  },
  {
    title: "Source Control",
    description: [
      "GitHub"
    ],
  },
];

export interface ProjectsInterface {
  tag: string;
  image: string;
  title: string;
  description: string;
  links:[
    {
      hostedLink:string;
      GitLink:string;
    },
  ];
}


export const projects:ProjectsInterface[] = [
  {
    tag: 'React',
    image: '../assets/images/ash.jpg',
    title: 'Project React',
    description: 'Lorem Ipsum Lorem Ipsum Lorem',    
    links: [      
      {
        hostedLink:'site.com',
        GitLink:'site.com'
      }, 
    ],
  },
  {
    tag: 'Python',
    image: '../assets/images/ash.jpg',
    title: 'Project 2',
    description: 'Lorem Ipsum Lorem Ipsum Lorem',
    links: [      
      {
        hostedLink:'site.com',
        GitLink:'site.com'
      }, 

    ],
  },
  {
    tag: 'Java',
    image: '../assets/images/ash.jpg',
    title: 'Project 3',
    description: 'Lorem Ipsum Lorem Ipsum Lorem',
    links: [      
      {
        hostedLink:'site.com',
        GitLink:'site.com'
      }, 
    ],
  },
  {
    tag: 'Python',
    image: '../assets/images/ash.jpg',
    title: 'Project 4',
    description: 'Lorem Ipsum Lorem Ipsum Lorem',
    links: [      
      {
        hostedLink:'site.com',
        GitLink:'site.com'
      }, 
    ],
  },
]
