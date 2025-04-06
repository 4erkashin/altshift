import { useLocalStorage } from 'react-use';

type Application = {
  id: string;
  createdAt: string;
};

export function useApplications() {
  const [applications, setApplications] = useLocalStorage<Application[]>(
    'applications',
    [],
  );

  const createApplication = () => {
    const newApp: Application = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    setApplications([...(applications ?? []), newApp]);

    return newApp.id;
  };

  return {
    applications: applications ?? [],
    createApplication,
  };
}
