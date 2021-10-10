import { FunctionComponent } from "react";

// Typescript imports
import { Category } from '../../pages/Blog/data';

// css imports
import './BlogNavbarItems.css';


export const BlogtNavbarItems:FunctionComponent<{
  value: Category | "all"; 
  handlerFilterCategory: Function;  
  active: string;
  }> = ({value, handlerFilterCategory, active }) => {
      let className = "project-navbar-item hover:text-green";
      if (active === value) {
        className += " text-green"
      };
    return (
      <li className={className} onClick={() => handlerFilterCategory(value)}>
        {value}
      </li>
    );
  };