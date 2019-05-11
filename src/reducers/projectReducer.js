import _ from 'lodash';
import {
  CREATE_PROJECT,
  FETCH_PROJECT,
  FETCH_PROJECTS,
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
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
    default:
      return state;
  }
};