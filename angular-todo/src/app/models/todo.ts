// ng g i models/todo 로 생성

export const enum TodoState {
  DELETED = 'Deleted',
  DONE = 'Done',
  NORMAL = 'Normal',
}

export interface Todo {
  id: number;
  todo: string;
  state: TodoState;
}
