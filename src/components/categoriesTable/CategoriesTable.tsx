import { useSelector } from 'react-redux';
import { selectCategoriesTableData } from '../../redux/notesSelectors';
import { CategoriesHeader } from './CategoriesHeader';
import { CategoriesItem } from './CategoriesItem';

export function CategoriesTable() {
  const categoryTableData = useSelector(selectCategoriesTableData);

  return (
    <>
      <CategoriesHeader />
      <ul className="flex flex-col gap-2 text-slate-700">
        {categoryTableData.map((category) => (
          <CategoriesItem key={category.name} category={category} />
        ))}
      </ul>
    </>
  );
}
