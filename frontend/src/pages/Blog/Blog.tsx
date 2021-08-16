import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


const Blog = () => {

  const classes = useStyles();


  return (
    <div className={classes.root}>
  
      <Grid container spacing={1}>  
        <Grid container item xs={12} spacing={1}>

          <Grid item xs={3} sm={6} md={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>

          <Grid item xs={3} sm={6} md={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>

          <Grid item xs={3} sm={6} md={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>

          <Grid item xs={3} sm={6} md={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>

        </Grid> 
        </Grid>
    
    </div>
  )
}

export default Blog

