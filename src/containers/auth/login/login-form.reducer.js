import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT } from './login-form.constants';

let user = JSON.parse(localStorage.getItem('user'));

export const initialState = user ? { loggedIn: true, user } : {};

const LoginFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loggingIn: true,
        user: action.user,
      };

    case USER_LOGIN_FAILURE:
      return {};

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export default LoginFormReducer;
