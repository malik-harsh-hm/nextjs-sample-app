import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from './register-form.constants';

export const userRegisterRequestAction = () => ({
  type: USER_REGISTER_REQUEST,
});
export const userRegisterSuccessAction = () => ({
    type: USER_REGISTER_SUCCESS,
  });
export const userRegisterFailureAction = () => ({
    type: USER_REGISTER_FAILURE,
  });
