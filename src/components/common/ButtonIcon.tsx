import icons from '../../assets/icons.svg';
import { Icon } from '../../types';

interface ButtonIconProps extends React.ComponentPropsWithoutRef<'button'> {
  icon: Icon;
}

export function ButtonIcon({ icon, ...otherProps }: ButtonIconProps) {
  return (
    <button {...otherProps}>
      <svg className="block w-5 h-5 fill-current">
        <use href={icons + '#' + icon}></use>
      </svg>
    </button>
  );
}
