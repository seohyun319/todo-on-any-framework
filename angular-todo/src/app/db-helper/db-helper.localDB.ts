import { TodoState, Todo } from '../models/todo';
import { TodoDBSaver } from './db-helper.abstract';

// 추상 클래스 구현
export class LocalDBSaver extends TodoDBSaver {
  private localDBKey = 'todo-app-data';

  localDBSaver(todosObjData: Todo[]) {
    try {
      // localStorage는 string 형태 요구 - 직렬화가 가능한 데이터가 들어오길 기대해서
      localStorage.setItem(this.localDBKey, JSON.stringify(todosObjData));
    } catch (e) {
      console.log('LocalDBSaver save 에러');
    }
  }

  add(todo: string) {
    const todoObj = this.todoObjBuilder(todo);
    const prevTodos = this.allTodo || [];
    let todoObjData;
    if (prevTodos.length === 0) {
      todoObjData = new Array(todoObj);
    } else {
      todoObjData = prevTodos.concat(todoObj);
    }
    this.localDBSaver(todoObjData);
  }

  get allTodo() {
    const localData = JSON.parse(
      localStorage.getItem(this.localDBKey) || '[]'
    ) as Todo[];
    return localData;
  }

  updateTodoState(id: number, toState: TodoState) {
    const allTodo = this.allTodo;
    const todoIdx = allTodo.findIndex((todo) => todo.id === id);
    allTodo[todoIdx].state = toState;
    this.localDBSaver(allTodo);
  }

  delete(id: number) {
    const allTodo = this.allTodo;
    const filteredTodos = allTodo.filter((todo) => todo.id !== id);
    this.localDBSaver(filteredTodos);
  }
}
