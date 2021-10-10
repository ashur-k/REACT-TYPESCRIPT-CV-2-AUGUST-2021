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
      title: string;
      paragraph:string;
      image_path:string;
    }
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
    requirements: ["Beginners Knowledege", "VS-Code", "Node Package Manager", "Python 3", "PIP-3"],
    "blog_sections": [
      {
        "id": 1,
        "title": "STEP 1: Testing if you are all set",
        "paragraph": "Open Vs Code and then your terminal: run python3 --version, npm --version, npx --version pip --version",
        "image_path": "/images/versions_check.png",
      },
    ],
  },
];
