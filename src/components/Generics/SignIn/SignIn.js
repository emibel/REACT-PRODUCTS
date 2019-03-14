import React from 'react'
import FormSignIn from './FormSignIn/FormSignIn';
import { PropTypes } from 'prop-types';

const propTypes = {
  fetchSignIn: PropTypes.func.isRequired,
};
const defaultProps = {};

const SignIn = ({ fetchSignIn }) => <FormSignIn onSubmit={fetchSignIn} />

SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;

export default SignIn;
