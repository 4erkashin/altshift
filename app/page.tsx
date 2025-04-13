'use client';

import { ApplicationPreviewCard } from '@/components/application-preview-card';
import { CreateApplicationButton } from '@/components/create-application-button';
import { GoalHighlight } from '@/components/goal-highlight';
import { PageHeader } from '@/components/page-header';
import { useApplications } from '@/lib/storage';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

/**
 * @description
 * This component uses mounted state to handle client-side data fetching from localStorage.
 * This is necessary because:
 * 1. We use localStorage for data persistence
 * 2. localStorage is only available on the client side
 * 3. We need to prevent hydration mismatches between server and client rendering
 *
 * The mounted state ensures that we only render the content after the component is mounted
 * on the client side, where localStorage is available.
 */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { applications, deleteApplication } = useApplications();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
