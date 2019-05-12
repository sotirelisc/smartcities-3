import _ from 'lodash';
import {
  CREATE_PROJECT,
  FETCH_PROJECT,
  FETCH_PROJECTS,
  UPVOTE_PROJECT,
  DOWNVOTE_PROJECT
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    case FETCH_PROJECT:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    case FETCH_PROJECTS:
      return {
        ...state,
        ..._.mapKeys(action.payload, '_id')
      };
    case UPVOTE_PROJECT:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    case DOWNVOTE_PROJECT:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    default:
      return state;
  }
};