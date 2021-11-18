export interface Blog {
  id:number;
  article_title: string;
  article_overview: string;
  banner_image_path: string;
  
  category: Category[];
  requirements: string[];

  blog_sections: [
    {
      id: number;
      blog_reading_links: [
        {
          id: number;
          link_title:string;
          link_url:string;
          section_title: number;
        }
      ];
      blog_section_images: [
        {
          id: number;
          image_title:string;
          number_of_image:number;
          image_path:string;
          section_title: number;
        }
      ];
      blog_section_code_snippet: [
        {
          id: number;
          code_title:string;
          code_snippet:string;
          section_title: number;
        }
      ];
      title: string;
      paragraph:string;
      image_path:string;
      article_title: number
      
    },
    
  ];
  
}

export type Category = "react" | "JavaScript" | "flask" | "django" | "mongo" ;

export const blogs: Blog[] = [
  { 
    id:1,
    article_title: "React And Django (DRF) connectivity",
    article_overview: "To start with in development mode we are required running Django server and react server on 2 separate ports. Normally React runs at http://localhost:3000/ and django at http://localhost:8000/ ",
    banner_image_path: "/images/django-react-header.png",
    category: ["django"],
    requirements: [
      "Beginners Knowledege", 
      "VS-Code", 
      "Node Package Manager", 
      "Python 3", 
      "PIP-3"
    ],
    "blog_sections": [
      {
        "id": 1,
        "blog_reading_links": [
          {
            "id": 1,
            "link_title": "Node Reading",
            "link_url": "www.google.com",
            "section_title": 1,
          },
        ],
        "blog_section_images": [
          {
            "id": 1,
            "image_title": "Node Reading",
            "number_of_image": 3,
            "image_path": "www.com",
            "section_title": 2
          },
        ],
        "blog_section_code_snippet": [
          {
            "id": 1,
            "code_title": "Node Reading",
            "code_snippet": "www.com",
            "section_title": 2
          },
        ],
        "title": "STEP 1: Testing if you are all set",
        "paragraph": "Open Vs Code and then your terminal: run python3 --version, npm --version, npx --version pip --version",
        "image_path": "/images/versions_check.png",
        "article_title": 1
      },
    ],
  },
];

