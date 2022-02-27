import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';
import { TodoListComponent } from './todo-list/todo-list.component';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {
  // El  pipe  recibe  un  arreglo  de Todo  lo  llamamos  todos
  // Tiene  como  argumento  filtro
  // Tiene  como  salida  un  arrgle  filtrado tipo Todo
  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch(filtro){
      case 'completados':
        return todos.filter(todo => todo.completado)
      case 'pendientes':
        return todos.filter(todo => !todo.completado)
      default:
        return todos
    }
  }
}
