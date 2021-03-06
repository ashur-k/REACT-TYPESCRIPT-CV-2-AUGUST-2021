import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Blog from './pages/Blog/Blog';
import GitPage from './pages/GitPage/GitPage';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import { Login } from './pages/Login/Login';
import BlogDetail from './pages/BlogDetail/BlogDetail';


function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content container_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                
                <Route path="/blog" component={Blog} />
                <Route path="/blog-detail/:id?" component={BlogDetail} />
                
                <Route path="/GitPage">
                  <GitPage />
                </Route>
                <Route path="/Login">
                  <Login />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>            
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
