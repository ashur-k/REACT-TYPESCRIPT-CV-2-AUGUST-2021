import { ActionType } from '../constants/clientInformationConstants';
import { Action } from '../interfaces/clientInformationInterface';

import { ClientInformationInterface } from '../../utils/types'


interface ClientInformationReducerInterface {
  loading: boolean;
  error: string | null;
  clientInfo: ClientInformationInterface[];
};

const initialState = {
  loading: false,
  error: null,
  clientInfo: [],
};

export const ClientInfoReducer = (
  state: ClientInformationReducerInterface = initialState,
  action: Action):ClientInformationReducerInterface => {
    switch (action.type) {
      
      case ActionType.CLIENT_INFORMATION_REQUEST:
        return { loading: true, error: null, clientInfo: [] };
      
      case ActionType.CLIENT_INFORMATION_SUCCESS:
        return { loading: false, error: null, clientInfo:action.payload};
      
      case ActionType.CLIENT_INFORMATION_FAIL:
        return { loading:false, error: action.payload, clientInfo: []}
    }
  }