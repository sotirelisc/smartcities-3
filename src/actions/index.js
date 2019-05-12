import projects from '../apis/projects';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECT,
  UPVOTE_PROJECT,
  DOWNVOTE_PROJECT,
  CREATE_IDEA,
  FETCH_IDEAS,
  SELECT_PROJECT,
  PAY_FOR_PROJECT
} from './types';

export const payForProject = (projectId, amount) => async dispatch => {
  const response = await projects.post(`/projects/${projectId}/donate`, {
    amount: parseFloat(amount),
    user_id: '5cd7e176a48c5b8480c3dd82'
  });

  console.log(response.data);

  dispatch({
    type: PAY_FOR_PROJECT,
    payload: response.data.project
  });
};

export const selectProject = project => {
  return {
    type: SELECT_PROJECT,
    payload: project
  };
};

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

export const createProject = formValues => async dispatch => {
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

export const upvoteProject = id => async dispatch => {
  const response = await projects.get(`/projects/${id}/upvote`);

  dispatch({
    type: UPVOTE_PROJECT,
    payload: response.data
  });
};

export const downvoteProject = id => async dispatch => {
  const response = await projects.get(`/projects/${id}/downvote`);

  dispatch({
    type: DOWNVOTE_PROJECT,
    payload: response.data
  });
};

export const createIdea = formValues => async dispatch => {
  const response = await projects.post('/ideas', {
    ...formValues,
    author: 'Christos Sotirelis'
  });

  dispatch({
    type: CREATE_IDEA,
    payload: response.data
  });

  history.push('/');
};

export const fetchIdeas = () => async dispatch => {
  const response = await projects.get('/ideas');

  dispatch({
    type: FETCH_IDEAS,
    payload: response.data
  });
};