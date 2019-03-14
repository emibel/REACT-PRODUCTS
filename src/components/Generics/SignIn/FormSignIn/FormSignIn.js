import { Field, reduxForm } from 'redux-form';
import { Button, Link } from '@material-ui/core';
import TextField from 'UI/FormFields/InputText';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import React from 'react'
import formValidator from 'classes/formValidator';
import {
  EMAIL,
  PASSWORD,
} from 'constants/inputTypes';

import styles from './FormSignIn.scss';
import { PAGE_SIGN_UP } from 'constants/urls';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

const validate = ({ email, password }) => {
  const errors = {};
  errors.email = formValidator.validate(EMAIL, email);
  errors.password = formValidator.validate(PASSWORD, password);
  return errors;
};

const FormSignIn = ({
  handleSubmit,
  invalid,
  submitting,
  className,
}) => (
  <form
    onSubmit={handleSubmit}
    className={classnames(styles.form, className)}
  >
    <h1>Sign In</h1>
    <Field
      className={styles.field}
      required
      component={TextField}
      label="Email:"
      fullWidth
      name={EMAIL}
      title="Email"
    />
    <Field
      required
      className={classnames(
        styles.field,
        styles['field--password'],
      )}
      component={TextField}
      label="Password:"
      fullWidth
      name={PASSWORD}
      title="Password:"
      type="password"
    />
    <Button
      className={styles.submit}
      type="submit"
      variant="contained"
      color='primary'
      disabled={invalid || submitting}
    >
      Login
    </Button>
    <div>
      <div>or</div>
      <Link href={PAGE_SIGN_UP} color="inherit">Sign up</Link>
    </div>
  </form>
);

FormSignIn.propTypes = propTypes;

export default reduxForm({
  form: 'SIGN-IN',
  validate
})(FormSignIn);
