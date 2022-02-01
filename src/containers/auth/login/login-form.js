import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../../components/auth/login/index';
import toggleCartLoaderState from './CartLoader.actions';

export const LoginForm = props => <LoginForm {...props} />;


export const mapStateToProps = ({ CartLoaderState }) => {
  return { ...CartLoaderState };
};

export const mapDispatchToProps = dispatch => ({
  userLoginRequestAction: (data) => dispatch(userLoginRequestAction(data)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(LoginForm);
