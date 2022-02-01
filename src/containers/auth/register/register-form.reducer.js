import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from './register-form.constants';

export const initialState = {
};

const RegisterFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { registering: true };
    case USER_REGISTER_SUCCESS:
      return { };
    case USER_REGISTER_FAILURE:
      return { };
    default:
      return state;
  }
};

export default RegisterFormReducer;
