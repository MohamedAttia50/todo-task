import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Tasks } from '../to-do-app/tasks.model';

@Component({
  selector: 'app-to-do-list',
  imports: [],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
  standalone:true
})
export class ToDoList {
@Input({required:true}) tasks:Tasks[]=[];
@Output() deleteTask=new EventEmitter<number>();
@Output() toggleComplete=new EventEmitter<number>();
@Output() startEdit=new EventEmitter<Tasks>();

toDeleteTask(taskId:number){
  this.deleteTask.emit(taskId)
}

toggleCompleteHandler(taskId:number){
  this.toggleComplete.emit(taskId)
}

startEditTask(task:Tasks){
  this.startEdit.emit(task)
}

}
