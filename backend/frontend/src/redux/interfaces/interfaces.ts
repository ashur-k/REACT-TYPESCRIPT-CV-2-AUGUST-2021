import { ActionType } from '../constants/projectConstants';
import { ProjectInterface } from '../../utils/types';

interface ProjectListRequest {
  type: ActionType.PROJECT_LIST_REQUEST;
}
interface ProjectListSuccess {
  type: ActionType.PROJECT_LIST_SUCCESS;
  payload: ProjectInterface[];
}
interface ProjectListFail {
  type: ActionType.PROJECT_LIST_FAIL;
  payload: string;
}

export type Action = 
  | ProjectListRequest 
  | ProjectListSuccess 
  | ProjectListFail