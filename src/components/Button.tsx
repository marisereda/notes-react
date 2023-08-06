interface ButtonProps {
  variant: 'dark' | 'light';
  type: 'button' | 'submit' | 'reset' | undefined;
  children: string;
}

export function Button({ variant, type, children }: ButtonProps) {
  const lightStyle =
    'min-w-[100px] block border border-teal-700 bg-slate-100 py-2 px-3 text-teal-700 rounded hover:text-white hover:bg-teal-800 active:translate-y-[1px] transition';
  const darkStyle =
    'min-w-[100px] block border border-teal-700 bg-teal-700 py-2 px-3 text-white rounded hover:bg-teal-800 active:translate-y-[1px] transition';
  // const style=variant==="dark"? darkStyle: lightStyle
  return (
    <button
      type={type}
      id="new-note-save"
      className={variant === 'dark' ? darkStyle : lightStyle}
    >
      {children}
    </button>
  );
}
