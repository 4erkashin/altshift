'use client';

import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './InputField.module.css';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, id, className, ...rest }, ref) => {
    return (
      <div className={styles.root}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>

        <input
          id={id}
          ref={ref}
          className={clsx(styles.input, className)}
          {...rest}
        />
      </div>
    );
  },
);

InputField.displayName = 'InputField';
