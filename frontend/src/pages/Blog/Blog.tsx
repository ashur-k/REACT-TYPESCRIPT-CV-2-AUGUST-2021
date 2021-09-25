import { Grid, Paper } from '@material-ui/core';
import React from 'react';


const Blog = () => {
  
  return (
  
      <Grid container spacing={1}>  
        <Grid container item xs={12} spacing={1}>

          <Grid item xs={2} >
            <Paper>item</Paper>
          </Grid>

          <Grid item xs={2} >
            <Paper>item</Paper>
          </Grid>

          <Grid item xs={2} >
            <Paper>item</Paper>
          </Grid>

          <Grid item xs={2} >
            <Paper>item</Paper>
          </Grid>
        </Grid> 
        </Grid>
  
  )
}

export default Blog

