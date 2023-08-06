interface SelectProps {
  options: string[];
}

export function Select({ options }: SelectProps) {
  return (
    <label className="relative block">
      <select
        name="category"
        className="p-4 text-lg border rounded-md outline-none bg-slate-100 border-slate-400 focus:border-slate-700"
      >
        {options.map((option) => (
          <option className="p-2 mb-2" value={option}>
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
