'use client';

import { BaseButton } from '@/components/base-button';
import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
import CopyIcon from './copy.svg';
import styles from './CopyToClipboardButton.module.css';

export const CopyToClipboardButton: FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...restProps
}) => {
  return (
    <BaseButton className={clsx(styles.root, className)} {...restProps}>
      <span>Copy to clipboard</span>
      <CopyIcon className={styles.icon} />
    </BaseButton>
  );
};
