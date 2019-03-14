import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import TextField from 'UI/FormFields/InputText';
import formValidator from 'classes/formValidator';
import {
  EMAIL,
  PASSWORD,
  DISPLAY_NAME,
  PASSWORD_CONFIRMATION,
} from 'constants/inputTypes';

import styles from './FormsignUp.scss';
import { PAGE_SIGN_IN } from 'constants/urls';
const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

const validate = ({ email, password, displayName, confirmPassword }) => {
  const errors = {};
  errors.email = formValidator.validate(EMAIL, email);
  errors.password = formValidator.validate(PASSWORD, password);
  errors.displayName = formValidator.validate(DISPLAY_NAME, displayName);
  errors.confirmPassword = formValidator.validate(PASSWORD_CONFIRMATION, password, confirmPassword);
  return errors;
};

const FormSignUp = ({
  handleSubmit,
  invalid,
  submitting,
  className,
}) => (
  <form
    onSubmit={handleSubmit}
    className={classnames(styles.form, className)}
  >
    <h1>Sign Up</h1>
    <Field
      required
      className={styles.field}
      component={TextField}
      label="Email:"
      fullWidth
      name="email"
      title="Email"
    />
    <Field
      required
      className={styles.field}
      component={TextField}
      label="Display Name:"
      fullWidth
      name="displayName"
      title="Display Name"
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
      name="password"
      title="Password:"
      type="password"
    />
    <Field
      required
      className={classnames(
        styles.field,
        styles['field--password'],
      )}
      component={TextField}
      label="Confirm Password:"
      fullWidth
      name="confirmPassword"
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
      Sign Up
    </Button>
    <div>
      <div>or</div>
      <Link href={PAGE_SIGN_IN} color="inherit">Sign In</Link>
    </div>
  </form>
)


FormSignUp.propTypes = propTypes

export default reduxForm({
  form: 'SIGN-UP',
  validate,
})(FormSignUp)
