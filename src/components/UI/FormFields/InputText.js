import React from 'react'
import { TextField as MaterialTextField } from '@material-ui/core';

const TextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <MaterialTextField
    label={label}
    error={touched && !!error}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

export default TextField
