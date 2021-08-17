import React, { FunctionComponent } from 'react';

// Material UI and bootstrap Components import
import { Grid } from '@material-ui/core';

// css imports
import './SiteTitle.css';

const SiteTitle:FunctionComponent<{title: string}> = ({title}) => {
  return (
    <Grid item className="section_title mb_30">
      <span></span>
      <h6 className='section_title_text'>{title}</h6>
    </Grid>
  )
}

export default SiteTitle
