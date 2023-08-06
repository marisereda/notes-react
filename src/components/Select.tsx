interface SelectProps {
  options: string[];
  defaultValue: string;
}

export function Select({ options, defaultValue }: SelectProps) {
  return (
    <label className="relative block">
      <select
        className="p-4 text-lg border rounded-md outline-none bg-slate-100 border-slate-400 focus:border-slate-700"
        name="category"
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option} className="p-2 mb-2" value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="absolute -top-1/4 left-[10px] px-2 text-md text-teal-700 font-semibold bg-slate-100">
        Category
      </span>
    </label>
  );
}
