import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { projectListReducer } from './redux/reducers/projectReducers';
import { resumeListReducer } from './redux/reducers/resumeReducers';
import { userLoginReducer } from './redux/reducers/userReducers';
import { blogListReducer } from './redux/reducers/BlogReducers';
import { blogDetailReducer } from './redux/reducers/BlogDetailsReducers';

const reducers = combineReducers({
  userLogin: userLoginReducer,
  projectList: projectListReducer,
  resumeList: resumeListReducer,
  blogList: blogListReducer,
  blogDetail: blogDetailReducer,
});

// const userInfoFromStorage = localStorage.getItem('userInfo') ?
//   JSON.parse(localStorage.getItem('userInfo') || '{}') : {};



export type RootState = ReturnType<typeof reducers>;

// const initialState = {
//   loading: false,
//   error: null,
//   userLogin: { userInfo: userInfoFromStorage}
//  };
const middleware = [thunk]

const store = createStore(
  reducers, 
  {},
  composeWithDevTools(applyMiddleware(...middleware )));

  
export default store

