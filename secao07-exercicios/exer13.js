function calculateAverage(numeros) {
 // Inicializa uma variável para armazenar a soma dos números do array.
  let sum = 0;

  // Itera sobre o array, somando os números.
  for (const numero of numeros) {
    sum += numero;
  }

  //Calcule a média dividindo a soma pelo número total de números no array.
  const average = sum / numeros.length;

  // Retorna a média calculada.
  return average;
}

const numeros = [1, 2, 3, 4, 5];

const media = calculateAverage(numeros);

console.log(media); // 3

