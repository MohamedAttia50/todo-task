import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoApp } from "./to-do-app/to-do-app";
import { ToDoForm } from "./to-do-form/to-do-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
