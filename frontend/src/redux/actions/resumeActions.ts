import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../interfaces/ResumeInterfaces";
import getErrorMessage from "../../helperFunctions/getErrorMessage";
import { ActionType } from "../constants/resumeConstants";
import { WorkExperienceDetailInterface } from "../../utils/types";

export const listAboutme = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: ActionType.RESUME_LIST_REQUEST });
    const { data } = await axios.get("/api/about_me/");

    dispatch({
      type: ActionType.RESUME_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.RESUME_LIST_FAIL,
      payload: getErrorMessage(error),
    });
  }
};

export const getWorkExperienceDetail = (id: string) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: ActionType.RESUME_DETAIL_REQUEST });

    const { data } = await axios.get<WorkExperienceDetailInterface>(`/api/work-experiences/${id}/`);

    dispatch({
      type: ActionType.RESUME_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.RESUME_DETAIL_FAIL,
      payload: getErrorMessage(error),
    });
  }
};
