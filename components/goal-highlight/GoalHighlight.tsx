import { CreateApplicationButton } from '@/components/create-application-button';
import { ProgressTracker } from '@/components/progress-tracker';

import styles from './GoalHighlight.module.css';

export const GoalHighlight = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Hit your goal</h2>

      <span className={styles.text}>
        Generate and send out couple more job applications to get hired faster
      </span>

      <CreateApplicationButton className={styles.button} />

      <ProgressTracker layout="vertical" />
    </div>
  );
};
