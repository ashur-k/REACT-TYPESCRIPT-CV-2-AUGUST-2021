import { BlogActionType } from "../constants/blogConstants";
import { Blog } from '../../pages/Blog/data'

interface BlogListRequestAction {
  type: BlogActionType.BLOG_LIST_REQUEST;
}
interface BlogListSuccessAction {
  type: BlogActionType.BLOG_LIST_SUCCESS;
  payload: Blog[];
}
interface BlogListErrorAction {
  type: BlogActionType.BLOG_LIST_ERROR;
  payload: string;
}

export type BlogAction = 
  | BlogListRequestAction 
  | BlogListSuccessAction 
  | BlogListErrorAction

