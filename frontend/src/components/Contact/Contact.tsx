import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/useActions";

// Typescript and data imports
import { socials } from "../../utils/types";
// Icon helper function imported
import getIcon from "../../helperFunctions/getIcon";

import { Grid, Typography, TextField } from "@mui/material";

import SiteTitle from "../../components/SiteTitle/SiteTitle";

import CustomButton from "../../components/Button/Button";

import { ClientInformation } from "../../redux/actions/clientInformationAction";

// @ts-ignore CSS files are loaded by the bundler and have no TypeScript declarations.
import "./Contact.css";

const Contact = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [response, setResponse] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(ClientInformation(name, email, message));
    setName("");
    setEmail("");
    setMessage("");
    setResponse("Thanks for you message I will reach back to you shortly.");
  };

  return (
    <Grid container className="section pb_45 pt_45">
      <Grid container spacing={3} size={12}>
        {/* Contact Form */}
        <Grid
          size={{
            xs: 12,
            lg: 8,
          }}
        >
          <Grid container>
            <SiteTitle title="Contact Form" />
            <Grid size={12}>
              {response && <span className="contactMessageResponse">{response}</span>}
              <form onSubmit={submitHandler}>
                <Grid container spacing={3}>
                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                    }}
                  >
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                    }}
                  >
                    <TextField
                      fullWidth
                      name="email"
                      label="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Your Message"
                      multiline
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>
                  <Grid size={12}>
                    <CustomButton text="Submit" icon={getIcon("SendIcon")} />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          size={{
            xs: 12,
            lg: 4,
          }}
        >
          <Grid container>
            <SiteTitle title="Contact Information" />
            <Grid container spacing={2}>
              <Grid size={12}>
                <Typography className="ContactInfo_items">
                  <span>Address:</span> Falkirk Scotland
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography className="ContactInfo_items">
                  <span>Phone:</span> 0739-732-5523
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography className="ContactInfo_items">
                  <span>Email:</span> ashurkanwal@yahoo.com
                </Typography>
              </Grid>
              <Grid size={12}>
                <Grid container>
                  {socials.map((social) => (
                    <Grid key={social.title} className="contactSocail-icons">
                      <a href={social.link} target="_blank" rel="noreferrer">
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
  );
};

export default Contact;
