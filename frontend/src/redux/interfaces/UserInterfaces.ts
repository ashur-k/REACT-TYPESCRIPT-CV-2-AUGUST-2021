import { ActionType } from "../constants/userConstants";

interface UserLoginRequest {
  type: ActionType.USER_LOGIN_REQUEST;
}
interface UserLoginSuccess {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: string[];
}
interface UserLoginFail {
  type: ActionType.USER_LOGIN_FAIL;
  payload: string;
}
interface UserLogout {
  type: ActionType.USER_LOGOUT;
}

export type Action = UserLoginRequest | UserLoginSuccess | UserLoginFail | UserLogout;
