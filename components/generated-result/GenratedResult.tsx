import { CopyToClipboardButton } from '@/components/copy-to-clipboard-button';
import clsx from 'clsx';
import { FC, HtmlHTMLAttributes, PropsWithChildren } from 'react';

import styles from './GenratedResult.module.css';
import BallIcon from './ball.svg';

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
      <CopyToClipboardButton className={styles.copyButton} />
    </div>
  );
};
