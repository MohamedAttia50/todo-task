import { Component ,Output,EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tasks } from '../to-do-app/tasks.model';
@Component({
  selector: 'app-to-do-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './to-do-form.html',
  styleUrl: './to-do-form.css'
})
export class ToDoForm {

@Output() add=new EventEmitter<string>();
@Output() update=new EventEmitter<string>();
@Input({required:true}) editMode:boolean=false;
@Input({required:true}) editText:string='';
newTask='';


ngOnChanges(){
  this.newTask=this.editText||'';
}
updateText(){
  if(this.newTask.trim()){
    this.update.emit(this.newTask);
    this.newTask='';
  }
}

toAddTask(){
  if(this.newTask.trim()){
    this.add.emit(this.newTask);
    this.newTask='';
  }
}
}
