import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { cambiarChk, crear, editarItem, eliminarItem, limpiar } from './todo.actions';
export const initialState: Todo[] = [
  new Todo('Salvar a Thanos'),
  new Todo('Robar escudo de Capitán América'),
  new Todo('Comprar armadura de IronMan'),
  new Todo('Descubrir identidad de Batman'),
  new Todo('Aprender a conducir el Batimovil'),
  new Todo('Hacerse amigo de Superman')
];
 
const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)] ),
  // filter  regresa  un  nuevo arreglo ,  solo  estoy  excluyendo  el registro que tenga  el id
  on ( eliminarItem, ( state, { id } ) =>  state.filter( todo => todo.id !== id ) ),
  on ( limpiar, ( state) =>  state.filter( todo => !todo.completado ) ),
  on(cambiarChk, (state, {id}) => {
    return state.map( element => { 
      //console.log(`Dentro del  map ${JSON.stringify(element)}  el  id  es  ${id}`);
      // Nota: El  map  hacer  un  foreach , lo  importante es que  genera un  nuevo  objeto, por lo que se evita la mutación 
      if(element.id === id){
        //console.log(` Dentro del  if  ${JSON.stringify({...element,completado: !element.completado })} `);
        // esta  retornando  un  nuevo  objeto  el  spread ...element  selecciona  las  otras  propiedades del  objeto  
        // y  las deja igual, la  unica que  cambia es  completado  
        return {
          ...element,
          completado: !element.completado 
         }
      }
      else{
        //console.log(` Dentro del  else  ${JSON.stringify({element})} `);
        // retorna el mismo  elemento
        return element;
      }
    }) 
  }),
  on(editarItem, (state, {id, texto}) => {
    console.log(`dentro de  editar ${id} ${texto}`);
    return state.map( element => { 
      if(element.id === id){
        return {
          ...element,
          texto: texto 
         }
      }
      else{
        return element;
      }
    }) 
  }));


export function todoReducer(state: any , action: Action) {
  return _todoReducer(state, action);
}