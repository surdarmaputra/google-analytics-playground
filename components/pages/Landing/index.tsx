import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';

import Subscribe from '../../organisms/SubscribeSection';
import ComingSoon from './ComingSoon';
import Hero from './Hero';
import Trending from './Trending';
import TVSeries from './TVSeries';

export default function Landing() {
  return (
    <>
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-4 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <Header />
      <Hero />
      <Trending />
      <ComingSoon />
      <TVSeries />
      <Subscribe />
      <Footer />
    </>
  );
}