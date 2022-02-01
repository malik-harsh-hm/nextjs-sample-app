import React from 'react';
import { connect } from 'react-redux';
import CartLoader from '../../../components/atoms/CartLoader';
import toggleCartLoaderState from './CartLoader.actions';

export const RegisterForm = props => <CartLoader {...props} />;


export const mapStateToProps = ({ CartLoaderState }) => {
  return { ...CartLoaderState };
};

export const mapDispatchToProps = dispatch => ({
  toggleCartLoader: () => dispatch(toggleCartLoaderState()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(RegisterForm);
