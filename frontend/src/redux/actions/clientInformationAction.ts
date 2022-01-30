import axios from 'axios'
import { Dispatch } from 'redux'

import { ActionType } from '../constants/clientInformationConstants';
import { Action } from '../interfaces/clientInformationInterface';
import { ClientInformationInterface } from '../../utils/types'


export const ClientInformation = (name: string, email: string, message: string) => async (dispatch: Dispatch<Action>) => {
  try{
    dispatch({ type: ActionType.CLIENT_INFORMATION_REQUEST })

    const { data } = await axios.post(
      '/api/getContactInformation/',
      {'name': name, 'email': email, 'message': message}
      );

    dispatch({
      type: ActionType.CLIENT_INFORMATION_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ActionType.CLIENT_INFORMATION_FAIL,
      payload: error.response && error.response.data.detail
      ? error.reponse.data.detail
      : error.message,
    })
  }
}