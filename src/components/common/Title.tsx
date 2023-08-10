interface TitleProps {
  children: string;
}

export function Title({ children }: TitleProps) {
  return (
    <h2 className="mb-3 text-xl font-semibold text-teal-700 uppercase">
      {children}
    </h2>
  );
}
