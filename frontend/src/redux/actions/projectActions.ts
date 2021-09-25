import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionType } from '../constants/projectConstants';

import { Action } from '../interfaces/interfaces';
//import { ProjectInterface } from '../../utils/resumeData';

export const listProjects = () => async (dispatch:  Dispatch<Action>) => {

   try {
      dispatch({ type: ActionType.PROJECT_LIST_REQUEST })

      const { data } = await axios.get('/api/projects/');

      dispatch({
        type: ActionType.PROJECT_LIST_SUCCESS,
        payload: data
      })

   } catch (error) {
      dispatch({
        type: ActionType.PROJECT_LIST_FAIL,
        payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
      })
   }
 }
