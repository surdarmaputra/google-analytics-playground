import { ModuleName } from 'libs/analytics/types';
import { Media } from 'types';

import MediaCatalogueSection from 'components/organisms/MediaCatalogueSection';

const movies: Media[] = [
  {
    title: 'Stranger Things',
    secondaryTitle: 'Drama, Fantasy, Horror',
    description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
  },
  {
    title: 'Breaking Bad',
    secondaryTitle: 'Crime, Drama, Thriller',
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
  },
  {
    title: 'Game of Thrones',
    secondaryTitle: 'Action, Adventure, Drama',
    description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
  },
  {
    title: 'The Office',
    secondaryTitle: 'Comedy',
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
  },
  {
    title: 'Stranger Things',
    secondaryTitle: 'Drama, Fantasy, Horror',
    description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
  },
];

export default function TVSeries() {
  const title = 'TV Series';

  return (
    <section className='container mx-auto mb-20 px-8 md:px-12'>
      <h2>{title}</h2>
      <MediaCatalogueSection items={movies} moduleName={ModuleName.Landing} />
    </section>
  );
}