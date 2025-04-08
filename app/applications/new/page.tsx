'use client';

import { ApplicationForm } from '@/components/application-form/ApplicationForm';
import { GenratedResult } from '@/components/generated-result';
import { PageHeader } from '@/components/page-header';

import { generateResult } from '@/lib/openai';
import { ApplicationInput, useApplications } from '@/lib/storage';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const { createApplication } = useApplications();

  const [isGenerating, setIsGenerating] = useState(true);

  const mutation = useMutation({
    mutationFn: generateResult,
  });

  const onSubmit = (data: Omit<ApplicationInput, 'result'>) => {
    setIsGenerating(true);
    mutation.mutate(
      { ...data, result: 'Mocked result' },
      {
        onSuccess: (result) => {
          const id = createApplication({ ...data, result });
          router.push(`/applications/${id}`);
        },
        onSettled: () => {
          // We don’t unset isGenerating here because redirect will unload the page
          // and we want the spinner to be shown until the new page is loaded
        },
      },
    );
  };

  return (
    <main>
      <PageHeader className={styles.pageHeader}>New application</PageHeader>

      <ApplicationForm
        className={styles.form}
        onSubmit={onSubmit}
        isPending={isGenerating}
      />

      <GenratedResult isPending={isGenerating} />
    </main>
  );
}
