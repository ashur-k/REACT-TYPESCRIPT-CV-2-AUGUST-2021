import { BlogDetailsActionType } from "../constants/blogDetailConstants";
import { Blog } from '../../pages/Blog/data'

interface BlogDetailRequestAction  {
  type: BlogDetailsActionType.BLOG_DETAIL_REQUEST;
}
interface BlogDetailSuccessAction {
  type: BlogDetailsActionType.BLOG_DETAIL_SUCCESS;
  payload: Blog[];
}
interface BlogDetailErrorAction {
  type: BlogDetailsActionType.BLOG_DETAIL_ERROR;
  payload: string;
}

export type BlogDetailAction = 
  | BlogDetailRequestAction 
  | BlogDetailSuccessAction 
  | BlogDetailErrorAction

