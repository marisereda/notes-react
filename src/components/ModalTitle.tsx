interface ModalTitleProps {
  children: string;
}

export function ModalTitle({ children }: ModalTitleProps) {
  return (
    <h2 className="px-4 py-3 mb-8 text-lg text-white bg-teal-700">
      {children}
    </h2>
  );
}
