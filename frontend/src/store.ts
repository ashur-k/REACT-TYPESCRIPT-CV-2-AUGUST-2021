import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { projectListReducer } from './redux/reducers/projectReducers';
import { resumeListReducer } from './redux/reducers/resumeReducers'

const reducers = combineReducers({
  projectList: projectListReducer,
  resumeList: resumeListReducer,
});

export type RootState = ReturnType<typeof reducers>;

const initialState = {};
const middleware = [thunk]

const store = createStore(reducers, initialState,
   composeWithDevTools(applyMiddleware(...middleware )));

  
export default store

