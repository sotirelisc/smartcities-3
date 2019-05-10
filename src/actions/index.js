import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_PROJECT
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

export const createProject = data => {
  return {
    type: CREATE_PROJECT
  };
}