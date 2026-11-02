import { useLocation, NavLink } from "react-router";

// Typescript imports
import { socials } from "../../utils/types";

// Get icon helper function
import getIcon from "../../helperFunctions/getIcon";

// Material UI and bootstrap Components import
import { HomeRounded, Telegram } from "@mui/icons-material";

import CustomButton from "../Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";

// css imports
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded className="SVG" />
        </Navbar.Brand>
      </Nav.Link>

      {/* Only visible on mobile devices */}
      <div className="mobile_social_icons">
        {socials.map((social) => (
          <a key={social.icon} href={social.link} target="_blank" rel="noreferrer">
            {getIcon(social.icon)}
          </a>
        ))}
      </div>

      <Navbar.Toggle />
      <Navbar.Collapse className="navbar_collapse">
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathname === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={pathname === "/portfolio" ? "header_link_active" : "header_link"}
          >
            Portfolio
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/blog"
            className={pathname === "/blog" ? "header_link_active" : "header_link"}
          >
            Blog
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/GitPage"
            className={pathname === "/GitPage" ? "header_link_active" : "header_link"}
          >
            Git
          </Nav.Link>
        </Nav>

        {/* Only visible on desktop */}
        <div className="header_right">
          {socials.map((social) => (
            <a
              key={social.icon}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="not-show-on-smaller-screen"
            >
              {getIcon(social.icon)}
            </a>
          ))}

          <a href="media/AshurkanwalCV.pdf" target="_blank" rel="noreferrer">
            <CustomButton text="Hire me" icon={<Telegram />} />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
