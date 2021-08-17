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
    text: 'myGitHub',
    icon: 'GitHubIcon',
  },
]

interface ExperiencesInterface {
  title: string;
  date: string;
  description: string;
  gitLink:string;
  hostLink: string;
}

export const experiences:ExperiencesInterface[] = [
  {
    title: 'Kirk Of the Holy Rood',
    date: 'Jan-2021 - April-2021',
    description: 'Python django application, admin can manage all content including adding removing ministry section pages',
    gitLink:"www.github.com",
    hostLink:"www.github.com",
  },
  {
    title: 'RR-Clothes',
    date: 'Sept-2020 - Dec-2020',
    description: 'Python django E-commerce shopping site sells product including color size variants.',
    gitLink:"www.github.com",
    hostLink:"www.github.com",
  },
  {
    title: 'Car Sales Showroom',
    date: 'May-2020 - August-2020',
    description: 'Python flask appicaition built to manage and book car test drives.',
    gitLink:"www.github.com",
    hostLink:"www.github.com",
  },
  {
    title: 'Covid App',
    date: 'Jan-2020 - April-2020',
    description: 'International Rapid Covid API data where user can see covid stats of all countries.',
    gitLink:"www.github.com",
    hostLink:"www.github.com",
  },
]

interface EducationInterface {
  title: string;
  instituteName:string;
  instituteLink:string;
  date: string;
  description: string; 
}

export const education:EducationInterface[] = [
  {
    title: 'Full-Stack Web developer',
    instituteName: 'Code Institute',
    instituteLink:'link',
    date: 'Dec-2019 - -Dec-2020',
    description: 'Full-Stack Web developer'
  },
  {
    title: 'Bachelors Degree',
    instituteName: 'PIMSAT',
    instituteLink:'link',
    date: '2017 - 2018',
    description: 'Lorem Ipsum text for now'
  },
  {
    title: 'First Line Manager Diploma',
    instituteName: 'River Side College',
    instituteLink:'https://www.stockton.ac.uk/',
    date: '2017 - 2018',
    description: 'Management is the best I love management'
  },
  {
    title: 'Computer Itq Graphics',
    instituteName: 'River Side College',
    instituteLink:'link',
    date: '2016- 2019',
    description: 'Adobe Suits and adobe suites'
  },
  {
    title: 'Performing Arts In Music',
    instituteName: 'River Side College',
    instituteLink:'link',
    date: '2016- 2019',
    description: 'Performing art singing, dancing, and acting.'
  },
]

interface SkillsInterface {
  title: string;
  description: string;
  icon: string;
}

export const skills: SkillsInterface[] = [
  {
    title: 'React Skills',
    description: 'I am decent with React, I understand react fair enough. I have built react E-commerce site using react context, graphql and Redux. I have built site using next.js, Gatsby. I have beginners understading of Typescript. My current resume site is built using react typescript and all typescripts types are writen by me with my knowlwdege.',
    icon: 'IoLogoReact',
  },
  {
    title: 'Python Skills',
    description: 'I am decent with React, I understand react fair enough. I have built react E-commerce site using react context, graphql and Redux. I have built site using next.js, Gatsby. I have beginners understading of Typescript. My current resume site is built using react typescript and all typescripts types are writen by me with my knowlwdege.',
    icon: 'IoLogoPython',
  },
  {
    title: 'Database Skills',
    description: 'I am decent with React, I understand react fair enough. I have built react E-commerce site using react context, graphql and Redux. I have built site using next.js, Gatsby. I have beginners understading of Typescript. My current resume site is built using react typescript and all typescripts types are writen by me with my knowlwdege.',
    icon: 'FiDatabase',
  },
]


export interface SkillsCapabilitiesInterface {
  title: string;
  description: string[];
}

export const skillsCapabilities: SkillsCapabilitiesInterface[] = [
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



export type Category = "react" | "nextjs" | "typescript" | "flask" | "django" | "mongo" | "main-projects" ;
export interface ProjectInterface {
  id:number;
  name: string;
  image: string;
  description: string;
  deployed_url: string;
  deployed_url_icon: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export interface ResumeDataInterface {
  id: number;
  about_me: string;
  education_details: [
    {
      id: number;
      title: string;
      institute_name:string;
      institute_link:string;
      date: string;
      description: string; 
      about_me: number;
    }
  ];
  work_expereinces: [
    {
      id: number;
      title: string;
      date: string;
      description: string; 
      deployed_url:string;
      github_url:string;
      about_me: number;
    }
  ];
  skills: [
    {
      id: number;
      title: string;
      description: string; 
      icon:string;
      about_me: number;
    }
  ];
  skill_capabilities: [
    {
      id: number;
      title: string;
      category: string[]; 
      about_me: number;
    }
  ];
} 

export const resumeData: ResumeDataInterface[] = [
  {
      "id": 1,
      "about_me": "Full Stack Web Developer, qualified with a Diploma in Software Development from Code Institute (CI) and a software engineering degree from Pakistan institute of management science and technology (PIMSAT). Strong understanding of object-oriented Full Stack Web Developer, qualified with a Diploma in Software Development from Code Institute (CI) and a software engineering degree from Pakistan institute of management science and technology (PIMSAT). Strong understanding of object-oriented programming and more than two years experience of in web development. I am developing my skills set to be a great asset for my employer.d programming and more than two years experience of in web development. I am developing my skills set to be a great asset for my employer.",
      "education_details": [
          {
            "id": 1,
            "title": "Full-Stack Web developer",
            "institute_name": "Code Institute",
            "institute_link": "https://www.codeinstitute.net/",
            "date": "Dec-2019 - -Dec-2020",
            "description": "Full-Stack Web developer",
            "about_me": 1
          }
      ],
      "work_expereinces": [
        {
            "id": 1,
            "title": "Kirk Of the Holy Rood",
            "date": "Jan-2021 - April-2021",
            "description": "Python Django application, admin can manage all content including adding removing ministry section pages",
            "deployed_url": "www.github.com",
            "github_url": "www.github.com",
            "about_me": 1
        }
      ],
      "skills": [
        {
            "id": 1,
            "title": "React Skills",
            "description": "I am decent with React, I understand react fair enough. I have built react E-commerce site using react context, graphql, and Redux. I have built the site using next.js, Gatsby. I have beginner's understanding of Typescript. My current resume site is built using react typescript and all typescripts types are written by me with my knowledge.",
            "icon": "IoLogoReact",
            "about_me": 1
        }
    ],
    "skill_capabilities": [
      {
          "id": 1,
          "title": "Frontend",
          "category": [
              "ReactJs",
              "JavaScript",
              "TypeScript",
              "Bootstrap",
              "Material UI"
          ],
          "about_me": 1
      }
  ],
      
      
  },
]

