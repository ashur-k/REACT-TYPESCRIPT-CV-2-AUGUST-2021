import { ActionType } from  '../constants/resumeConstants';
import { Action } from '../interfaces/ResumeInterfaces';

import { ResumeDataInterface } from '../../utils/types'

interface ResumeReducerInterface {
  loading: boolean;
  error: string | null;
  aboutme: ResumeDataInterface[];
};

const initialState = {
  loading: false,
  error: null,
  aboutme: [],
};

export const resumeListReducer = (
  state:ResumeReducerInterface = initialState, 
  action:Action):ResumeReducerInterface => {
  switch(action.type){
    case ActionType.RESUME_LIST_REQUEST:
      return {loading:true, error: null, aboutme: [] }
    case ActionType.RESUME_LIST_SUCCESS:
      return {loading:false, error: null, aboutme: action.payload }
    case ActionType.RESUME_LIST_FAIL:
      return {loading:false, error: action.payload, aboutme: []}
    default:
      return state
  }
}
