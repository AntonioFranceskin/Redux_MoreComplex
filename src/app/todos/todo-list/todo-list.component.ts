import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual!: filtrosValidos;
  constructor(private store: Store<AppState> ) { }

  //  Me  subscribo  al  Store  y  obtengo  no  solo  los todos  tambien  el  filtro
  ngOnInit(): void {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    });
  }
}
