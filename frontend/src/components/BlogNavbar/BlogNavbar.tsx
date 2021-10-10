import { FunctionComponent } from "react";
import { BlogtNavbarItems } from "../BlogNavbarItem/BlogNavbarItems";

// Custom components import
// import { ProjectNavbarItems } from '../ProjectNavbarItem/ProjectNavbarItem';

// css imports
import './BlogNavbar.css';

const BlogNavbar: FunctionComponent<{
    handlerFilterCategory: Function;
    active: string;
  }> = (props) => {
    return (
      <div className="Project-navbar-main">
        <BlogtNavbarItems value="all" {...props} />
        <BlogtNavbarItems value="react" {...props} />
        <BlogtNavbarItems value="mongo" {...props} />
        <BlogtNavbarItems value="django" {...props} />
      </div>
    );
  };

export default BlogNavbar;