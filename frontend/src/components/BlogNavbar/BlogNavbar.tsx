import { FunctionComponent } from "react";

// Typescript imports
import { BlogPresentationTemplate, Category } from "../../pages/Blog/data";

// Custom components import
import { BlogtNavbarItems } from "../BlogNavbarItem/BlogNavbarItems";

// CSS imports
import "./BlogNavbar.css";

interface BlogNavbarProps {
  active: Category | "all";
  handlerFilterCategory: (category: Category | "all") => void;
  activePresentation: BlogPresentationTemplate | "all";
  handlerFilterPresentation: (presentation: BlogPresentationTemplate | "all") => void;
}

const presentationOptions: {
  value: BlogPresentationTemplate | "all";
  label: string;
}[] = [
  { value: "all", label: "All presentations" },
  { value: "technical_article", label: "Technical Article" },
  { value: "engineering_deep_dive", label: "Engineering Deep Dive" },
  { value: "step_by_step_tutorial", label: "Step-by-Step Tutorial" },
  { value: "engineering_case_study", label: "Engineering Case Study" },
  { value: "developer_notes", label: "Developer Notes" },
  { value: "legacy", label: "Legacy Blog" },
];

const BlogNavbar: FunctionComponent<BlogNavbarProps> = ({
  active,
  handlerFilterCategory,
  activePresentation,
  handlerFilterPresentation,
}) => {
  return (
    <div className="blog-navbar-main">
      <ul className="blog-navbar-categories">
        <BlogtNavbarItems
          value="all"
          active={active}
          handlerFilterCategory={handlerFilterCategory}
        />

        <BlogtNavbarItems
          value="react"
          active={active}
          handlerFilterCategory={handlerFilterCategory}
        />

        <BlogtNavbarItems
          value="mongo"
          active={active}
          handlerFilterCategory={handlerFilterCategory}
        />

        <BlogtNavbarItems
          value="django"
          active={active}
          handlerFilterCategory={handlerFilterCategory}
        />
      </ul>

      <select
        className="blog-presentation-select"
        value={activePresentation}
        onChange={(event) =>
          handlerFilterPresentation(event.target.value as BlogPresentationTemplate | "all")
        }
        aria-label="Filter blogs by presentation"
      >
        {presentationOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BlogNavbar;
