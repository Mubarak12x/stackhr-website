import { PrimaryButton } from '../components/Buttons';

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue">404</p>
      <h1 className="mt-4 text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-8 text-slate-600 dark:text-slate-300">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8">
        <PrimaryButton href="/">Back to Home</PrimaryButton>
      </div>
    </main>
  );
}
