import { useRef } from 'react';
import { useRouter } from 'next/router';

import debounce from 'lodash-es/debounce';

import Button from 'components/atoms/Button';

type MediaFiltersSectionProps = React.HTMLProps<HTMLDivElement>;

export default function MediaFiltersSection({
  className,
}: MediaFiltersSectionProps) {
  const router = useRouter();
  const titleRef = useRef(null);
  const genreRef = useRef(null);

  const handleFieldChange = debounce((fieldName: string, value: string) => {
    router.push({
      query: {
        ...router.query,
        [fieldName]: value,
      },
    });
  }, 500);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clearInput = (ref: any) => {
    if (ref?.current?.value) {
      ref.current.value = '';
    }
  };

  const handleClear = () => {
    router.push({
      query: {},
    });
    clearInput(titleRef);
    clearInput(genreRef);
  };

  return (
    <section className={`flex space-x-2 ${className}`}>
      <input
        className="w-4/6 rounded-md border border-dark-200 px-4 py-3"
        name="title"
        onChange={(event) => handleFieldChange('title', event?.target?.value)}
        placeholder="Search title..."
        ref={titleRef}
        type="input"
      />
      <select
        className="w-2/6 rounded-md border border-dark-200 px-4 py-3"
        name="genre"
        onChange={(event) => handleFieldChange('genre', event?.target?.value)}
        ref={genreRef}
      >
        <option disabled value="">
          Search genre
        </option>
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="comedy">Comedy</option>
        <option value="crime">Crime</option>
        <option value="drama">Drama</option>
        <option value="fantasy">Fantasy</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="romance">Romance</option>
        <option value="thriller">Thriller</option>
      </select>
      <Button onClick={handleClear} variation="light">
        Clear
      </Button>
    </section>
  );
}
