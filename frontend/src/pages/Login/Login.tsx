import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import FormContainer from '../../components/FormContainer/FormContainer';

// Typescript and data imports
import { socials } from '../../utils/types';
// Icon helper function imported
import  getIcon  from '../../helperFunctions/getIcon';

import { Grid, Typography, TextField } from '@material-ui/core';

import SiteTitle from '../../components/SiteTitle/SiteTitle';

import CustomButton from '../../components/Button/Button';

// Material UI and bootstrap Components import

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitted')
  }

  return (
    <div>
      <Grid className="section pb_45 pt_45">
        {/* Title */}
        <Grid item className="section_title mb_20">
          <span></span>
          <h6 className="section_title_text">Login Page</h6>
        </Grid>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={12}>
          {/* ###################### FORM ######################*/}
          <Grid container spacing={3}>
            <form onSubmit={submitHandler} style={{width:'100%'}}>
            <Grid item xs={12} sm={6}>              
              <TextField 
                fullWidth 
                name="email"
                value={email} 
                label="E-mail"
                type='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                name="password" 
                label="Password"
                value={password} 
                type='password'
                onChange={(e) => setPassword(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <CustomButton text="Submit" icon={getIcon('SendIcon')} />
            </Grid>
          </form>
          </Grid>
         
        </Grid>
      </Grid>
    </Grid>
    </div>
  )
}

export default Login
