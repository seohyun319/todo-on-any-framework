import { Injectable } from '@angular/core';
import { TodoDBSaver } from '../db-helper/db-helper.abstract';
import { TodoState } from '../models/todo';

// ng g s service/todos로 생성

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private dataSaver: TodoDBSaver) {}

  get allTodos() {
    return this.dataSaver.allTodo;
  }

  add(todo: string) {
    this.dataSaver.add(todo);
  }

  delete(id: number) {
    this.dataSaver.delete(id);
  }
  updateState(id: number, state: TodoState) {
    this.dataSaver.updateTodoState(id, state);
  }
}
