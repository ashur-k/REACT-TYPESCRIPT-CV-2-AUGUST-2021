import { FunctionComponent } from "react";

// Custom components import
import { ProjectNavbarItems } from '../ProjectNavbarItem/ProjectNavbarItem';

// css imports
import './ProjectNavbar.css';

const ProjectsNavbar: FunctionComponent<{
    handlerFilterCategory: Function;
    active: string;
  }> = (props) => {
    return (
      <div className="Project-navbar-main">
        <ProjectNavbarItems value="all" {...props} />
        <ProjectNavbarItems value="react" {...props} />
        <ProjectNavbarItems value="mongo" {...props} />
        <ProjectNavbarItems value="django" {...props} />
        <ProjectNavbarItems value="nextjs" {...props} />
        <ProjectNavbarItems value="typescript" {...props} />
        <ProjectNavbarItems value="main-projects" {...props} />
      </div>
    );
  };

export default ProjectsNavbar;