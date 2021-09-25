import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionType } from '../constants/userConstants';
import { Action } from '../interfaces/UserInterfaces';

//import { ProjectInterface } from '../../utils/resumeData';

export const login = (email:string, password:string) => async (dispatch:  Dispatch<Action>) => {

   try {
      dispatch({ type: ActionType.USER_LOGIN_REQUEST })
      const config = {
        headers:{
          'Content-type':'application/json'
        }
      }

      const { data } = await axios.post(
        '/api/users/login/',
        {'username':email, 'password': password},
        config,
        );
      dispatch({
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: data
      })
      localStorage.setItem('userInfo', JSON.stringify(data))

   } catch (error) {
      dispatch({
        type: ActionType.USER_LOGIN_FAIL,
        payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
      })
   }
 }
