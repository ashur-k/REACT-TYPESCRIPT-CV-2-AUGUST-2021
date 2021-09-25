import { ActionType } from '../constants/userConstants';
import { Action } from '../interfaces/UserInterfaces';

import { UserInterface } from '../../utils/types';

 interface UserReducerInterface {
   loading: boolean;
   error: string | null;
   user: any;
 };

 const initialState = {
  loading: false,
  error: null,
  user: [],
};

export const userLoginReducer = (
  state:UserReducerInterface = initialState, 
  action: Action):UserReducerInterface => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { loading: true, error: null, user: [] };

    case ActionType.USER_LOGIN_SUCCESS:
      return { loading: false, error: null, user: action.payload };

    case ActionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload, user: [] };
    
    case ActionType.USER_LOGOUT:
      return { loading: false, error: action.payload, user: [] };
    
    default:
      return state
}
}