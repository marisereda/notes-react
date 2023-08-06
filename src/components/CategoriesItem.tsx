import { useDispatch } from 'react-redux';
import { getCategoryIcon } from '../helpers';
import icons from '../assets/icons.svg';
import { CategoryTableData } from '../types';
import { openArchiveModal } from '../redux/notesSlice';
import { ButtonIcon } from './ButtonIcon';

interface CategoriesItemProps {
  category: CategoryTableData;
}

export function CategoriesItem({ category }: CategoriesItemProps) {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-center gap-2 p-3 border rounded bg-slate-200 border-slate-400">
      <div className="w-1/12">
        <svg className="block p-2 mx-auto bg-teal-700 rounded-full fill-white w-9 h-9">
          <use href={getCategoryIcon(category.name)}></use>
        </svg>
      </div>
      <p className="w-4/12">{category.name}</p>
      <p className="w-3/12 text-center">{category.activeNumber}</p>
      <p className="w-3/12 text-center">{category.zipNumber}</p>
      <div className="w-1/12 text-teal-700">
        <ButtonIcon
          icon={`${icons}#icon-open`}
          onClick={() => dispatch(openArchiveModal(category.name))}
        />
      </div>
    </li>
  );
}
