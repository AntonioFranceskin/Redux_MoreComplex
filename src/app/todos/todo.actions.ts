import { createAction, props } from '@ngrx/store';
export const crear = createAction(
    '[TODO] Crea todo',
    props<{texto: string}>()
);
export const cambiarChk = createAction(
    '[TODO] cambiarChk todo',
    props<{id: string}>()
);
export const editarItem = createAction(
    '[TODO] editarItem todo',
    props<{id: string, texto: string}>()
);
export const eliminarItem = createAction(
    '[TODO] eliminarItem todo',
    props<{id: string}>()
);
export const limpiar = createAction('[TODO] Limpiar Completadas');