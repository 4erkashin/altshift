import { ApplicationPreviewCard } from '@/components/application-preview-card';
import { CreateApplicationButton } from '@/components/create-application-button';
import { GoalHighlight } from '@/components/goal-highlight';
import { PageHeader } from '@/components/page-header';
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

      <div className={styles.applicationPreviews}>
        <ApplicationPreviewCard />
        <ApplicationPreviewCard />
        <ApplicationPreviewCard />
      </div>

      <GoalHighlight />
    </main>
  );
}
