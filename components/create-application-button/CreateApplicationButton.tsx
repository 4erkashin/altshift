import { BaseButton } from '@/components/base-button';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { FC, HTMLAttributes } from 'react';

import styles from './CreateApplicationButton.module.css';
import PlusIcon from './plus-icon.svg';

export const CreateApplicationButton: FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...restProps
}) => {
  const router = useRouter();

  return (
    <BaseButton
      className={clsx(styles.root, className)}
      onClick={() => router.push('/applications/new')}
      {...restProps}
    >
      <PlusIcon className={styles.icon} />
      <span>Create New</span>
    </BaseButton>
  );
};
