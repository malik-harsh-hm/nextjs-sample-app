import RegisterFormSaga from './register-form.saga';
import RegisterFormReducer from './register-form.reducer';
import { REGISTER_FORM_REDUCER_KEY } from './register-form.constants';

export default {
  saga: RegisterFormSaga,
  reducer: RegisterFormReducer,
  key: REGISTER_FORM_REDUCER_KEY,
};
