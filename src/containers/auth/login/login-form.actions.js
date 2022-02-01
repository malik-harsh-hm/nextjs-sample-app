import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from './login-form.constants';


export const userLoginRequestAction = (user) => ({
  type: USER_LOGIN_REQUEST,
  user
});

export const userLoginSuccessAction = () => ({
    type: USER_LOGIN_SUCCESS,
  });
  export const userLoginFailureAction = () => ({
    type: USER_LOGIN_FAILURE,
  });
