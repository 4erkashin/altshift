import { useLocalStorage } from 'react-use';

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

export const useApplications = () => {
  const [applications, setApplications] = useLocalStorage<Application[]>(
    'applications',
    [],
  );

  const createApplication = (data: ApplicationInput) => {
    const newApp: Application = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    setApplications([...(applications ?? []), newApp]);

    return newApp.id;
  };

  const getApplicationById = (id: string): Application | undefined => {
    return (applications ?? []).find((app) => app.id === id);
  };

  const setApplication = (updatedApp: Application) => {
    const now = new Date().toISOString();
    const updatedApplications = (applications ?? []).map((app) =>
      app.id === updatedApp.id ? { ...updatedApp, updatedAt: now } : app,
    );

    setApplications(updatedApplications);
  };

  return {
    applications: applications ?? [],
    createApplication,
    getApplicationById,
    setApplication,
    setApplications,
  };
};
