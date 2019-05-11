import _ from 'lodash';
import {
  CREATE_IDEA,
  FETCH_IDEA,
  FETCH_IDEAS,
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_IDEA:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    case FETCH_IDEA:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    case FETCH_IDEAS:
      return {
        ...state,
        ..._.mapKeys(action.payload, '_id')
      };
    default:
      return state;
  }
};