import { ActionType } from '../constants/userConstants';
import { Action } from '../interfaces/UserInterfaces';


const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo') || '{}') : {};

 interface UserReducerInterface {
   loading: boolean;
   error: string | null;
   userInfo: any;
 };

 const initialState = {
  loading: false,
  error: null,
  userInfo: {userInfo: userInfoFromStorage},
};

export const userLoginReducer = (
  state:UserReducerInterface = initialState, 
  action: Action):UserReducerInterface => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { loading: true, error: null, userInfo: [] };

    case ActionType.USER_LOGIN_SUCCESS:
      return { loading: false, error: null, userInfo: action.payload };

    case ActionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload, userInfo: [] };
    
    case ActionType.USER_LOGOUT:
      return { loading: false, error: null, userInfo: [] };
    
    default:
      return state
}
}