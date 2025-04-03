import { BaseButton } from '@/components/base-button';
import styles from './CreateApplicationButton.module.css';
import PlusIcon from './plus-icon.svg';

export const CreateApplicationButton = () => {
  return (
    <BaseButton className={styles.root}>
      <PlusIcon className={styles.icon} />

      <span>Create New</span>
    </BaseButton>
  );
};
