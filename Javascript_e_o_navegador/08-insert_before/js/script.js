let novoElemento = document.createElement('p')
let texto = document.createTextNode('Duis hendrerit cursus quam, sed vehicula ex euismod at.')

novoElemento.appendChild(texto)

let elementoAlvo = document.querySelector('#titulo-principal')
let elementoPai = document.querySelector('#container-principal')

elementoPai.insertBefore(novoElemento, elementoAlvo)
