import { GoalHighlight } from './components/goal-highlight';
import { PageHeader } from './components/page-header';

export default function Home() {
  return (
    <main>
      <PageHeader />
      <GoalHighlight />
    </main>
  );
}
