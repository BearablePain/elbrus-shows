import {
  GET_FILMLIST,
  RECEIVE_DATA_FROM_FETCH,
  GET_VIDEO,
  SET_USER,
  SET_COMMENTS,
  SAVE_COMMENTS,
} from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_FILMLIST:
      return {
        ...state,
        films: action.payload,
      };

    case RECEIVE_DATA_FROM_FETCH:
      return {
        ...state,
        moreDetalisFilm: action.payload.data,
      };

    case GET_VIDEO:
      return {
        ...state,
        videoUrl: action.payload,
      };
    case SET_COMMENTS:
      return {
        ...state,
        comments: [ ...action.payload],
      };
      case SAVE_COMMENTS:
        return {
          ...state,
          comments: [...state.comments, ...action.payload],
        };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
