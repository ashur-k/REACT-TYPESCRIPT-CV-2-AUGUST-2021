import { BlogDetailsActionType } from "../constants/blogDetailConstants";
import { BlogDetailAction } from "../interfaces/BlogDetailInterface";

import { Blog } from "../../pages/Blog/data";

interface BlogDetailReducerInterface {
  loading: boolean;
  error: string | null;
  blogDetailData: Blog | null;
}

const initialState: BlogDetailReducerInterface = {
  loading: false,
  error: null,
  blogDetailData: null,
};

export const blogDetailReducer = (
  state: BlogDetailReducerInterface = initialState,
  action: BlogDetailAction
): BlogDetailReducerInterface => {
  switch (action.type) {
    case BlogDetailsActionType.BLOG_DETAIL_REQUEST:
      return { loading: true, error: null, blogDetailData: null };
    case BlogDetailsActionType.BLOG_DETAIL_SUCCESS:
      return { loading: false, error: null, blogDetailData: action.payload };
    case BlogDetailsActionType.BLOG_DETAIL_ERROR:
      return { loading: false, error: action.payload, blogDetailData: null };
    default:
      return state;
  }
};
