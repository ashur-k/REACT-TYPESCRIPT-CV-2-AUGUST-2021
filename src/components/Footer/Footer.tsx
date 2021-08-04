import { Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">Ashur Kanwal</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Coded by {" "}
          <Copyright/>
          <a href="/">ashurkanwal@yahoo.com</a>
          <br />
          <a  href='/'>Ashur Kanwal 2021 Resume Site.</a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer
