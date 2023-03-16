import Head from 'next/head';

import Catalogue from 'components/pages/Catalogue';

const movies = [
  {
    title: 'Avatar: The Way of Water',
    secondaryTitle: 'Action, Adventure, Fantasy',
    description: "Sequel to the 2009 sci-fi film 'Avatar' which is set underwater.",
  },
  {
    title: 'Black Panther: Wakanda Forever',
    secondaryTitle: 'Action, Adventure, Drama',
    description: "The sequel to the 2018 film 'Black Panther', which explores the world of Wakanda and its people.",
  },
  {
    title: 'Fantastic Beasts: The Secrets of Dumbledore',
    secondaryTitle: 'Adventure, Family, Fantasy',
    description: "The third installment in the 'Fantastic Beasts' series, which follows Newt Scamander as he teams up with Albus Dumbledore to take down the dark wizard Gellert Grindelwald.",
  },
  {
    title: 'The Flash',
    secondaryTitle: 'Action, Adventure, Fantasy',
    description: 'A feature film adaptation of the popular DC Comics character, which follows Barry Allen as he gains superhuman speed and uses his powers to fight crime.',
  },
  {
    title: 'Jurassic World: Dominion',
    secondaryTitle: 'Action, Adventure, Sci-Fi',
    description: "The third film in the 'Jurassic World' franchise, which sees the return of the original 'Jurassic Park' cast as they confront dinosaurs who have taken over the world.",
  },
  {
    title: 'The Lost City',
    secondaryTitle: 'Action, Adventure, Comedy',
    description: 'A reclusive romance novelist and a handsome adventurer team up to find a legendary city of gold, but they must fight off dangerous enemies to get there.',
  },
  {
    title: 'Nightmare Alley',
    secondaryTitle: 'Drama, Mystery, Thriller',
    description: 'A reimagining of the 1947 film noir classic, which follows a manipulative con artist who teams up with a psychiatrist to swindle people out of their money.',
  },
  {
    title: 'Puss in Boots: The Last Wish',
    secondaryTitle: 'Animation, Adventure, Comedy',
    description: "The fourth film in the 'Shrek' franchise, which follows Puss in Boots as he sets out on a new adventure to find the legendary Last Wish.",
  },
  {
    title: 'Sonic the Hedgehog 2',
    secondaryTitle: 'Action, Adventure, Comedy',
    description: "The sequel to the 2020 film 'Sonic the Hedgehog', which follows Sonic and his friends as they try to stop the evil Dr. Robotnik from taking over the world.",
  },
  {
    title: 'Spider-Man: Across the Spider-Verse - Part One',
    secondaryTitle: 'Animation, Action, Adventure',
    description: "The first part of a two-part animated film that continues the story of 'Spider-Man: Into the Spider-Verse', which follows Miles Morales as he teams up with other Spider-People from different dimensions.",
  },
  {
    title: 'The Super Mario Bros. Movie',
    secondaryTitle: 'Animation, Adventure, Comedy',
    description: "An animated film adaptation of the popular 'Super Mario Bros.' video game franchise, which follows Mario and Luigi as they journey through the Mushroom Kingdom to save Princess Peach from the evil Bowser.",
  },
  {
    title: 'Thor: Love and Thunder',
    secondaryTitle: 'Action, Adventure, Fantasy',
    description: "The fourth film in the 'Thor' franchise, which follows Thor as he teams up with Jane Foster to battle a new threat.",
  },
];

export default function UpcomingMovies() {
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

      <Catalogue items={movies} title="Upcoming Movies" />
    </>
  );
}