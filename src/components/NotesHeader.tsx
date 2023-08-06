import { ButtonIcon } from './ButtonIcon';

interface NotesHeaderProps {
  headerButtons: Record<string, string>[];
}

export function NotesHeader({ headerButtons }: NotesHeaderProps) {
  return (
    <div className="flex items-center justify-center gap-2 p-3 mb-3 text-white bg-teal-700 rounded">
      <div className="w-1/12"></div>
      <p className="w-2/12">Name</p>
      <p className="w-2/12">Created</p>
      <p className="w-2/12">Category</p>
      <p className="w-2/12">Content</p>
      <p className="w-2/12">Dates</p>
      <div className="flex w-1/12 gap-3">
        {headerButtons.map(({ icon, operation }) => (
          <ButtonIcon icon={icon} operation={operation} />
        ))}
      </div>
    </div>
  );
}
