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

export type Category = "react" | "nextjs" | "typescript" | "flask" | "django" | "mongo" | "main-projects" ;



export interface ProjectInterface {
  id:number;
  title: string;
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
    title: 'RR-Cloth',   
    image_path: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',    
    deployed_url: "https://rr-cloth.herokuapp.com/",
    github_url: "https://github.com/ashur-k/RR-Clothes",
    category: ['react'], 
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"]
  },
  {
    id:2,
    title: 'Pro-Shop',  
    image_path: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',    
    deployed_url: "https://rr-cloth.herokuapp.com/",
    github_url: "https://github.com/ashur-k/RR-Clothes",
    category: ['typescript'], 
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"],
  },
  {
    id:3,
    title: "Ash-Crown-Online Shopping",
    image_path: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',
    deployed_url: "https://rr-cloth.herokuapp.com/",
    github_url: "https://github.com/ashur-k/RR-Clothes",
    category: ['typescript'], 
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"],
  },
  {
    id:4,
    title: "Jaxx Productions",
    image_path: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',
    deployed_url: "https://jacxx-productions.herokuapp.com/",
    github_url: "https://github.com/ashur-k/E-Commerce-AND-Video-Subscription",
    category: ["django"],
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"],
  },
  {
    id:5,
    title: "Jaxx Productions",
    image_path: 'https://images.unsplash.com/photo-1573496130141-209d200cebd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',
    deployed_url: "https://jacxx-productions.herokuapp.com/",
    github_url: "https://github.com/ashur-k/E-Commerce-AND-Video-Subscription",
    category: ["django"],
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"]
  },
  {
    id:6,
    title: "Jaxx Productions",
    image_path: 'https://images.unsplash.com/photo-1573167710701-35950a41e251?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.',
    deployed_url: "https://jacxx-productions.herokuapp.com/",
    github_url: "https://github.com/ashur-k/E-Commerce-AND-Video-Subscription",
    category: ["django"],
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"],
  },

]


