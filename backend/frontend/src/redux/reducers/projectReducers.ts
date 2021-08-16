import { ActionType } from '../constants/projectConstants';
import { Action } from '../interfaces/interfaces';

import { ProjectInterface } from '../../utils/types'

 interface ProjectReducerInterface {
   loading: boolean;
   error: string | null;
   projects: ProjectInterface[];
 };

 const initialState = {
  loading: false,
  error: null,
  projects: [],
};

export const projectListReducer = (
  state:ProjectReducerInterface = initialState, 
  action: Action):ProjectReducerInterface  => {
  switch (action.type) {
    case ActionType.PROJECT_LIST_REQUEST:
      return { loading: true, error: null, projects: [] };

    case ActionType.PROJECT_LIST_SUCCESS:
      return { loading: false, error: null, projects: action.payload };

    case ActionType.PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload, projects: [] };
    
    default:
      return state
}
}