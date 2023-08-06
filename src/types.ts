export interface Note {
  id: string;
  name: string;
  category: Category['name'];
  created: number;
  content: string;
  archived: boolean;
}

export type CreateNote = Pick<Note, 'name' | 'category' | 'content'>;

export type UpdateNote = Pick<Note, 'id' | 'name' | 'category' | 'content'>;

export interface Category {
  icon: string;
  name: 'Idea' | 'Random Thought' | 'Task';
}

export interface CategoryTableData extends Category {
  activeNumber: number;
  zipNumber: number;
}
