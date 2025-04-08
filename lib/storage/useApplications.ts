import { useLocalStorage } from 'react-use';

export type ApplicationInput = {
  jobTitle: string;
  label: string;
  skills: string;
  details: string;
  result: string;
};

type Application = ApplicationInput & {
  id: string;
  createdAt: string;
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

  return {
    applications: applications ?? [],
    createApplication,
    getApplicationById,
  };
};
