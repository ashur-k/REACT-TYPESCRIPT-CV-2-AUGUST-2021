import { configureStore } from "@reduxjs/toolkit";
import type { Reducer } from "redux";

import { projectListReducer } from "./redux/reducers/projectReducers";
import { resumeListReducer } from "./redux/reducers/resumeReducers";
import { userLoginReducer } from "./redux/reducers/userReducers";
import { blogListReducer } from "./redux/reducers/BlogReducers";
import { blogDetailReducer } from "./redux/reducers/BlogDetailsReducers";
import { workExperienceDetailReducer } from "./redux/reducers/resumeReducers";

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer as Reducer<ReturnType<typeof userLoginReducer>>,
    projectList: projectListReducer as Reducer<ReturnType<typeof projectListReducer>>,
    resumeList: resumeListReducer as Reducer<ReturnType<typeof resumeListReducer>>,
    blogList: blogListReducer as Reducer<ReturnType<typeof blogListReducer>>,
    blogDetail: blogDetailReducer as Reducer<ReturnType<typeof blogDetailReducer>>,
    workExperienceDetail: workExperienceDetailReducer as Reducer<
      ReturnType<typeof workExperienceDetailReducer>
    >,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
