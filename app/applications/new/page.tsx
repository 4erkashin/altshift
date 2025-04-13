'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  ApplicationForm,
  ApplicationFormValues,
} from '@/components/application-form/ApplicationForm';
import { GenratedResult } from '@/components/generated-result';
import { PageHeader } from '@/components/page-header';
import { generateResult } from '@/lib/openai';
import { useApplications } from '@/lib/storage';

import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const { createApplication } = useApplications();

  const [isGenerating, setIsGenerating] = useState(false);

  const mutation = useMutation({
    mutationFn: generateResult,
  });

  const onSubmit = (data: ApplicationFormValues) => {
    setIsGenerating(true);
    mutation.mutate(data, {
      onSuccess: (result) => {
        const id = createApplication({ ...data, result });
        router.push(`/applications/${id}`);
      },
      onSettled: () => {
        // We don't unset isGenerating here because redirect will unload the page
        // and we want the spinner to be shown until the new page is loaded
      },
    });
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
