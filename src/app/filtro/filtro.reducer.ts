import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro} from './filtro.actions';
export const initialState: string = 'todos';
const _filtroReducer = createReducer(initialState,
  on( setFiltro , (state: string, { filtro }) => filtro ),
);
export function filtroReducer(state: string, action: Action) {
  return _filtroReducer(state, action);
}