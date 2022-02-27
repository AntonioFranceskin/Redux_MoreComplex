import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  chkCompletado!: FormControl; 
  txtInput!: FormControl;
  editando: boolean = false
  //Se  hace  una  referencia  fisica  para  poder establecer  el  focus en  el campo seleccionado, al final se hace  un select
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void { 
    this.chkCompletado =  new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    //Forma  de  subscribirse cuando  el  usuario  cambia  el valor  del checkbox
    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.cambiarChk({id: this.todo.id }))
    })
  }
  editar(){
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    // ocurre  tan rapido  que  no  se  establece  el focus, asi que  dilatamos  la  ejecución en  1 mlseg
    //setTimeout(()=> {this.txtInputFisico.nativeElement.focus();}, 1);
    setTimeout(()=> {this.txtInputFisico.nativeElement.select();}, 1);
  }
  terminarEdicion(){
    this.editando = false;
    if(this.txtInput.invalid) return;
    if(this.txtInput.value == this.todo.texto) return;
    this.store.dispatch(actions.editarItem({id: this.todo.id, texto: this.txtInput.value }))
  }
  eliminarItem(){
    this.store.dispatch(actions.eliminarItem({id: this.todo.id}))
  }


}
