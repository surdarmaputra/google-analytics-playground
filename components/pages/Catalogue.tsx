import { Media } from 'types';

import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import MediaCatalogueSection from 'components/organisms/MediaCatalogueSection';
import SubscribeSection from 'components/organisms/SubscribeSection';

interface CatalogueProps {
  title: string;
  items: Media[];
}

export default function Catalogue({ title, items }: CatalogueProps) {
  return (
    <>
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-4 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <Header />
      <h1 className='my-24 container mx-auto px-8 md:px-12'>
        {title}
      </h1>
      <section className='container mx-auto mb-20 px-8 md:px-12'>
        <MediaCatalogueSection items={items} />
      </section>
      <SubscribeSection />
      <Footer />
    </>
  );
}