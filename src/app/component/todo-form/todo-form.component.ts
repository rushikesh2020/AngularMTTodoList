import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodos } from 'src/app/models/todos.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  constructor() {}

  @ViewChild('todoForm') todoForm!: NgForm;

  @Output() emmitTodo = new EventEmitter<Itodos>();

  onTodoAdd() {
    if (this.todoForm.valid) {
      let newTodo = this.todoForm.value;
      console.log(newTodo);
      this.emmitTodo.emit(newTodo);
      // this.todoArray.push(newTodo);
    }
  }
}
