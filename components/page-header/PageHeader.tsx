'use client';

import clsx from 'clsx';
import { FC, HtmlHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import styles from './PageHeader.module.css';

export const PageHeader: FC<
  PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement> & { button?: ReactNode }>
> = ({ children, button, className, ...restProps }) => {
  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{children}</h1>

        {button}
      </div>
    </div>
  );
};
