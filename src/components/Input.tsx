import { useRef } from 'react';

interface InputProps {
  content: string;
}

export function Input({ content = '' }: InputProps) {
  const inputEl = useRef(null);
  console.log('🚧 inputEl.current:', inputEl.current)

  // if (content){inputEl.current?.value = content}
  return (
    <label className="relative block w-full">
      <input
        ref={inputEl}
        required
        name="name"
        className="block w-full p-4 text-lg border rounded-md outline-none bg-slate-100 border-slate-400 focus:border-slate-700"
      />
      <span className="absolute -top-1/4 left-[10px] px-2 text-md text-teal-700 font-semibold bg-slate-100">
        Name
      </span>
    </label>
  );
}
