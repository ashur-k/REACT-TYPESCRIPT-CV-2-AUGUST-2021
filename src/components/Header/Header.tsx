import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { BrowserRouter as Router, Link, NavLink, withRouter } from 'react-router-dom';

import { HomeRounded, Telegram } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CustomButton from '../Button/Button';
import './Header.css';

const Header = (props:any) => {
  
  const pathName =props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className='header_left'>
          <Nav.Link 
            as={NavLink} 
            to='/'
            className={pathName === "/" ? "header_link_active" : "header_link"}
            >
            Resume
          </Nav.Link>
          <Nav.Link 
            as={NavLink} 
            to='/portfolio'
            className={pathName === "/portfolio" ? "header_link_active" : "header_link"}
            >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          <a href='https://www.facebook.com/'><FacebookIcon/></a>
          <a href='https://twitter.com/'><TwitterIcon/></a>
          <a href='https://www.linkedin.com/in/ashur-kanwal-37979b195/'><LinkedInIcon/></a>    
          <a href='https://github.com/ashur-k'><GitHubIcon /></a>
          <CustomButton text={'Hire me'} icon={ <Telegram />} />             
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header);
