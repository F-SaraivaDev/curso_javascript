/**
 * Contador de Palavras
  Crie uma classe chamada WordCounter que representa um contador de palavras.
  A classe deve ter um construtor que inicializa um objeto vazio.
  A classe deve ter um método chamado countWords que recebe uma string como parâmetro.
  O método countWords deve contar o número de palavras na string fornecida e retornar o resultado.
  Considere que as palavras são separadas por espaços em branco.
 */


class WordCounter {
    constructor() {
        // O construtor pode ser vazio, pois não há necessidade de inicialização específica
    }

    countWords(inputString) {
        // Verifica se a string de entrada não é vazia
        if (!inputString.trim()) {
            return 0;
        }

        // Divide a string em palavras usando espaços em branco como delimitador
        const words = inputString.split(/\s+/);

        // Retorna o número de palavras na string
        return words.length;
    }
}

// Exemplo de uso:
const wordCounter = new WordCounter();

// Chama o método countWords com uma string de exemplo
const inputString = "Esta é uma string de exemplo para o contador de palavras";
const result = wordCounter.countWords(inputString);

// Exibe o resultado
console.log(`Número de palavras na string: ${result}`);
