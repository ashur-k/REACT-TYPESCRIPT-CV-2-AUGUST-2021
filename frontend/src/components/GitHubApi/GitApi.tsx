import React, { useState, useEffect } from 'react'; 

import  getIcon  from '../../helperFunctions/getIcon';

// Material UI and bootstrap Components import
import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, Paper, TextField, Typography, } from '@material-ui/core';

// css imports
import './GitApi.css';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'react-bootstrap';
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
  const [name, setName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [followers, setFollowers] = useState<string>('');
  const [following, setFollowing] = useState<string>('');
  const [repos, setRepos] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');  
  const [term, setTerm] = useState<string>('ashur-k');
  
const [reposInfo, setReposInfo] = useState([]);

interface GitUserData{
  name: string;
  login: string;
  followers: string;
  following: string;
  public_repos: string;
  avatar_url: string;

}
 
  useEffect(() => {  
    async function fetchGitUsers(){ 
      try {
        const result = await axios(`https://api.github.com/users/${term}`)

        setData(result.data)
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
    const setData= ({ name, login, followers, following, public_repos, avatar_url }:GitUserData) => {
      setName(name)
      setUserName(login)
      setFollowers(followers)
      setFollowing(following)
      setRepos(public_repos)
      setAvatar(avatar_url)
    }    
  },[term]);
   
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
        <Grid 
          container 
          spacing={3} 
          direction="column"
          alignItems="center"
          justify="center"> 
          <Grid item xs={12} >
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
          <Grid item xs={12}>
            <Grid container spacing={0}>  
            <div className="repositoriesTitle"> 
            <TextField 
              label="Search"
              value={term} 
              fullWidth
              onChange={e => setTerm(e.target.value)}     
              className="searchInputField"
              
              />
              </div>

          
              <Grid container item xs={12} spacing={1}>
             
            {
              reposInfo.map((repo:any) => (  
                <Grid item xs={12} sm={12} md={6}>
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
        
        </Grid>
      </Grid>
    </div>  
  
  )
}
export default GitApi

