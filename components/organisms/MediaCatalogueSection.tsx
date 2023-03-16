import { Media } from 'types';

import MediaCard from 'components/molecules/MediaCard';

interface MediaCatalogueSectionProps {
  items: Media[];
}

export default function MediaCatalogueSection({ items }: MediaCatalogueSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {items.map(({ title, secondaryTitle, description }, index) => (
        <MediaCard
          description={description}
          key={index}
          secondaryTitle={secondaryTitle}
          title={title}
        />
      ))}
    </div>
  );
}