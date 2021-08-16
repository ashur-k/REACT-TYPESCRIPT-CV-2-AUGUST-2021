import { FunctionComponent } from "react";
import { Category } from '../../utils/types';
import './ProjectNavbarItem.css';

interface  PNIInterface{
  value: Category | "all"; 
  handlerFilterCategory: Function;  
  active: string;
}

export const ProjectNavbarItems:FunctionComponent<PNIInterface> = (
  { 
    value, 
    handlerFilterCategory, 
    active 
  }) => {
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