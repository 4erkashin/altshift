import {
  ApplicationForm,
  ApplicationFormValues,
} from '@/components/application-form';
import { GenratedResult } from '@/components/generated-result';
import { PageHeader } from '@/components/page-header';
import { generateResult } from '@/lib/openai';
import { Application, useApplications } from '@/lib/storage';
import { useMutation } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const { id } = useParams();
  const router = useRouter();

  const [application, setApplication] = useState<Application | null>(null);

  const { getApplicationById, setApplication: updateApplication } =
    useApplications();

  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (typeof id === 'string') {
      const app = getApplicationById(id);
      if (app) {
        setApplication(app);
        console.log('Loaded application:', app);
      }
    }
  }, [id, getApplicationById]);

  const mutation = useMutation({
    mutationFn: generateResult,
  });

  const onSubmit = (data: ApplicationFormValues) => {
    if (!application) return;
    setIsGenerating(true);

    mutation.mutate(data, {
      onSuccess: (result) => {
        updateApplication({
          ...application,
          ...data,
          result,
        });
      },
      onSettled: () => {
        setIsGenerating(false);
        router.refresh();
      },
    });
  };

  return (
    <main>
      <PageHeader className={styles.pageHeader}>New application</PageHeader>

      {application && (
        <>
          <ApplicationForm
            className={styles.form}
            onSubmit={onSubmit}
            isPending={isGenerating}
            defaultValues={{
              jobTitle: application.jobTitle,
              label: application.label,
              skills: application.skills,
              details: application.details,
            }}
          />

          <GenratedResult isPending={isGenerating}>
            {application.result}
          </GenratedResult>
        </>
      )}
    </main>
  );
}
