type TextAreaProps = React.HTMLProps<HTMLTextAreaElement>;

export default function TextArea({ className, ...otherProps }: TextAreaProps) {
  return (
    <textarea
      className={`w-full rounded-md border border-dark-200 px-3 py-2 text-sm ${className}`}
      {...otherProps}
    />
  );
}
