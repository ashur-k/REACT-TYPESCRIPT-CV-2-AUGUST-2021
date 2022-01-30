import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Typescript and data imports
import { socials } from '../../utils/types';
// Icon helper function imported
import getIcon from '../../helperFunctions/getIcon';

import { Grid, Typography, TextField } from '@material-ui/core';

import SiteTitle from '../../components/SiteTitle/SiteTitle';

import CustomButton from '../../components/Button/Button';

import { ClientInformation } from '../../redux/actions/clientInformationAction'

import './Contact.css'

const Contact = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [response, setResponse] = useState('')

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(ClientInformation(name, email, message))
    setName('')
    setEmail('')
    setMessage('')
    setResponse("Thanks for you message I will reach back to you shortly.")
  }

  return (
    <Grid container className="section pb_45 pt_45">
      <Grid container item xs={12} spacing={3} >
        {/* Contact Form */}
        <Grid item xs={12} lg={8}>
          <Grid container>
            <SiteTitle title='Contact Form' />
            <Grid item xs={12}>
              {response && <span className="contactMessageResponse">{response}</span>}
              <form onSubmit={submitHandler}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Your Message"
                      multiline rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text="Submit" icon={getIcon('SendIcon')} />
                  </Grid>
                </Grid>
              </form>
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
