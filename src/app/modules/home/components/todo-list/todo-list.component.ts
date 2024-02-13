import { Component, DoCheck} from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  
})
export class TodoListComponent implements DoCheck{
  
  public tasks: Array<TaskList> = JSON.parse(localStorage.getItem("Tasks") || "[]");

  public deleteTask(index:number):void{
    if(index < 1){
      this.tasks.splice(index, 1);
      return;
    }
    this.tasks.splice(index, 1);
  }

  public deleteAllTasks():void{
    var confirmDelete = window.confirm("Quer realmente apagar todas as tarefas?");
    if (confirmDelete)
      this.tasks=[]; 
  }

     public addTask(event: string){
       console.log(event);
      if(event.length === 0){
        alert('Digite uma tarefa.');
      return;
      }
      localStorage.getItem('tasks');
      this.tasks.push({task: event,checked: false});
     }

     public validatationInput(event:string, index:number){
      if(event.length === 0){
          alert('Digite uma tarefa.');
        return;
      }
      this.tasks[index].task = event;
     }

  public setLocalStorage(lista: Array<TaskList>){
    if(this.tasks){
      localStorage.setItem('Tarefas', JSON.stringify(this.tasks));
    }
  }   
       
  constructor() { }

  ngDoCheck() {
  this.tasks.sort((first, last) => Number(first.checked) - Number(last.checked));
   this.setLocalStorage(this.tasks); 
  }


}
