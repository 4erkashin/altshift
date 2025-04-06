import clsx from 'clsx';
import { FC, HtmlHTMLAttributes, PropsWithChildren } from 'react';
import { CopyToClipboardButton } from '../copy-to-clipboard-button';
import styles from './GenratedResult.module.css';

export const GenratedResult: FC<
  PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>
> = ({ children, className, ...restProps }) => {
  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      {children ?? (
        <p className={styles.text}>
          Your personalized job application will appear here...
        </p>
      )}

      <CopyToClipboardButton className={styles.copyButton} />
    </div>
  );
};
