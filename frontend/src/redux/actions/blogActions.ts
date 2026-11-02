import axios from "axios";
import { Dispatch } from "redux";
import { BlogActionType } from "../constants/blogConstants";
import { BlogAction } from "../interfaces/BlogInterfaces";
import getErrorMessage from "../../helperFunctions/getErrorMessage";

export const blogList = () => {
  return async (dispatch: Dispatch<BlogAction>) => {
    dispatch({
      type: BlogActionType.BLOG_LIST_REQUEST,
    });
    try {
      const { data } = await axios.get("/api/blogs/");
      dispatch({
        type: BlogActionType.BLOG_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BlogActionType.BLOG_LIST_ERROR,
        payload: getErrorMessage(error),
      });
    }
  };
};
