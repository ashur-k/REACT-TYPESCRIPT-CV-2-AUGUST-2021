import { BlogDetailAction } from "../interfaces/BlogDetailInterface";
import { BlogDetailsActionType } from "../constants/blogDetailConstants";

import { Blog } from '../../pages/Blog/data'

interface BlogDetailReducerInterface{
  loading: boolean;
  error: string | null;
  data: Blog[];
};

const initialState = {
  loading: false,
  error: null,
  data:[],
};


export const blogDetailReducer = (
    state: BlogDetailReducerInterface = initialState,
    action: BlogDetailAction):BlogDetailReducerInterface => {
  switch (action.type){
    case BlogDetailsActionType.BLOG_DETAIL_REQUEST:
      return { loading: true, error: null, data: [] };
    case BlogDetailsActionType.BLOG_DETAIL_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case BlogDetailsActionType.BLOG_DETAIL_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }

};