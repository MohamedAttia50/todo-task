import { Component ,Output,EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-to-do-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './to-do-form.html',
  styleUrl: './to-do-form.css'
})
export class ToDoForm {
@Output() add= new EventEmitter<string>();
@Output() update=new EventEmitter<string>();
@Input() editMode:boolean=false;
@Input() editText:string='';
newTask='';

ngOnChanges(){
  this.newTask=this.editText||'';
}

addTask(){
  if(this.newTask.trim()){
    this.add.emit(this.newTask)
    this.newTask='';
  }
  
}

updateTask(){
  if(this.newTask.trim()){
    this.update.emit(this.newTask);
    this.newTask='';
  }
  
}

}
