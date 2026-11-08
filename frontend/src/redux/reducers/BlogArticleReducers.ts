import type { UnknownAction } from "redux";

import { BlogArticleActionType } from "../constants/blogArticleConstants";
import type { BlogArticle } from "../interfaces/BlogArticleInterface";
import type { BlogArticleAction } from "../interfaces/BlogArticleActionsInterface";

export interface BlogArticleState {
  loading: boolean;
  error: string | null;
  articles: BlogArticle[];
  article: BlogArticle | null;
}

const initialState: BlogArticleState = {
  loading: false,
  error: null,
  articles: [],
  article: null,
};

export const blogArticleReducer = (
  state: BlogArticleState = initialState,
  action: UnknownAction
): BlogArticleState => {
  if (!Object.values(BlogArticleActionType).includes(action.type as BlogArticleActionType)) {
    return state;
  }

  const blogAction = action as BlogArticleAction;

  switch (blogAction.type) {
    case BlogArticleActionType.BLOG_ARTICLES_REQUEST:
      return { ...state, loading: true, error: null };

    case BlogArticleActionType.BLOG_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: blogAction.payload,
      };

    case BlogArticleActionType.BLOG_ARTICLES_ERROR:
      return {
        ...state,
        loading: false,
        error: blogAction.payload,
      };

    case BlogArticleActionType.BLOG_ARTICLE_REQUEST:
      return { ...state, loading: true, error: null };

    case BlogArticleActionType.BLOG_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        article: blogAction.payload,
      };

    case BlogArticleActionType.BLOG_ARTICLE_ERROR:
      return {
        ...state,
        loading: false,
        error: blogAction.payload,
      };

    default:
      return state;
  }
};
