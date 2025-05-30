'use client';

import { ApplicationPreviewCard } from '@/components/application-preview-card';
import { CreateApplicationButton } from '@/components/create-application-button';
import { GoalHighlight } from '@/components/goal-highlight';
import { PageHeader } from '@/components/page-header';
import { useApplications } from '@/lib/storage';

import styles from './page.module.css';

export default function Home() {
  const { applications, deleteApplication } = useApplications();

  const handleDelete = (id: string) => {
    deleteApplication(id);
  };

  return (
    <main>
      <PageHeader
        className={styles.pageHeader}
        button={<CreateApplicationButton />}
      >
        Applications
      </PageHeader>

      <div className={styles.applicationPreviews}>
        {applications.map((application) => (
          <ApplicationPreviewCard
            key={application.id}
            data={application}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <GoalHighlight />
    </main>
  );
}
