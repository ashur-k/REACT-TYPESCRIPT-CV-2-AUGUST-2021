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

interface EducationAndInterface {
  title: string;
  instituteName:string;
  instituteLink:string;
  date: string;
  description: string;
 
}

export const education:EducationAndInterface[] = [
  {
    title: 'Full-Stack Web developer',
    instituteName: 'Code Institute',
    instituteLink:'link',
    date: 'Dec-2019 - -Dec-2020',
    description: 'Full-Stack Web developer'
  },
  {
    title: 'Bachelors Degree',
    instituteName: 'Code Institute',
    instituteLink:'link',
    date: '2017 - 2018',
    description: 'Lorem Ipsum text for now'
  },
  {
    title: 'First Line Manager Diploma',
    instituteName: 'Code Institute',
    instituteLink:'link',
    date: '2017 - 2018',
    description: 'Management is the best I love management'
  },
  {
    title: 'Computer Itq Graphics',
    instituteName: 'Code Institute',
    instituteLink:'link',
    date: '2016- 2019',
    description: 'Adobe Suits and adobe suites'
  },
  {
    title: 'Performing Arts In Music',
    instituteName: 'Code Institute',
    instituteLink:'link',
    date: '2016- 2019',
    description: 'Performing art singing, dancing, and acting.'
  },
]

interface servicesInterface {
  title: string;
  description: string;
  icon: string;
}

export const services: servicesInterface[] = [
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

export type Category = "react" | "nextjs" | "typescript" | "flask" | "django" | "mongo" | "main-projects" ;



export interface ProjectInterface {
  id:number;
  name: string;
  image_path: string;
  description: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}


export const projects:ProjectInterface[] = [
  {
    id:1,
    name: 'RR-Cloth',   
    image_path: '/images/RR-cloth.png',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',    
    deployed_url: "https://rr-cloth.herokuapp.com/",
    github_url: "https://github.com/ashur-k/RR-Clothes",
    category: ['react'], 
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"]
  },
  {
    id:2,
    name: 'Pro-Shop',  
    image_path: '/images/pro-shop.jpg',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',    
    deployed_url: "https://rr-cloth.herokuapp.com/",
    github_url: "https://github.com/ashur-k/RR-Clothes",
    category: ['typescript'], 
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"],
  },
  {
    id:3,
    name: "Ash-Crown-Online Shopping",
    image_path: '/images/crwn.jpg',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',
    deployed_url: "https://rr-cloth.herokuapp.com/",
    github_url: "https://github.com/ashur-k/RR-Clothes",
    category: ['typescript'], 
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"],
  },
  {
    id:4,
    name: "Jaxx Productions",
    image_path: '/images/jaxx.jpg',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',
    deployed_url: "https://jacxx-productions.herokuapp.com/",
    github_url: "https://github.com/ashur-k/E-Commerce-AND-Video-Subscription",
    category: ["django"],
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"],
  },
  {
    id:5,
    name: "Monster Rolodex",
    image_path: '/images/rolodex.jpg',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',
    deployed_url: "https://jacxx-productions.herokuapp.com/",
    github_url: "https://github.com/ashur-k/E-Commerce-AND-Video-Subscription",
    category: ["django"],
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"]
  },
  {
    id:6,
    name: "Covid Pandemic",
    image_path: '/images/covid.png',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',
    deployed_url: "https://jacxx-productions.herokuapp.com/",
    github_url: "https://github.com/ashur-k/E-Commerce-AND-Video-Subscription",
    category: ["django"],
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"],
  },

]


