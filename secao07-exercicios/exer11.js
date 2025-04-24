function faixaEtaria(idade) {
  if (idade < 12) {
    return "Criança";
  } else if (idade <= 24) {
    return "Jovem";
  } else {
    return "Adulto";
  }
}

const crianca = faixaEtaria(10);
const adulto = faixaEtaria(30);

console.log("A faixa etária da criança é:", crianca);
console.log("A faixa etária do adulto é:", adulto);