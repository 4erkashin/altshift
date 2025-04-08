'use client';

import { ApplicationForm } from '@/components/application-form/ApplicationForm';
import { GenratedResult } from '@/components/generated-result';
import { PageHeader } from '@/components/page-header';

import { ApplicationInput, useApplications } from '@/lib/storage';

import { useRouter } from 'next/navigation';

import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const { createApplication } = useApplications();

  const onSubmit = (data: Omit<ApplicationInput, 'result'>) => {
    const id = createApplication({
      ...data,
      result: 'This is a placeholder result.',
    });
    router.push(`/applications/${id}`);
  };

  return (
    <main>
      <PageHeader className={styles.pageHeader}>New application</PageHeader>

      <ApplicationForm className={styles.form} onSubmit={onSubmit} />

      <GenratedResult />
    </main>
  );
}
