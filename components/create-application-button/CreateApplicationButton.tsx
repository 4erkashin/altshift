import { BaseButton } from '@/components/base-button';
import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
import styles from './CreateApplicationButton.module.css';
import PlusIcon from './plus-icon.svg';

export const CreateApplicationButton: FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...restProps
}) => {
  return (
    <BaseButton className={clsx(styles.root, className)} {...restProps}>
      <PlusIcon className={styles.icon} />

      <span>Create New</span>
    </BaseButton>
  );
};
