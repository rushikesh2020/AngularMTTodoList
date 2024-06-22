import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, TodoFormComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
