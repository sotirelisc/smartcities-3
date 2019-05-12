import {
  SELECT_PROJECT
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return {
        ...state,
        [action.payload._id]: action.payload
      };
    default:
      return state;
  }
};