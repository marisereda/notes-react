export function CategoriesHeader() {
  return (
    <div className="flex items-center justify-center gap-2 p-3 mb-3 text-white bg-teal-700 rounded">
      <div className="w-1/12"></div>
      <p className="w-4/12">Note category</p>
      <p className="w-3/12 text-center">Active</p>
      <p className="w-3/12 text-center">Archived</p>
      <div className="w-1/12"></div>
    </div>
  );
}
