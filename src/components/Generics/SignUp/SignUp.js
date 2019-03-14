import React from 'react'
import FormSignUp from './FormSignUp/FormSignUp';
import { PropTypes } from 'prop-types';

const propTypes = {
  fetchSignUp: PropTypes.func.isRequired,
};
const defaultProps = {};

const SignUp = ({ fetchSignUp }) => <FormSignUp onSubmit={fetchSignUp} />

SignUp.propTypes = propTypes;
SignUp.defaultProps = defaultProps;

export default SignUp;
