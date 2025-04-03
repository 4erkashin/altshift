import { CreateApplicationButton } from '@/components/create-application-button';
import { PageHeader } from '@/components/page-header';
import { GoalHighlight } from './components/goal-highlight';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <PageHeader
        className={styles.pageHeader}
        button={<CreateApplicationButton />}
      >
        Applications
      </PageHeader>

      <GoalHighlight />
    </main>
  );
}
