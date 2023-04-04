import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { trackEvent } from 'libs/analytics';
import { ModuleName } from 'libs/analytics/types';
import { Media } from 'types';

import MediaCard from 'components/molecules/MediaCard';

interface MediaCatalogueSectionProps {
  items: Media[];
  moduleName: ModuleName;
}

export default function MediaCatalogueSection({
  items,
  moduleName,
}: MediaCatalogueSectionProps) {
  const router = useRouter();

  const displayedItems = useMemo(
    () =>
      items?.filter((item) => {
        const { title, genre } = router.query;
        let valid = true;

        if (typeof title === 'string') {
          valid =
            valid && item.title.toLowerCase().includes(title.toLowerCase());
        }

        if (Array.isArray(title)) {
          valid =
            valid &&
            title.some((titleItem) =>
              item.title.toLowerCase().includes(titleItem.toLowerCase()),
            );
        }

        if (typeof genre === 'string' && item?.secondaryTitle) {
          valid =
            valid &&
            item.secondaryTitle.toLowerCase().includes(genre.toLowerCase());
        }

        if (Array.isArray(genre) && item?.secondaryTitle) {
          valid =
            valid &&
            genre.some((genreItem) =>
              item.secondaryTitle
                ?.toLowerCase()
                .includes(genreItem.toLowerCase()),
            );
        }

        return valid;
      }),
    [items, router.query],
  );

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
      {displayedItems.map((item, index) => (
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
