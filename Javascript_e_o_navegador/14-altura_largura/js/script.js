let elemento = document.querySelector("#titulo-principal")

console.log("Largura: " + elemento.offsetWidth)//Considera as bordas
console.log("Altura: " + elemento.offsetHeight)

console.log("Largura: " + elemento.clientWidth)//Não considera as bordas
console.log("Altura: " + elemento.clientHeight)
