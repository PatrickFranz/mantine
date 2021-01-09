import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types/src';
import classes from './InputWrapper.styles.less';

export interface InputWrapperBaseProps {
  label?: string;
  error?: string;
  required?: boolean;
}

interface InputWrapperProps extends DefaultProps, InputWrapperBaseProps {
  id: string;
  children: React.ReactChild;
}

export default function InputWrapper({
  className,
  label,
  children,
  required,
  id,
  error,
  ...others
}: InputWrapperProps) {
  return (
    <div className={cx(classes.inputWrapper, className)} {...others}>
      {label && (
        <label className={classes.label} htmlFor={id}>
          {label} {required && <span className={classes.required}>*</span>}
        </label>
      )}
      {children}
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
}