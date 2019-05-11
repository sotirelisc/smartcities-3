import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import ideaReducer from './ideaReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  projects: projectReducer,
  ideas: ideaReducer
});
