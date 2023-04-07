import { useEffect } from 'react';

import { setGlobalTrackerProperties, trackEvent } from 'libs/analytics';
import { ButtonId } from 'libs/analytics/types';

export default function Hero() {
  const handleStartWatchingClick = () => {
    trackEvent({
      name: 'button_click',
      id: ButtonId.StartWatching,
    });
  };

  const handlePricingClick = () => {
    trackEvent({
      name: 'button_click',
      id: ButtonId.Pricing,
    });
  };

  useEffect(() => {
    setGlobalTrackerProperties();
  }, []);

  return (
    <section className="container mx-auto px-8 py-36 text-center sm:px-20">
      <div className="absolute left-0 top-64 -z-10 h-72 w-72 rounded-full bg-violet-500 opacity-10 blur-3xl dark:bg-violet-700"></div>
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl dark:bg-danger-800"></div>

      <h1 className="mb-12 text-5xl font-extrabold leading-tight dark:text-slate-50 sm:text-6xl">
        Discover the Magic of Cinema
      </h1>
      <p className="mb-12 leading-relaxed text-slate-700 dark:text-slate-400">
        Experience the magic of cinema with our extensive collection of movies -
        from action-packed adventures to heartwarming romances. Sit back, grab
        some popcorn, and let the show begin!
      </p>
      <div className="mx-auto flex w-fit flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button
          className="rounded-md border-0 bg-violet-500 px-12 py-2 text-base text-white shadow-lg shadow-violet-300 transition hover:bg-violet-600 hover:shadow-violet-400 dark:shadow-violet-900"
          onClick={handleStartWatchingClick}
        >
          Start Watching
        </button>
        <button
          className="rounded-md border-0 bg-slate-100 px-12 py-2 text-base text-dark-900 shadow-lg shadow-slate-100 transition hover:bg-white hover:shadow-slate-200 dark:shadow-slate-600"
          onClick={handlePricingClick}
        >
          Pricing
        </button>
      </div>
    </section>
  );
}
