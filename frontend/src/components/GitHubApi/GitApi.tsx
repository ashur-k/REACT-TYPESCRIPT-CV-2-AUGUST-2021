import React, { useState, useEffect} from 'react';

import  getIcon  from '../../helperFunctions/getIcon';

import CustomButton from '../../components/Button/Button';

// Material UI and bootstrap Components import
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Paper, TextField, Typography, } from '@material-ui/core';

// css imports
import './GitApi.css';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Image, ListGroup } from 'react-bootstrap';
import { red } from '@material-ui/core/colors';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const GitApi = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  
  const [userInput, setUserInput] = useState('');
  const [error, seterror] = useState('');

  const [reposInfo, setReposInfo] = useState<any>([]);
  const [term, setTerm] = useState('ashur-k');

  // UseEffect to update data
  useEffect(() => {  
    async function fetchGitUsers(){ 
      try {
        const result:any = await axios(`https://api.github.com/users/${term}`)
        setData(result.data)
        console.log(result.data)
      }catch(err){
        console.log("USER Fetch ERROR:", err)
      }
    }
    async function fetchGitRepos(){
  
      try {
        const result:any = await axios(`https://api.github.com/users/${term}/repos`)
        setReposInfo(result.data)

      }catch(err){
        console.log("Repo Fetch ERROR:", err)
      }
    }  
  fetchGitUsers()
  fetchGitRepos()   
    
  },[term]);



  const setData = ({ name, login, followers, following, public_repos, avatar_url }:any) => {
    setName(name)
    setUserName(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
  }

  
  const classes = useStyles();



  return (
    <div style={{width:"100%"}}>
      <Grid item xs={12}>
        <Grid container 
          spacing={3}            
          alignItems="center"
          justifyContent="center"
          className="section"
          >       
            
        </Grid>
        <Grid container spacing={3}> 
        
          <Grid item xs={7}>
            <Grid container spacing={0}>  
            <Typography className="repositoriesTitle" variant="h6">Repositories List:
 
            <TextField 
              label="Search"
              value={term} 
              fullWidth
              onChange={e => setTerm(e.target.value)}     
              className="searchInputField"
              variant="filled"
              />
              </Typography>
          
              <Grid container item xs={12} spacing={1}>
             
            {
              reposInfo.map((repo:any) => (  
                <Grid item xs={6}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <Paper className="repoName-Paper" elevation={3} >
                    {repo.name}
                  </Paper>
                  </a>
                </Grid>
              ))
            }
              </Grid>
            </Grid>
          </Grid>
        <Grid item xs={5}>
              <Card className={classes.root}>
                  <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          {getIcon('FaGit')}
                        </Avatar>
                      }
                      title={name}
                      subheader={userName}
                    />
                    <CardActionArea>
                      <Image
                        rounded
                        thumbnail
                        src={avatar}
                        alt={name}
                      />
                      <CardContent>
                      
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Typography gutterBottom variant="body2" component="p">
                        Followers: {followers}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="p">              
                        Following: {following}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="p">
                        Repos: {repos}
                      </Typography>              
                  </CardActions>
                </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>  
  
  )
}
export default GitApi

