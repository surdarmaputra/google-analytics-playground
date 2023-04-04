import { ModuleName } from 'libs/analytics/types';
import { Media } from 'types';

import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import MediaCatalogueSection from 'components/organisms/MediaCatalogueSection';
import MediaFiltersSection from 'components/organisms/MediaFiltersSection';
import SubscribeSection from 'components/organisms/SubscribeSection';

interface CatalogueProps {
  title: string;
  items: Media[];
  moduleName: ModuleName;
}

export default function Catalogue({
  title,
  items,
  moduleName,
}: CatalogueProps) {
  return (
    <>
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-4 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <Header />
      <h1 className="container my-24 mx-auto px-8 md:px-12">{title}</h1>
      <MediaFiltersSection className="container mx-auto mb-20 px-8 md:px-12" />
      <section className="container mx-auto mb-20 px-8 md:px-12">
        <MediaCatalogueSection items={items} moduleName={moduleName} />
      </section>
      <SubscribeSection />
      <Footer />
    </>
  );
}
