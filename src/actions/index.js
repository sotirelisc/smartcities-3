import projects from '../apis/projects';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECT
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createProject = formValues => async (dispatch, getState) => {
  const response = await projects.post('/projects', {
    ...formValues,
    author: 'Dimos Kavalas'
  });

  dispatch({
    type: CREATE_PROJECT,
    payload: response.data
  });

  history.push('/');
};

export const fetchProjects = () => async dispatch => {
  const response = await projects.get('/projects');

  dispatch({
    type: FETCH_PROJECTS,
    payload: response.data
  });
};

export const fetchProject = id => async dispatch => {
  const response = await projects.get(`/projects/${id}`);

  dispatch({
    type: FETCH_PROJECT,
    payload: response.data
  });
};