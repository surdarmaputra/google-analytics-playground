import { trackEvent } from 'libs/analytics';
import { ModuleName } from 'libs/analytics/types';
import { Media } from 'types';

import MediaCard from 'components/molecules/MediaCard';

interface MediaCatalogueSectionProps {
  items: Media[];
  moduleName: ModuleName;
}

export default function MediaCatalogueSection({ items, moduleName }: MediaCatalogueSectionProps) {
  const handleItemClick = (index: number, item: Media) => {
    trackEvent({
      name: 'media_click',
      module_name: moduleName,
      item_position_index: index,
      title: item.title,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {items.map((item, index) => (
        <MediaCard
          description={item.description}
          key={index}
          onClick={() => handleItemClick(index, item)}
          secondaryTitle={item.secondaryTitle}
          title={item.title}
        />
      ))}
    </div>
  );
}