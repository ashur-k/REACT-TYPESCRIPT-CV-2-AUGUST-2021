import React from 'react';

// Typescript and data imports
import { socials } from '../../utils/types';
// Icon helper function imported
import  getIcon  from '../../helperFunctions/getIcon';

import { Grid, Typography, TextField } from '@material-ui/core';

import SiteTitle from '../../components/SiteTitle/SiteTitle';

import CustomButton from '../../components/Button/Button';

import './Contact.css'

const Contact = () => {
  return (
    <Grid container className="section pb_45 pt_45">
      <Grid container item xs={12} spacing={3} >
        {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <Grid container>
              <SiteTitle title='Contact Form' />
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="email" label="E-mail" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth name="message" label="Your Message" multiline rows={2} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text="Submit" icon={getIcon('SendIcon')} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Grid container>
              <SiteTitle title='Contact Information' />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className='ContactInfo_items'>
                    <span>Address:</span> Falkirk Scotland
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='ContactInfo_items'>
                    <span>Phone:</span> 0739-732-5523
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='ContactInfo_items'>
                    <span>Email:</span> ashurkanwal@yahoo.com
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                  {socials.map((social) => (
                    <Grid className="contactSocail-icons">
                      <a
                        key={social.icon}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {getIcon(social.icon)}
                      </a>
                    </Grid>
                  ))}
                  </Grid>
                </Grid>
              </Grid>              
            </Grid>
          </Grid>
      </Grid>  
    </Grid>
  )
}

export default Contact
