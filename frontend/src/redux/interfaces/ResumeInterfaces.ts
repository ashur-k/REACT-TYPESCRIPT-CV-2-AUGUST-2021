import { ActionType } from "../constants/resumeConstants";
import { ResumeDataInterface, WorkExperienceDetailInterface } from "../../utils/types";

interface ResumeListRequest {
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

interface ResumeDetailRequest {
  type: ActionType.RESUME_DETAIL_REQUEST;
}

interface ResumeDetailSuccess {
  type: ActionType.RESUME_DETAIL_SUCCESS;
  payload: WorkExperienceDetailInterface;
}

interface ResumeDetailFail {
  type: ActionType.RESUME_DETAIL_FAIL;
  payload: string;
}

export type Action =
  | ResumeListRequest
  | ResumeListSuccess
  | ResumeListFail
  | ResumeDetailRequest
  | ResumeDetailSuccess
  | ResumeDetailFail;
