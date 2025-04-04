'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';
import TextareaAutosize, {
  type TextareaAutosizeProps,
} from 'react-textarea-autosize';
import styles from './TextAreaField.module.css';

type TextAreaFieldProps = TextareaAutosizeProps & {
  label: string;
  id: string;
  maxLength?: number;
};

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(({ label, id, className, maxLength, ...rest }, ref) => {
  return (
    <div className={styles.root}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <TextareaAutosize
        id={id}
        ref={ref}
        className={clsx(styles.textarea, className)}
        {...rest}
      />
      {maxLength && (
        <div className={styles.counter}>
          {typeof rest.value === 'string' ? rest.value.length : 0}/{maxLength}
        </div>
      )}
    </div>
  );
});

TextAreaField.displayName = 'TextAreaField';
