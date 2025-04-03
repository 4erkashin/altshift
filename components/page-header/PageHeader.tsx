import { FC, PropsWithChildren } from 'react';
import styles from './PageHeader.module.css';

export const PageHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Title</h1>

        {children}
      </div>
    </div>
  );
};
