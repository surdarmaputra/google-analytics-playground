import { ReactNode } from 'react';

interface FieldProps {
  title?: string;
  children?: ReactNode;
}

export default function Field({ title, children }: FieldProps) {
  return (
    <label className="w-full">
      <span className="mb-2 block text-sm font-semibold">{title}</span>
      {children}
    </label>
  );
}
