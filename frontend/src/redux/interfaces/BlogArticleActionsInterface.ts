import { BlogArticleActionType } from "../constants/blogArticleConstants";
import type { BlogArticle } from "./BlogArticleInterface";

interface BlogArticlesRequestAction {
  type: BlogArticleActionType.BLOG_ARTICLES_REQUEST;
}

interface BlogArticlesSuccessAction {
  type: BlogArticleActionType.BLOG_ARTICLES_SUCCESS;
  payload: BlogArticle[];
}

interface BlogArticlesErrorAction {
  type: BlogArticleActionType.BLOG_ARTICLES_ERROR;
  payload: string;
}

interface BlogArticleRequestAction {
  type: BlogArticleActionType.BLOG_ARTICLE_REQUEST;
}

interface BlogArticleSuccessAction {
  type: BlogArticleActionType.BLOG_ARTICLE_SUCCESS;
  payload: BlogArticle;
}

interface BlogArticleErrorAction {
  type: BlogArticleActionType.BLOG_ARTICLE_ERROR;
  payload: string;
}

export type BlogArticleAction =
  | BlogArticlesRequestAction
  | BlogArticlesSuccessAction
  | BlogArticlesErrorAction
  | BlogArticleRequestAction
  | BlogArticleSuccessAction
  | BlogArticleErrorAction;
