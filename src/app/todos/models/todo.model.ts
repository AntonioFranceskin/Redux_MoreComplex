import { UUID } from 'angular2-uuid';
export class Todo {
    public id!: string;
    public texto!: string;
    public completado!: boolean;
    constructor(texto: string){
        this.texto = texto;
        this.id = UUID.UUID();
        this.completado = false;
    }
}