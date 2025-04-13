'use client';

import clsx from 'clsx';
import { FC, HtmlHTMLAttributes, PropsWithChildren } from 'react';

import { CopyToClipboardButton } from '@/components/copy-to-clipboard-button';

import BallIcon from './ball.svg';
import styles from './GenratedResult.module.css';

export const GenratedResult: FC<
  PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> & {
    isPending?: boolean;
  }
> = ({ children, className, isPending, ...restProps }) => {
  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      {isPending ? (
        <BallIcon className={styles.ballIcon} />
      ) : (
        <p className={styles.text}>
          {children ?? 'Your personalized job application will appear here...'}
        </p>
      )}
      {!isPending && children && (
        <CopyToClipboardButton
          className={styles.copyButton}
          textToCopy={children as string}
        />
      )}
    </div>
  );
};
