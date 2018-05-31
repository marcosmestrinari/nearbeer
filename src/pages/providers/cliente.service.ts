import { Injectable } from '@angular/core';
import { Cliente } from '../../model/cliente';

@Injectable()
export class ClienteService {

  private lista: Array<Cliente> = new Array<Cliente>();

  constructor() { }

  public read() : Array<Cliente> {
    return this.lista;
  }

  create(cliente : Cliente) {
    this.lista.push(cliente);
  }

}