# Alt+Shift

A modern job application generator that helps you create personalized applications quickly and efficiently.

## Technical Details

This is a client-side only Next.js application that uses:

- LocalStorage for data persistence
- React Query for data management
- OpenAI API for application generation
- Modern React patterns and hooks

The app is intentionally built as a client-side only application because it relies heavily on LocalStorage for data persistence and needs immediate access to browser APIs.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Development

- The app uses Turbopack for faster development
- All state management is handled client-side
- Components are designed to work with client-side data
- No server-side rendering is used to avoid hydration issues

## Deployment

The app can be deployed to any static hosting service that supports Next.js, such as:

- Vercel
- Netlify
- GitHub Pages

Remember to set up your environment variables in your hosting platform.
