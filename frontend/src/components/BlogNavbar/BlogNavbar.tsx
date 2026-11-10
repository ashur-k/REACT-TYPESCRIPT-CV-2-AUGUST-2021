import { FunctionComponent, useEffect, useState } from "react";

// MUI icons
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategoryFilter = (category: Category | "all") => {
    handlerFilterCategory(category);
    setIsExpanded(false);
  };

  const handlePresentationFilter = (presentation: BlogPresentationTemplate | "all") => {
    handlerFilterPresentation(presentation);
    setIsExpanded(false);
  };

  return (
    <div className="blog-navbar-sticky">
      {/* Mobile filter toggle */}
      <button
        type="button"
        className="blog-navbar-toggle"
        onClick={() => setIsExpanded((previous) => !previous)}
        aria-expanded={isExpanded}
        aria-controls="blog-navbar-content"
      >
        <FilterListRoundedIcon className="blog-filter-icon" />

        <span>Filter articles</span>

        <ExpandMoreRoundedIcon className={`blog-filter-chevron ${isExpanded ? "expanded" : ""}`} />
      </button>

      {/* Filter options */}
      <div
        id="blog-navbar-content"
        className={`blog-navbar-content ${isExpanded ? "is-expanded" : ""}`}
      >
        <ul className="blog-navbar-categories">
          <BlogtNavbarItems
            value="all"
            active={active}
            handlerFilterCategory={handleCategoryFilter}
          />

          <BlogtNavbarItems
            value="Frontend"
            active={active}
            handlerFilterCategory={handleCategoryFilter}
          />

          <BlogtNavbarItems
            value="Databases"
            active={active}
            handlerFilterCategory={handleCategoryFilter}
          />

          <BlogtNavbarItems
            value="Security"
            active={active}
            handlerFilterCategory={handleCategoryFilter}
          />

          <BlogtNavbarItems
            value="Python"
            active={active}
            handlerFilterCategory={handleCategoryFilter}
          />

          <BlogtNavbarItems
            value="Infrastructure"
            active={active}
            handlerFilterCategory={handleCategoryFilter}
          />
        </ul>

        <select
          className="blog-presentation-select"
          value={activePresentation}
          onChange={(event) =>
            handlePresentationFilter(event.target.value as BlogPresentationTemplate | "all")
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
    </div>
  );
};

export default BlogNavbar;
