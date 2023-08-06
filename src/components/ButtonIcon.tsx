interface ButtonIconProps {
  icon: string;
  onClick: () => void;
}

export function ButtonIcon({ icon, onClick }: ButtonIconProps) {
  return (
    <button onClick={onClick}>
      <svg className="block w-5 h-5 fill-current">
        <use href={icon}></use>
      </svg>
    </button>
  );
}
