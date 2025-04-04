import { ProgressTracker } from '@/components/progress-tracker';

import { HomeButton } from '@/components/home-button';
import styles from './AppHeader.module.css';
import LogoIcon from './logo-icon.svg';
import LogoText from './logo-text.svg';

export const AppHeader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logoBlock}>
        <LogoIcon className={styles.logoIcon} />
        <LogoText className={styles.logoText} />
      </div>
      <ProgressTracker />
      <HomeButton />
    </div>
  );
};
