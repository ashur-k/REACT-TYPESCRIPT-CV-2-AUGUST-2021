import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { projectListReducer } from './redux/reducers/projectReducers';
import { resumeListReducer } from './redux/reducers/resumeReducers';
import { userLoginReducer } from './redux/reducers/userReducers';

const reducers = combineReducers({
  projectList: projectListReducer,
  resumeList: resumeListReducer,
  userLogin: userLoginReducer,
});

// const userInfoFromStorage = localStorage.getItem('userInfo') ?
//     JSON.parse(localStorage.getItem('userInfo')) : null:any

export type RootState = ReturnType<typeof reducers>;

const initialState = {
  // userLogin: { userInfo: userInfoFromStorage}
};
const middleware = [thunk]

const store = createStore(reducers, initialState,
   composeWithDevTools(applyMiddleware(...middleware )));

  
export default store

