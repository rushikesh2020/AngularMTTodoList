import { Component, Input, OnInit } from '@angular/core';
import { Itodos } from 'src/app/models/todos.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() gettodoArray!: Array<Itodos>;
}
