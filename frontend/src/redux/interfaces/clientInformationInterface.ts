import { ActionType } from "../constants/clientInformationConstants";
import { ClientInformationInterface } from '../../utils/types';

interface ClientInformationRequest {
  type: ActionType.CLIENT_INFORMATION_REQUEST;
}

interface ClientInformationSuccess {
  type: ActionType.CLIENT_INFORMATION_SUCCESS;
  payload: ClientInformationInterface[];
}

interface ClientInformationFail {
  type: ActionType.CLIENT_INFORMATION_FAIL;
  payload: string;
}

export type Action = 
  | ClientInformationRequest
  | ClientInformationSuccess
  | ClientInformationFail