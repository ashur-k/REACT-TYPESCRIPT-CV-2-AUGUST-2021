import axios from "axios";
import { Dispatch } from "redux";

import { ActionType } from "../constants/projectConstants";

import { Action } from "../interfaces/interfaces";
import getErrorMessage from "../../helperFunctions/getErrorMessage";

export const listProjects = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: ActionType.PROJECT_LIST_REQUEST });

    const { data } = await axios.get("/api/projects/");

    dispatch({
      type: ActionType.PROJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.PROJECT_LIST_FAIL,
      payload: getErrorMessage(error),
    });
  }
};
