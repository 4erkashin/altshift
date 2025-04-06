'use client';

import { PageHeader } from '@/components/page-header';
import Form from 'next/form';

import { BaseButton } from '@/components/base-button';
import { GenratedResult } from '@/components/generated-result';
import { InputField } from '@/components/input-field/InputField';
import { TextAreaField } from '@/components/textarea-field';
import { useApplications } from '@/lib/storage/useApplications';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  const [detailsValue, setDetailsValue] = useState('');
  const { createApplication } = useApplications();

  const handleGenerate = () => {
    const id = createApplication();
    router.push(`/applications/${id}`);
  };

  return (
    <main>
      <PageHeader className={styles.pageHeader}>New application</PageHeader>

      <Form className={styles.form} action="">
        <InputField label="Job title" id="jobTitle" />
        <InputField label="Label" id="label" />
        <InputField label="I am good at…" id="skills" />

        <TextAreaField
          label="Additional details"
          id="details"
          maxLength={1200}
          value={detailsValue}
          onChange={(e) => setDetailsValue(e.target.value)}
        />

        <BaseButton className={styles.button} onClick={handleGenerate}>
          Generate Now
        </BaseButton>
      </Form>

      <GenratedResult />
    </main>
  );
}
