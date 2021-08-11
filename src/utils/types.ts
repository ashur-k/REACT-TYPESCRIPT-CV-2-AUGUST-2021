export type Category = "react" | "nextjs" | "typescript" | "flask" | "django" | "mongo" | "main-projects" ;

export interface ProjectInterface {
  id:number;
  name: string;
  image_path: string;
  description: string;
  category: Category[];
  key_techs: string[];
  deployed_url: string;
  github_url: string; 
  
}