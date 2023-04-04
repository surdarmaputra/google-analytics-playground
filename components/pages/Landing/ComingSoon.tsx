import { ModuleName } from 'libs/analytics/types';
import { Media } from 'types';

import MediaCatalogueSection from 'components/organisms/MediaCatalogueSection';

const movies: Media[] = [
  {
    title: 'The French Dispatch',
    secondaryTitle: 'Comedy, Drama, Romance',
    description: "A love letter to journalists set in an outpost of an American newspaper in a fictional 20th-century French city and brings to life a collection of stories published in 'The French Dispatch' magazine.",
  },
  {
    title: 'Dune',
    secondaryTitle: 'Action, Adventure, Drama',
    description: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
  },
  {
    title: 'No Time to Die',
    secondaryTitle: 'Action, Adventure, Thriller',
    description: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
  },
  {
    title: 'Eternals',
    secondaryTitle: 'Action, Adventure, Drama',
    description: 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.',
  },
  {
    title: 'The Batman',
    secondaryTitle: 'Action, Crime, Drama',
    description: 'The Riddler has returned to terrorize Gotham City, but his gruesome puzzles merely foreshadow an even greater crisis. With the arrival of a ruthless federal agent and the return of a still nascent Joker, Batman must navigate uneasy alliances while Bruce Wayne undertakes a perilous series of deceptions.',
  },
];

export default function ComingSoon() {
  const title = 'Coming Soon';

  return (
    <section className='container mx-auto mb-20 px-8 md:px-12'>
      <h2>{title}</h2>
      <MediaCatalogueSection items={movies} moduleName={ModuleName.Landing} />
    </section>
  );
}