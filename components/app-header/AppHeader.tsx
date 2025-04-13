'use client';

import Link from 'next/link';

import { HomeButton } from '@/components/home-button';
import { ProgressTracker } from '@/components/progress-tracker';


import styles from './AppHeader.module.css';
import LogoIcon from './logo-icon.svg';
import LogoText from './logo-text.svg';

export const AppHeader = () => {
  return (
    <header className={styles.root}>
      <Link href="/" className={styles.logoBlock}>
        <LogoIcon className={styles.logoIcon} />
        <LogoText className={styles.logoText} />
      </Link>
      <ProgressTracker />
      <HomeButton />
    </header>
  );
};
