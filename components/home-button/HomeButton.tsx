import HomeIcon from './home-icon.svg';
import styles from './HomeButton.module.css';

export const HomeButton = () => {
  return (
    <button className={styles.root} type="button">
      <HomeIcon className={styles.icon} />
    </button>
  );
};
