import React from 'react';


import { Grid } from '@material-ui/core';

import SiteTitle from '../../components/SiteTitle/SiteTitle';


import GitApi from '../../components/GitHubApi/GitApi';
import './GitPage.css';

function GitPage() {

  return (
    // Contact
    <Grid container className="section pb_45 pt_45">
      <Grid container item xs={12} spacing={3} >
        {/* Git Information */}
        <Grid item xs={12} className="top_30">
          <SiteTitle title='Git Information' />
          <GitApi />
        </Grid>
      </Grid>  
    </Grid>
    
  )
}

export default GitPage