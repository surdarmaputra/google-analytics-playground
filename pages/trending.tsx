import Head from 'next/head';

import { ModuleName } from 'libs/analytics/types';

import Catalogue from 'components/pages/Catalogue';

const movies = [
  {
    title: 'The Godfather',
    secondaryTitle: 'Crime, Drama',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  },
  {
    title: 'The Shawshank Redemption',
    secondaryTitle: 'Drama',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
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
  {
    title: 'The Good, the Bad and the Ugly',
    secondaryTitle: 'Western',
    description: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
  },
  {
    title: 'Fight Club',
    secondaryTitle: 'Drama',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
  },
  {
    title: 'Forrest Gump',
    secondaryTitle: 'Drama, Romance',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, and the Watergate scandal are seen through the eyes of a simple-minded but kind-hearted and athletically-talented man.',
  },
  {
    title: 'Inception',
    secondaryTitle: 'Action, Adventure, Sci-Fi',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
  },
  {
    title: 'The Matrix',
    secondaryTitle: 'Action, Sci-Fi',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    secondaryTitle: 'Action, Adventure, Fantasy',
    description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
  },
  {
    title: 'The Silence of the Lambs',
    secondaryTitle: 'Crime, Drama, Thriller',
    description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
  },
];

export default function Trending() {
  return (
    <>
      <Head>
        <title>Google Analytics Playground</title>
        <meta
          content="Starter kit for Next.js project using Typescript and Tailwind CSS"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Catalogue items={movies} moduleName={ModuleName.Trending} title="Trending Movies" />
    </>
  );
}