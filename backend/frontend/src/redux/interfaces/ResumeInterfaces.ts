import { ActionType } from '../constants/resumeConstants';
import { ResumeDataInterface } from '../../utils/types';

interface ResumeListRequest  {
  type: ActionType.RESUME_LIST_REQUEST;
}
interface ResumeListSuccess {
  type: ActionType.RESUME_LIST_SUCCESS;
  payload: ResumeDataInterface[];
}
interface ResumeListFail {
  type: ActionType.RESUME_LIST_FAIL;
  payload: string;
}

export type Action = 
  | ResumeListRequest 
  | ResumeListSuccess 
  | ResumeListFail
