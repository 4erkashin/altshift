'use client';

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

// Start with empty array to avoid hydration mismatch
const useGlobalApplications = createGlobalState<Application[]>(() => []);

export const useApplications = () => {
  const [applications, setApplications] = useGlobalApplications();

  // Load data from localStorage after mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('applications');
        if (stored) {
          setApplications(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Failed to load applications from localStorage:', error);
      }
    }
  }, [setApplications]);

  // Save to localStorage whenever applications change
  useEffect(() => {
    if (typeof window !== 'undefined' && applications.length > 0) {
      try {
        localStorage.setItem('applications', JSON.stringify(applications));
      } catch (error) {
        console.error('Failed to save applications to localStorage:', error);
      }
    }
  }, [applications]);

  // Listen for storage events from other tabs
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'applications' && e.newValue) {
        setApplications(JSON.parse(e.newValue));
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
