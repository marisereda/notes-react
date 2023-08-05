interface ButtonIconProps {
  icon: string;
  operation: string;
}

export function ButtonIcon({ icon, operation }: ButtonIconProps) {
  return (
    <button data-operation={operation}>
      <svg className="block w-5 h-5 fill-current">
        <use href={icon}></use>
      </svg>
    </button>
  );
}
