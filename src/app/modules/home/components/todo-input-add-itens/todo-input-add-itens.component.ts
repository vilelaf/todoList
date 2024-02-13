import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{

  @Output()public taskEmissor: EventEmitter<string> = new EventEmitter<string>();
  
  public tarefa: string = "";

  constructor() { }

  public getTask(){
    console.log(this.tarefa);
       this.taskEmissor.emit(this.tarefa);
       this.tarefa = '';
    
  }

  ngOnInit(): void {

  }

}
