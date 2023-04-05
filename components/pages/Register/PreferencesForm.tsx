import { capitalize } from 'lodash-es';

const genres = [
  'action',
  'adventure',
  'comedy',
  'crime',
  'drama',
  'fantasy',
  'sci-fi',
  'romance',
  'thriller',
];

export default function PersonalInfoForm() {
  return (
    <div>
      <div className="mb-2 block text-sm font-semibold">Genre preference</div>

      {genres.map((value) => (
        <div className="flex items-center justify-start" key={value}>
          <input className="mr-2" name="genre" type="checkbox" value={value} />
          <label htmlFor={value}>{capitalize(value)}</label>
        </div>
      ))}
    </div>
  );
}
