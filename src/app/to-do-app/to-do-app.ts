import { Component } from '@angular/core';
import { ToDoList } from '../to-do-list/to-do-list';
import { ToDoForm } from '../to-do-form/to-do-form';

import { Tasks } from './tasks.model';

@Component({
  selector: 'app-to-do-app',
  imports: [ToDoForm,ToDoList],
  templateUrl: './to-do-app.html',
  styleUrl: './to-do-app.css',
  standalone:true
})


export class ToDoApp {
  tasks:Tasks[]=[];
  taskToEdit: Tasks | null = null;
  editMode: boolean = false;
  editText: string = '';

  saveTolocalStorage(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }

ngOnInit(){
  const storedTasks=localStorage.getItem('tasks');
  if(storedTasks){
    this.tasks=JSON.parse(storedTasks);
  }
}
  addTask(task:string){
    if(task.trim()){
      this.tasks.push({
        id:Date.now(),
        text:task,
        completed:false,
      })
      this.saveTolocalStorage();
    }
  }
  
  deleteTask(taskId:number){
    this.tasks=this.tasks.filter((task)=> task.id !==taskId);
    this.saveTolocalStorage();
  }

  completeTask(taskId:number){
    this.tasks=this.tasks.map((task)=> task.id===taskId?{...task, completed: !task.completed}:task)
    this.saveTolocalStorage();
  }

  startUpdate(task:Tasks){
    this.taskToEdit=task;
    this.editMode=true;
    this.editText=task.text;
  }

  saveUpdate(updatedText:string){
    if(this.taskToEdit){
      this.tasks=this.tasks.map((task)=>
        task.id===this.taskToEdit!.id?{...task, text:updatedText}:task);
      this.taskToEdit=null;
      this.editMode=false;
      this.editText='';
    }
    this.saveTolocalStorage();
  }
  }

  

  
