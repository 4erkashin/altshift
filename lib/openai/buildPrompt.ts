import { ApplicationInput } from '@/lib/storage/useApplications';

export const buildPrompt = (data: ApplicationInput): string => {
  const { jobTitle, label, skills, details } = data;

  return `
You are an AI writing assistant.

Write a concise and modern job application message for the following position. Follow this format:
- Start with “Dear ${label} Team,”
- 4–6 short paragraphs (1–2 sentences each)
- Clear, confident tone. No fluff, no quotes, no formality.
- Avoid generic phrases like “esteemed organization” or “keen to apply”
- Avoid repetition like “I am confident… I am confident…”
- No subject lines, no closings like “Sincerely” or “Best regards”
- Focus on what the applicant can bring to the role

Use this structure as inspiration:

Dear Apple Team,

I am writing to express my interest in the Product Manager position.

My experience in the realm combined with my skills in HTML, CSS and doing things in time make me a strong candidate for this role.

I want to help you build awesome solutions to accomplish your goals and vision. I can create intuitive and aesthetically pleasing devices that are very easy to use.

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.

Now generate a message for:

Company: ${label}
Role: ${jobTitle}
Skills: ${skills}
Additional context: ${details}
`.trim();
};
