import { FunctionComponent } from "react";

// Typescript imports
import { Category } from '../../utils/types';

// css imports
import './ProjectNavbarItem.css';


export const ProjectNavbarItems:FunctionComponent<{
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