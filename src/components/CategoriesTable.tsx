import { CategoriesHeader } from './CategoriesHeader';
import { initialCategories } from '../constants';
import { CategoriesItem } from './CategoriesItem';

// interface CategoriesTableProps {}

export function CategoriesTable() {
  return (
    <>
      <CategoriesHeader />
      <ul id="categories-list" className="flex flex-col gap-2 text-slate-700">
        {initialCategories.map((category) => (
          <CategoriesItem category={category} />
        ))}
      </ul>
    </>
  );
}
