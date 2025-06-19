import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Tasks } from '../to-do-app/tasks.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  imports: [NgStyle],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
  standalone:true
})
export class ToDoList {

@Input({required:true}) tasks:Tasks[]=[];
@Output () deleteTask=new EventEmitter<number>();
@Output () completeTask=new EventEmitter<number>();
@Output () updateTask=new EventEmitter<Tasks>();


toDeleteTask(taskId:number){
  this.deleteTask.emit(taskId);
}

toCompleteTask(taskId:number){
this.completeTask.emit(taskId);
}

toUpdateTask(task:Tasks){
this.updateTask.emit(task);
}
}
