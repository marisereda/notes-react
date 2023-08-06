interface TextAreaProps {
  defaultValue: string;
}

export function TextArea({ defaultValue }: TextAreaProps) {
  return (
    <label className="relative block w-full mb-6">
      <textarea
        className="w-full p-4 text-lg border rounded-md outline-none resize-none bg-slate-100 border-slate-400 focus:border-slate-700"
        required
        rows={5}
        name="content"
        defaultValue={defaultValue}
      ></textarea>
      <span className="absolute -top-[16px] left-[10px] px-2 text-md text-teal-700 font-semibold bg-slate-100">
        Note
      </span>
    </label>
  );
}
