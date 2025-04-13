'use client';

import { BaseButton } from '@/components/base-button';
import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
import DeleteIcon from './delete-icon.svg';
import styles from './DeleteApplicationButton.module.css';

export const DeleteApplicationButton: FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...restProps
}) => {
  return (
    <BaseButton className={clsx(styles.root, className)} {...restProps}>
      <DeleteIcon className={styles.icon} />
      <span>Delete</span>
    </BaseButton>
  );
};
