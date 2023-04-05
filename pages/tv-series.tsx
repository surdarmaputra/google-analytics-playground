import Head from 'next/head';

import { ModuleName } from 'libs/analytics/types';

import Catalogue from 'components/pages/Catalogue';

const movies = [
  {
    title: 'Breaking Bad',
    secondaryTitle: 'Crime, Drama, Thriller',
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
  },
  {
    title: 'Game of Thrones',
    secondaryTitle: 'Action, Adventure, Drama',
    description:
      'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
  },
  {
    title: 'Friends',
    secondaryTitle: 'Comedy, Romance',
    description:
      'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
  },
  {
    title: 'The Sopranos',
    secondaryTitle: 'Crime, Drama',
    description:
      'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.',
  },
  {
    title: 'The Office',
    secondaryTitle: 'Comedy',
    description:
      'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
  },
  {
    title: 'Stranger Things',
    secondaryTitle: 'Drama, Fantasy, Horror',
    description:
      'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
  },
  {
    title: 'The Crown',
    secondaryTitle: 'Biography, Drama, History',
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
  },
  {
    title: 'Black Mirror',
    secondaryTitle: 'Drama, Sci-Fi, Thriller',
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
  },
  {
    title: "The Handmaid's Tale",
    secondaryTitle: 'Drama, Sci-Fi, Thriller',
    description:
      'Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.',
  },
  {
    title: 'The Big Bang Theory',
    secondaryTitle: 'Comedy, Romance',
    description:
      'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.',
  },
  {
    title: 'Mindhunter',
    secondaryTitle: 'Crime, Drama, Thriller',
    description:
      'Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.',
  },
  {
    title: 'Peaky Blinders',
    secondaryTitle: 'Crime, Drama',
    description:
      'A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
  },
  {
    title: 'Narcos',
    secondaryTitle: 'Biography, Crime, Drama',
    description:
      'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.',
  },
];

export default function TVSeries() {
  return (
    <>
      <Head>
        <title>SurPlay</title>
        <meta
          content="Starter kit for Next.js project using Typescript and Tailwind CSS"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Catalogue
        items={movies}
        moduleName={ModuleName.TVSeries}
        title="TV Series"
      />
    </>
  );
}
