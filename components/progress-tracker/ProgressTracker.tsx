import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import styles from './ProgressTracker.module.css';
import DashIcon from './dash.svg';
import DotIcon from './dot.svg';

export const ProgressTracker: FC<
  HTMLAttributes<HTMLDivElement> & { layout?: 'vertical' | 'horizontal' }
> = ({ layout = 'horizontal' }) => {
  const getIcon = (className: string) => {
    const Component = layout === 'vertical' ? DashIcon : DotIcon;
    const baseClass = layout === 'vertical' ? styles.dashIcon : styles.dotIcon;
    return <Component className={clsx(baseClass, className)} />;
  };

  const text = layout === 'vertical' ? '3 of 5 generated' : '3/5 generated';

  return (
    <div
      className={clsx(styles.root, layout === 'vertical' && styles.vertical)}
    >
      <span className={styles.caption}>{text}</span>

      <div className={styles.progressIcons}>
        {getIcon(styles.colorActive)}
        {getIcon(styles.colorActive)}
        {getIcon(styles.colorActive)}
        {getIcon(styles.colorDefault)}
        {getIcon(styles.colorDefault)}
      </div>
    </div>
  );
};
