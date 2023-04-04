import { ModuleName } from 'libs/analytics/types';
import { Media } from 'types';

import MediaCatalogueSection from 'components/organisms/MediaCatalogueSection';

const movies: Media[] = [
  {
    title: 'The Shawshank Redemption',
    secondaryTitle: 'Drama',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
 },
  {
    title: 'The Godfather',
    secondaryTitle: 'Crime, Drama',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  },
  {
    title: 'The Dark Knight',
    secondaryTitle: 'Action, Crime, Drama',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    secondaryTitle: 'Action, Adventure, Drama',
    description: 'A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.',
  },
  {
    title: 'Pulp Fiction',
    secondaryTitle: 'Crime, Drama',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  },
];

export default function Trending() {
  const title = 'Trending';

  return (
    <section className='container mx-auto mb-20 px-8 md:px-12'>
      <h2>{title}</h2>
      <MediaCatalogueSection items={movies} moduleName={ModuleName.Landing} />
    </section>
  );
}