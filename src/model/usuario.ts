export class Usuario {
    public nome: string;
    public email: string;
    public codigo: string;
    public sorteio: string;
    public adm: boolean;

   
  
    constructor(nome: string, email: string, codigo: string, sorteio: string, adm: boolean) {
      this.nome = nome;
      this.email = email;
      this.codigo = codigo;
      this.sorteio = sorteio;
      this.adm = adm;
  
    }
  }