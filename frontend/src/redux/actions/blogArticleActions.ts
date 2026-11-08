import axios from "axios";
import type { Dispatch } from "redux";

import { BlogArticleActionType } from "../constants/blogArticleConstants";
import type { BlogArticleAction } from "../interfaces/BlogArticleActionsInterface";
import getErrorMessage from "../../helperFunctions/getErrorMessage";

export const blogArticles = () => {
  return async (dispatch: Dispatch<BlogArticleAction>) => {
    dispatch({
      type: BlogArticleActionType.BLOG_ARTICLES_REQUEST,
    });

    try {
      const { data } = await axios.get("/api/articles/");

      dispatch({
        type: BlogArticleActionType.BLOG_ARTICLES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BlogArticleActionType.BLOG_ARTICLES_ERROR,
        payload: getErrorMessage(error),
      });
    }
  };
};

export const blogArticle = (id: number) => {
  return async (dispatch: Dispatch<BlogArticleAction>) => {
    dispatch({
      type: BlogArticleActionType.BLOG_ARTICLE_REQUEST,
    });

    try {
      const { data } = await axios.get(`/api/articles/${id}/`);

      dispatch({
        type: BlogArticleActionType.BLOG_ARTICLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BlogArticleActionType.BLOG_ARTICLE_ERROR,
        payload: getErrorMessage(error),
      });
    }
  };
};
