import { useEffect } from 'react';
import { createGlobalState } from 'react-use';

export type ApplicationInput = {
  jobTitle: string;
  label: string;
  skills: string;
  details: string;
  result: string;
};

export type Application = ApplicationInput & {
  id: string;
  createdAt: string;
  updatedAt?: string;
};

/**
 * Global state for applications using createGlobalState instead of Context because:
 * 1. It's specifically designed for this use case of synchronized state
 * 2. It's more concise than implementing a full Context solution
 * 3. It handles synchronization automatically across components
 * 4. It's a well-tested solution for this specific problem
 *
 * Using useState directly would create independent state instances per component,
 * leading to stale state issues when multiple components need to share the same data.
 */
const useGlobalApplications = createGlobalState<Application[]>(() => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('applications');
  return stored ? JSON.parse(stored) : [];
});

export const useApplications = () => {
  const [applications, setApplications] = useGlobalApplications();

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications]);

  // Listen for storage events from other tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'applications') {
        setApplications(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [setApplications]);

  const createApplication = (data: ApplicationInput) => {
    const newApp: Application = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    setApplications([...applications, newApp]);

    return newApp.id;
  };

  const getApplicationById = (id: string): Application | undefined => {
    return applications.find((app) => app.id === id);
  };

  const setApplication = (updatedApp: Application) => {
    const now = new Date().toISOString();
    const updatedApplications = applications.map((app) =>
      app.id === updatedApp.id ? { ...updatedApp, updatedAt: now } : app,
    );

    setApplications(updatedApplications);
  };

  const deleteApplication = (id: string) => {
    const updatedApplications = applications.filter((app) => app.id !== id);
    setApplications(updatedApplications);
  };

  return {
    applications,
    createApplication,
    getApplicationById,
    setApplication,
    setApplications,
    deleteApplication,
  };
};
