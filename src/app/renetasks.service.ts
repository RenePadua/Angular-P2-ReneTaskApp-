import { Injectable } from '@angular/core';

interface Tasks{
  tarefa: string;
}

@Injectable()
export class RenetasksService {
lista: Array<Tasks> = [];
  constructor() {

this.add('Tarefa 01');
this.add('Tarefa 02');
this.add('Tarefa 03');

   }


getLista() {
  return this.lista;
}

add(tarefa: string) {
  this.lista.push({ tarefa });
}

remove(index: number) {
  this.lista.splice(index, 1);
}


}