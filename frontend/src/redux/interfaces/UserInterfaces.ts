import { ActionType } from '../constants/userConstants';
import { ProjectInterface } from '../../utils/types';

interface UserLoginRequest {
  type: ActionType.USER_LOGIN_REQUEST;
}
interface UserLoginSuccess {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: any;
}
interface UserLoginFail {
  type: ActionType.USER_LOGIN_FAIL;
  payload: string;
}
interface UserLogout {
  type: ActionType.USER_LOGOUT;
  payload: string;
}

export type Action = 
  | UserLoginRequest 
  | UserLoginSuccess 
  | UserLoginFail
  | UserLogout