'use client';

import { useRouter } from 'next/navigation';

import { BaseButton } from '@/components/base-button';

import HomeIcon from './home-icon.svg';
import styles from './HomeButton.module.css';

export const HomeButton = () => {
  const router = useRouter();

  return (
    <BaseButton className={styles.root} onClick={() => router.push('/')}>
      <HomeIcon className={styles.icon} />
    </BaseButton>
  );
};
