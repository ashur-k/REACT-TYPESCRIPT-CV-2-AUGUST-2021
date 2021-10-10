import { BlogAction } from "../interfaces/BlogInterfaces";
import { BlogActionType } from "../constants/blogConstants";

import { Blog } from '../../pages/Blog/data'

interface BlogReducerInterface{
  loading: boolean;
  error: string | null;
  blogData: Blog[];
};

const initialState = {
  loading: false,
  error: null,
  blogData: [],
};


export const blogListReducer = (
  state: BlogReducerInterface = initialState,
  action: BlogAction):BlogReducerInterface => {
  switch (action.type){
    case BlogActionType.BLOG_LIST_REQUEST:
      return { loading: true, error: null, blogData: [] };
    case BlogActionType.BLOG_LIST_SUCCESS:
      return { loading: false, error: null, blogData: action.payload };
    case BlogActionType.BLOG_LIST_ERROR:
      return { loading: false, error: action.payload, blogData: [] };
    default:
      return state;
  }

};


