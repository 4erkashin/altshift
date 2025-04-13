import { CopyToClipboardButton } from '@/components/copy-to-clipboard-button';
import { DeleteApplicationButton } from '@/components/delete-application-button';
import { Application } from '@/lib/storage/useApplications';

import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import styles from './ApplicationPreviewCard.module.css';

export const ApplicationPreviewCard: FC<
  HTMLAttributes<HTMLDivElement> & {
    data: Application;
    onDelete: (id: string) => void;
  }
> = ({ className, data, onDelete, ...restProps }) => {
  const handleDelete = () => {
    onDelete(data.id);
  };

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      <p className={styles.text}>{data.result}</p>

      <div className={styles.buttons}>
        <DeleteApplicationButton onDelete={handleDelete} />
        <CopyToClipboardButton textToCopy={data.result} />
      </div>
    </div>
  );
};
