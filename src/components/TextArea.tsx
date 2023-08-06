import { useRef } from 'react';

interface TextAreaProps {
  content: string;
}

export function TextArea({ content }: TextAreaProps) {
  const textAreaEl = useRef(null);
  console.log('🚧 inputEl.current:', textAreaEl.current);
  return (
    <label className="relative block w-full mb-6">
      <textarea
        ref={textAreaEl}
        required
        rows={5}
        name="content"
        className="w-full p-4 text-lg border rounded-md outline-none resize-none bg-slate-100 border-slate-400 focus:border-slate-700"
      ></textarea>
      <span className="absolute -top-[16px] left-[10px] px-2 text-md text-teal-700 font-semibold bg-slate-100">
        Note
      </span>
    </label>
  );
}
