import { BaseButton } from '@/components/base-button';
import HomeIcon from './home-icon.svg';
import styles from './HomeButton.module.css';

export const HomeButton = () => {
  return (
    <BaseButton className={styles.root}>
      <HomeIcon className={styles.icon} />
    </BaseButton>
  );
};
