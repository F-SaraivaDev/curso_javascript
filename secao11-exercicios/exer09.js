class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis) {
      this.codigoVoo = codigoVoo;
      this.origem = origem;
      this.destino = destino;
      this.assentosDisponiveis = assentosDisponiveis;
    }
   
    reservarAssento() {
      if (this.assentosDisponiveis > 0) {
        this.assentosDisponiveis--;
   
        return this.assentosDisponiveis;
      } else if (this.assentosDisponiveis === 0) {
        console.log("Não há assentos disponíveis para reserva.");
      }
    }
   
    consultarAssentosDisponiveis() {
      return this.assentosDisponiveis;
    }
  }
   
  const voo = new Voo("ABC123", "São Paulo", "Rio de Janeiro", 100);
  voo.consultarAssentosDisponiveis();
  voo.reservarAssento();