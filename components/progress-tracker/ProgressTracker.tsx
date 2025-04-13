import { useApplications } from '@/lib/storage';
import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import styles from './ProgressTracker.module.css';
import DashIcon from './dash.svg';
import DotIcon from './dot.svg';

export const ProgressTracker: FC<
  HTMLAttributes<HTMLDivElement> & {
    layout?: 'vertical' | 'horizontal';
    total?: number;
  }
> = ({ layout = 'horizontal', total = 5 }) => {
  const { applications } = useApplications();
  const totalApplications = applications.length;

  const getIcon = (className: string) => {
    const Component = layout === 'vertical' ? DashIcon : DotIcon;
    const baseClass = layout === 'vertical' ? styles.dashIcon : styles.dotIcon;
    return <Component className={clsx(baseClass, className)} />;
  };

  const text =
    layout === 'vertical'
      ? `${totalApplications} of ${total} generated`
      : `${totalApplications}/${total} generated`;

  return (
    <div
      className={clsx(styles.root, layout === 'vertical' && styles.vertical)}
    >
      <span className={styles.caption}>{text}</span>

      <div className={styles.progressIcons}>
        {Array.from({ length: total }).map((_, index) => (
          <div key={index}>
            {getIcon(
              index < totalApplications
                ? styles.colorActive
                : styles.colorDefault,
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
