import { FunctionComponent } from "react";

// Typescript imports
import { Category } from "../../pages/Blog/data";

// CSS imports
import "./BlogNavbarItems.css";

interface BlogNavbarItemsProps {
  value: Category | "all";
  handlerFilterCategory: (category: Category | "all") => void;
  active: Category | "all";
}

export const BlogtNavbarItems: FunctionComponent<BlogNavbarItemsProps> = ({
  value,
  handlerFilterCategory,
  active,
}) => {
  const isActive = active === value;

  return (
    <li className="blog-navbar-item">
      <button
        type="button"
        className={`blog-category-button ${isActive ? "active" : ""}`}
        onClick={() => handlerFilterCategory(value)}
        aria-pressed={isActive}
      >
        {value === "all" ? "All" : value}
      </button>
    </li>
  );
};
