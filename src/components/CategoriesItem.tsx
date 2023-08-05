import { getCategoryIcon } from '../helpers';
import { Category } from '../models';
import icons from '../assets/icons.svg';

interface CategoriesItemProps {
  category: Category;
}

export function CategoriesItem({ category }: CategoriesItemProps) {
  return (
    <li
      data-category="${category}"
      className="flex items-center justify-center gap-2 p-3 border rounded bg-slate-200 border-slate-400"
    >
      <div className="w-1/12">
        <svg className="block p-2 mx-auto bg-teal-700 rounded-full fill-white w-9 h-9">
          <use href={getCategoryIcon(category.name)}></use>
        </svg>
      </div>
      <p className="w-4/12">{category.name}</p>
      <p className="w-3/12 text-center">0</p>
      <p className="w-3/12 text-center">0</p>
      <div className="w-1/12 text-teal-700">
        <button>
          <svg className="block w-5 h-5 fill-current">
            <use href={`${icons}#icon-open`}></use>
          </svg>
        </button>
      </div>
    </li>
  );
}
