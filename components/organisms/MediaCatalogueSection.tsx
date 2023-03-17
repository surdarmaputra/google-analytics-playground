import { trackEvent } from 'libs/analytics';
import { Media } from 'types';

import MediaCard from 'components/molecules/MediaCard';

interface MediaCatalogueSectionProps {
  catalogueTitle?: string;
  items: Media[];
}

export default function MediaCatalogueSection({ items, catalogueTitle }: MediaCatalogueSectionProps) {
  const handleItemClick = (index: number, properties: { title: string }) => {
    trackEvent({
      name: 'media_click',
      title: properties.title,
      catalogue_title: catalogueTitle,
      catalogue_item_index: index,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {items.map(({ title, secondaryTitle, description }, index) => (
        <MediaCard
          description={description}
          key={index}
          onClick={() => handleItemClick(index, { title })}
          secondaryTitle={secondaryTitle}
          title={title}
        />
      ))}
    </div>
  );
}