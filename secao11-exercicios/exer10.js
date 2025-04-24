class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
      this.disponivel = true;
    }
   
    emprestar() {
      if (this.disponivel) {
        this.disponivel = false;
        console.log('Livro emprestado com sucesso.');
      } else {
        console.log('O livro não está disponível para empréstimo.');
      }
    }
   
    devolver() {
      if (!this.disponivel) {
        this.disponivel = true;
        console.log('Livro devolvido com sucesso.');
      } else {
        console.log('O livro já está disponível.');
      }
    }
   
    consultarDisponibilidade() {
      return this.disponivel ? 'Disponível' : 'Indisponível';
    }
  }
   
  