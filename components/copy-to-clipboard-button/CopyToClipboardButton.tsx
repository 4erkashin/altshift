import { BaseButton } from '@/components/base-button';
import clsx from 'clsx';
import { FC, HTMLAttributes, useState } from 'react';
import CopyIcon from './copy.svg';
import styles from './CopyToClipboardButton.module.css';

export const CopyToClipboardButton: FC<
  HTMLAttributes<HTMLButtonElement> & {
    textToCopy: string;
  }
> = ({ className, textToCopy, ...restProps }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <BaseButton
      className={clsx(styles.root, className)}
      onClick={handleClick}
      {...restProps}
    >
      <span>{copied ? 'Copied!' : 'Copy to clipboard'}</span>
      <CopyIcon className={styles.icon} />
    </BaseButton>
  );
};
