import errorsMessages from 'constants/errorsMessages';

import {
  validateDigit,
  validateEmailLength,
  validateLowerCase,
  validateMaxLength,
  validateMinLength,
  validateSpecialCharacters,
  validateString,
  validateUpperCase,
  validateEmailFormat,
} from 'constants/formValidations';

import {
  CURRENT_PASSWORD,
  EMAIL,
  DISPLAY_NAME,
  PASSWORD,
  PASSWORD_CONFIRMATION,
} from 'constants/inputTypes';

/**
 *  Validates current password field value
 *  @param {object} errorsMessages translations
 *  @param {string} password
 *  @returns {string} error
 */
const validateCurrentPassword = (errorsMessages, password) => (
  !password
    ? errorsMessages.required
    : null
);

/**
 *  Validates password field value
 *  @param {object} errorsMessages translations
 *  @param {string} password
 *  @returns {string} error
 */
function validatePassword(errorsMessages, password) {
  let error = null;

  if (!password) {
    error = errorsMessages.required;
  } else if (password.length < 6) {
    error = errorsMessages.password.length;
  } else if (validateLowerCase(password)) {
    error = errorsMessages.password.lowerCase;
  } else if (validateUpperCase(password)) {
    error = errorsMessages.password.upperCase;
  } else if (validateDigit(password)) {
    error = errorsMessages.password.digit;
  } else if (validateSpecialCharacters(password)) {
    error = errorsMessages.password.specialChars;
  }

  return error;
}

/**
 *  Validates password confirmation field
 *  @param {object} errorsMessages translations
 *  @param {string} password
 *  @param {string} passwordConfirmation
 *  @returns {string} error
 */
function validatePasswordConfirmation(errorsMessages, password, passwordConfirmation) {
  let error = null;

  if (!passwordConfirmation) {
    error = errorsMessages.required;
  } else if (password !== passwordConfirmation) {
    error = errorsMessages.password.confirmNoMatch;
  }

  return error;
}

/**
 *  Validates name field value
 *  @param {object} errorsMessages translations
 *  @param {string} name
 *  @returns {string} error
 */
function validateDisplayName(errorsMessages, name) {
  let error = null;

  if (!name) {
    error = errorsMessages.required;
  } else if (validateMinLength(name)) {
    error = errorsMessages.minLength;
  } else if (validateMaxLength(name)) {
    error = errorsMessages.maxLength;
  } else if (validateString(name)) {
    error = errorsMessages.noSpecialCharsOrNumbers;
  }

  return error;
}

/**
 *  Validates email field value
 *  @param {object} errorsMessages translations
 *  @param {string} email
 *  @returns {string} error
 */
function validateEmail(errorsMessages, email) {
  let error = null;

  if (!email) {
    error = errorsMessages.required;
  } else if (validateEmailFormat(email)) {
    error = errorsMessages.invalidEmail;
  } else if (validateMinLength(email)) {
    error = errorsMessages.minLength;
  } else if (validateEmailLength(email)) {
    error = errorsMessages.invalidEmailLength;
  }

  return error;
}

/**
 *  Form Validation Class
 */
/* Validates
  * @param {string} type
  * @param {string} value (could have 1 or more)
  */
export default {
  validate: (type, ...values) => {
    let validationFn = null;

    switch (type) {
      case CURRENT_PASSWORD:
        validationFn = validateCurrentPassword;
        break;
      case EMAIL:
        validationFn = validateEmail;
        break;
      case DISPLAY_NAME:
        validationFn = validateDisplayName;
        break;
      case PASSWORD:
        validationFn = validatePassword;
        break;
      case PASSWORD_CONFIRMATION:
        validationFn = validatePasswordConfirmation;
        break;
      default:
        break;
    }

    return validationFn ? validationFn(errorsMessages, ...values) : null;
  }
}
