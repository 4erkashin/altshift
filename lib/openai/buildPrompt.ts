import { ApplicationInput } from '@/lib/storage/useApplications';

export const buildPrompt = (data: ApplicationInput): string => {
  const { jobTitle, label, skills, details } = data;

  return `
You are an AI assistant tasked with generating a tailored job application.

Job title: ${jobTitle}
Label: ${label}
Skills: ${skills}
Additional details: ${details}

Please generate a concise, professional application text that fits the context above.
`.trim();
};
