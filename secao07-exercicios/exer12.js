function isPalindrome(palavra) {
  // Converte a palavra para minúsculas para remover a diferença entre maiúsculas e minúsculas.
  palavra = palavra.toLowerCase();

  // Inicializa um índice para a primeira letra da palavra.
  let i = 0;

  // Inicializa um índice para a última letra da palavra.
  let j = palavra.length - 1;

  // Enquanto os índices não se cruzarem, compara as letras da palavra.
  while (i < j) {
    // Se as letras forem diferentes, a palavra não é um palíndromo.
    if (palavra[i] !== palavra[j]) {
      return false;
    }

    // Incrementa o índice da primeira letra.
    i++;

    // Decrementa o índice da última letra.
    j--;
  }

  // Se os índices se cruzaram, a palavra é um palíndromo.
  return true;
}

console.log(isPalindrome("radar"))
console.log(isPalindrome("hello"))