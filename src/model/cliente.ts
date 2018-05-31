export class Cliente {
    public nome: string;
    public email: string;
    public endereco: string;
    public status: string;
    public imagem: string = "https://static.quizur.com/i/b/57a280185319b4.79796494untitled.png";
    
  
    constructor(nome: string, email: string, endereco: string, status: string) {
      this.nome = nome;
      this.email = email;
      this.endereco = endereco;
      this.status = status;
  
    }
  }