'use client';

import { BaseButton } from '@/components/base-button';
import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
import DeleteIcon from './delete-icon.svg';
import styles from './DeleteApplicationButton.module.css';

export const DeleteApplicationButton: FC<
  HTMLAttributes<HTMLButtonElement> & {
    onDelete: () => void;
  }
> = ({ className, onDelete, ...restProps }) => {
  const handleClick = () => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      onDelete();
    }
  };

  return (
    <BaseButton
      className={clsx(styles.root, className)}
      onClick={handleClick}
      {...restProps}
    >
      <DeleteIcon className={styles.icon} />
      <span>Delete</span>
    </BaseButton>
  );
};
