import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // store value of input
  todoItem: string = '';

  // store the list of todo item
  todoList: string[] = [];
  addTodoList = () =>{
    // Pushing todo item to list
    this.todoList.push(this.todoItem)
    // clear the value of todoItem
    this.todoItem = ''
  }
}
