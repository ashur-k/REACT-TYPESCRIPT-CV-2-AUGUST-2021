import { Grid } from '@material-ui/core';
import React from 'react';

function Contact() {
  return (
    <Grid container className="section">
      {/* Contact Form */}
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className='section_title_text'>Contct Form</h6>
          </Grid>
        </Grid>   
      </Grid>
      {/* Contact Information */}
      <Grid item xs={12} lg={5}>

      </Grid>
    </Grid>
  )
}

export default Contact
