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
  let className = "project-navbar-item hover:text-green";

  if (active === value) {
    className += " text-green";
  }

  return (
    <li
      className={className}
      onClick={() => handlerFilterCategory(value)}
      aria-current={active === value ? "page" : undefined}
    >
      {value === "all" ? "All" : value}
    </li>
  );
};
