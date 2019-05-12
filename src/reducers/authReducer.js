import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_USER,
  WITHDRAW_TOKENS,
  WITHDRAW_TOKENS_SUCCESS
} from '../actions/types';

const initialState = {
  isSignedIn: true,
  userId: '5cd7e176a48c5b8480c3dd82'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    case WITHDRAW_TOKENS:
      return {
        ...state,
        tokensLoading: true
      };
    case WITHDRAW_TOKENS_SUCCESS:
      return {
        ...state,
        tokens: action.payload,
        tokensLoading: false
      };
    default:
      return state;
  }
};