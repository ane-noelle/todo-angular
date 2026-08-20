import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-from',
  imports: [FormsModule],
  templateUrl: './todo-from.html',
  styleUrl: './todo-from.css',
})
export class TodoForm {
readonly todoAdded = output<string>();
title = '';

submit(): void {
  const normalizedTitle = this.title.trim();

  if(!normalizedTitle) {
    return;
  }
  this.todoAdded.emit(normalizedTitle);
  this.title = '';
}
}
