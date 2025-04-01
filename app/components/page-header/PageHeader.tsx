import { CreateApplicationButton } from '@/components/create-application-button';

// TODO: make reusable, move to @/components
export const PageHeader = () => {
  return (
    <div>
      <pre>Applications</pre>
      {/* TODO: create slot for button */}
      <CreateApplicationButton />
      <pre>divider</pre>
    </div>
  );
};
