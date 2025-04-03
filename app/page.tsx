import { PageHeader } from '@/components/page-header';
import { ApplicationPreviewCard } from './components/application-preview-card';
import { GoalHighlight } from './components/goal-highlight';

export default function Home() {
  return (
    <main>
      <PageHeader>
        <pre>create new button</pre>
      </PageHeader>
      <ApplicationPreviewCard />
      <GoalHighlight />
    </main>
  );
}
