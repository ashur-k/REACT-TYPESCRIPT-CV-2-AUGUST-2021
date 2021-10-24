import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from '../interfaces/ResumeInterfaces';

import { ActionType } from '../constants/resumeConstants';


export const listAboutme = () => async (dispatch: Dispatch<Action>) => {
  try{
    dispatch({ type: ActionType.RESUME_LIST_REQUEST});
    const { data } = await axios.get('/api/about_me/');

    dispatch({
      type: ActionType.RESUME_LIST_SUCCESS,
      payload: data
    })

  }catch(error){
    dispatch({
      type: ActionType.RESUME_LIST_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}