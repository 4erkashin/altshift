import { ApplicationInput } from '@/lib/storage';

export const generateResult = async (
  data: ApplicationInput,
): Promise<string> => {
  const res = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to generate result');
  }

  const { result } = await res.json();
  return result;
};
