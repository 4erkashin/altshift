import clsx from 'clsx';
import styles from './ProgressTracker.module.css';
import DotIcon from './dot.svg';

export const ProgressTracker = () => {
  return (
    <div className={styles.root}>
      <span className={styles.caption}>3/5 generated</span>

      <div className={styles.progressIcons}>
        <DotIcon className={clsx(styles.progressIcon, styles.colorActive)} />
        <DotIcon className={clsx(styles.progressIcon, styles.colorActive)} />
        <DotIcon className={clsx(styles.progressIcon, styles.colorActive)} />
        <DotIcon className={clsx(styles.progressIcon, styles.colorDefault)} />
        <DotIcon className={clsx(styles.progressIcon, styles.colorDefault)} />
      </div>
    </div>
  );
};
