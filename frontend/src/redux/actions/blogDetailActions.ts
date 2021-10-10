import axios from 'axios';
import { Dispatch } from 'redux';
import { BlogDetailsActionType } from '../constants/blogDetailConstants';
import { BlogDetailAction } from '../interfaces/BlogDetailInterface';

export const blogDetail = (id:Number) => {

  return async (dispatch: Dispatch<BlogDetailAction>) => {
    dispatch({
      type: BlogDetailsActionType.BLOG_DETAIL_REQUEST
    });
    try {
      const { data } = await axios.get(`/api/blog/${id}`)
      dispatch({
        type: BlogDetailsActionType.BLOG_DETAIL_SUCCESS,
        payload: data
      })
    } catch (error){
      dispatch({
        type: BlogDetailsActionType.BLOG_DETAIL_ERROR,
        payload: error.message
      })
    }
  }
}
