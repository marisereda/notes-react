export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'dark' | 'light';
}

export function Button({ variant, children, ...otherProps }: ButtonProps) {
  const lightStyle =
    'min-w-[100px] block border border-teal-700 bg-slate-100 py-2 px-3 text-teal-700 rounded hover:text-white hover:bg-teal-800 active:translate-y-[1px] transition';
  const darkStyle =
    'min-w-[100px] block border border-teal-700 bg-teal-700 py-2 px-3 text-white rounded hover:bg-teal-800 active:translate-y-[1px] transition';

  return (
    <button
      className={variant === 'dark' ? darkStyle : lightStyle}
      {...otherProps}
    >
      {children}
    </button>
  );
}
