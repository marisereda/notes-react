interface InputProps {
  defaultValue: string;
}

export function Input({ defaultValue }: InputProps) {

  return (
    <label className="relative block w-full">
      <input
        className="block w-full p-4 text-lg border rounded-md outline-none bg-slate-100 border-slate-400 focus:border-slate-700"
        required
        name="name"
        defaultValue={defaultValue}
      />
      <span className="absolute -top-1/4 left-[10px] px-2 text-md text-teal-700 font-semibold bg-slate-100">
        Name
      </span>
    </label>
  );
}
