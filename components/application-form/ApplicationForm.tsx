'use client';

import { BaseButton } from '@/components/base-button';
import { InputField } from '@/components/input-field/InputField';
import { TextAreaField } from '@/components/textarea-field';
import { ApplicationInput } from '@/lib/storage';
import { useForm, useWatch } from 'react-hook-form';
import SpinnerIcon from './spinner.svg';

import clsx from 'clsx';
import { FormHTMLAttributes } from 'react';
import styles from './ApplicationForm.module.css';

type ApplicationFormProps = Omit<
  FormHTMLAttributes<HTMLFormElement>,
  'onSubmit'
> & {
  defaultValues?: ApplicationInput;
  onSubmit: (data: ApplicationInput) => void;
  isPending?: boolean;
};

export const ApplicationForm = ({
  defaultValues,
  onSubmit,
  className,
  isPending,
  ...rest
}: ApplicationFormProps) => {
  const { register, control, handleSubmit, reset } = useForm<ApplicationInput>({
    defaultValues,
  });

  if (process.env.NODE_ENV === 'development') {
    // @ts-expect-error - dev-only mutation of global scope
    globalThis.__DEBUG_fillForm = (n: number = 1) => {
      reset({
        jobTitle: `Job title ${n}`,
        label: `Label ${n}`,
        skills: `Good at ${n}`,
        details: `Details ${n}`,
      });
    };
  }

  const details = useWatch({ name: 'details', control });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(styles.root, className)}
      {...rest}
    >
      <InputField label="Job title" id="jobTitle" {...register('jobTitle')} />

      <InputField label="Label" id="label" {...register('label')} />

      <InputField label="I am good at…" id="skills" {...register('skills')} />

      <TextAreaField
        label="Additional details"
        id="details"
        maxLength={1200}
        {...register('details')}
        value={details}
      />

      <BaseButton className={styles.button} type="submit" disabled={isPending}>
        {isPending ? (
          <SpinnerIcon className={styles.spinnerIcon} />
        ) : (
          'Generate Now'
        )}
      </BaseButton>
    </form>
  );
};
