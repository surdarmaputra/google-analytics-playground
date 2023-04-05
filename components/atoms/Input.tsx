type InputProps = React.HTMLProps<HTMLInputElement>;

export default function Input({ className, ...otherProps }: InputProps) {
  return (
    <input
      className={`w-full rounded-md border border-dark-200 px-3 py-2 text-sm ${className}`}
      {...otherProps}
    />
  );
}
