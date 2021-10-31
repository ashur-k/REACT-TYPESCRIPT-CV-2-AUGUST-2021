import React from 'react';

// Typescript imports
import { socials } from '../../utils/types';
import {  RouteComponentProps } from 'react-router-dom';

// Get icon helper function
import getIcon from '../../helperFunctions/getIcon';

// Material UI and bootstrap Components import
import { NavLink, withRouter } from 'react-router-dom';
import { HomeRounded, Telegram } from '@material-ui/icons';
import CustomButton from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';

// css imports
import './Header.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';

// import { logout } from '../../redux/actions/userActions'
// import { useDispatch } from 'react-redux';

const Header = (props: RouteComponentProps) => {

  const pathName = props?.location?.pathname;
  // const dispatch = useDispatch();

  const userLogin =  useTypedSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  


  // const logoutHandler = () => {
  //   console.log("logging out")
  //   dispatch(logout)
  // }


  return (
    <Navbar expand="lg" sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeRounded className="SVG" />
        </Navbar.Brand>
      </Nav.Link>
      {/* Only visible on mobile devices */}
      <div className="mobile_social_icons">
        {
          socials.map((social) => (
            <a
              key={social.icon}
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >{getIcon(social.icon)}</a>
          ))}
      </div>

      <Navbar.Toggle />
      <Navbar.Collapse className="navbar_collapse">
        <Nav className='header_left'>
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName === "/" ? "header_link_active" : "header_link"}          
          >Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={pathName === "/portfolio" ? "header_link_active" : "header_link"}
          >Portfolio
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to='/blog'
            className={pathName === "/blog" ? "header_link_active" : "header_link"}
          >Blog
          </Nav.Link>
          
          {/* {userInfo ? (
            <Nav.Link 
              as={NavLink}
              to='/login'
              className={pathName === "/login" ? "header_link_active" : "header_link"}
            >Logout
          </Nav.Link>
          ):(
            <Nav.Link
              as={NavLink}
              to='/login'
              className={pathName === "/login" ? "header_link_active" : "header_link"}
            >Login
            </Nav.Link>
          )
          }  */}
          

          <Nav.Link
            as={NavLink}
            to='/GitPage'
            className={pathName === "/GitPage" ? "header_link_active" : "header_link"}
          >Git
          </Nav.Link>
        </Nav>
        {/* Only visible on desktop */}
        <div className='header_right'>
          {
            socials.map((social) => (
              <a
                key={social.icon}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="not-show-on-smaller-screen"
              >{getIcon(social.icon)}</a>
            ))}
            <a href="https://ashur-resume-site.s3.eu-west-2.amazonaws.com/AshurkanwalCV.pdf" target="_blank" rel="noreferrer">
              <CustomButton text={'Hire me'} icon={<Telegram />} />
            </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header);
