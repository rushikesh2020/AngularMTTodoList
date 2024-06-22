import { Component } from '@angular/core';
import { Itodos } from './models/todos.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MachineTest_IO_TodoList';
  todoArray: Array<Itodos> = [
    // {
    //   todoItem: 'JavaScript',
    // },
  ];

  getTodos(todo: Itodos) {
    console.log(todo);
    this.todoArray.unshift(todo);
  }
}
