'use client';

import { PageHeader } from '@/components/page-header';
import Form from 'next/form';

import { InputField } from '@/components/input-field/InputField';
import { TextAreaField } from '@/components/textarea-field';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [detailsValue, setDetailsValue] = useState('');

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
      </Form>
      <pre>Generated result</pre>
    </main>
  );
}
