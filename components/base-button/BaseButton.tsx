'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './BaseButton.module.css';

export const BaseButton: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className, ...restProps }) => {
  return (
    <button
      className={clsx(styles.root, className)}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};
