export interface BlogPresentation {
  id: number;
  template:
    | "technical_article"
    | "engineering_deep_dive"
    | "step_by_step_tutorial"
    | "engineering_case_study"
    | "developer_notes";
  configuration: Record<string, unknown>;
}

export interface BlogBlock {
  id: number;
  block_type:
    | "heading"
    | "paragraph"
    | "image"
    | "code"
    | "terminal"
    | "quote"
    | "callout"
    | "table"
    | "divider"
    | "reading_links";
  position: number;
  title: string;
  content: string;
  image: string | null;
  configuration: Record<string, unknown>;
}

export interface BlogArticle {
  id: number;
  article_title: string;
  article_overview: string;
  banner_image_path: string;
  category: string[];
  requirements: string[];
  presentation: BlogPresentation;
  blocks: BlogBlock[];
}
