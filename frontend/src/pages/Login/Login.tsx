import React, { useState } from 'react';


import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../redux/actions/userActions';


// Typescript and data imports

// Icon helper function imported
import  getIcon  from '../../helperFunctions/getIcon';

import { Grid,  TextField } from '@material-ui/core';



import CustomButton from '../../components/Button/Button';

// Material UI and bootstrap Components import

import { useTypedSelector } from '../../hooks/useTypedSelector';



export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  // const userLogin = useSelector(state => state.userLogin)
  const dispatch = useDispatch();

  const {error, loading, userInfo } =  useTypedSelector(
    (state) => state.userLogin
  );

  const objectLength = Object.keys(userInfo).length


  console.log(objectLength)
  console.log(typeof userInfo)

 
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login(email, password))
    
  }

  const logoutHandler = () => {
        dispatch(logout())
  }

  return (
    <div>
      <Grid className="section pb_45 pt_45">
        {/* Title */}
        <Grid item className="section_title mb_20">
          <span></span>
          <h6 className="section_title_text">Login Page</h6>
          {error && <p>{error}</p>}
          {loading && <h3>Loading...</h3>}
        </Grid>
        <Grid container item xs={12} spacing={3}>
        {Object.keys(userInfo).length ? (
          <div>
            <p>User Name: {userInfo?.userInfo?.name}</p>
            <p>User Email: {userInfo?.userInfo?.email}</p>
            <p>Admin Status: {userInfo?.userInfo?.isAdmin && (<span>True</span>)}</p>
            <Button variant="secondary" onClick={logoutHandler}>Logout</Button>
          </div>
        ): (
          <Grid item xs={12}>
          {/* ###################### FORM ######################*/}
          <Grid container spacing={3}>
            <form onSubmit={submitHandler} style={{width:'100%'}}>
              <Grid item xs={12} sm={6}>              
                <TextField 
                  fullWidth 
                  name="email"
                  value={email} 
                  label="E-mail"
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  name="password" 
                  label="Password"
                  value={password} 
                  type='password'
                  onChange={(e) => setPassword(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <CustomButton text="Login" icon={getIcon('SendIcon')} />
                <Button variant="secondary" onClick={logoutHandler}>Logout</Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
        ) }
       

      </Grid>
    </Grid>
    </div>
  )
}

// export default Login
