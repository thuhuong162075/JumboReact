import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  TOGGLE_COLLAPSED_NAV
} from '../constants/ActionTypes'

const INIT_STATE = {
  error: "",
  loading: false,
  navCollapsed: false,
  message: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
    return {
      ...state,
      navCollapsed: false
    };
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.isNavCollapsed
      };
    case FETCH_START: {
      return {...state, error: '', message: '', loading: true};
    }
    case FETCH_SUCCESS: {
      return {...state, error: '', message: '', loading: false};
    }
    case SHOW_MESSAGE: {
      return {...state, error: '', message: action.payload, loading: false};
    }
    case FETCH_ERROR: {
      return {...state, loading: false, error: action.payload, message: ''};
    }
    case HIDE_MESSAGE: {
      return {...state, loading: false, error: '', message: ''};
    }
    default:
      return state;
  }
}
