import { ApplicationInput } from '@/lib/storage';

export const generateResult = async (
  data: ApplicationInput,
): Promise<string> => {
  console.log('[generateResult] input:', data);

  // simulate OpenAI response delay
  await new Promise((r) => setTimeout(r, 3000));

  return `Generated response for "${data.jobTitle}" using skills: ${data.skills}`;
};
