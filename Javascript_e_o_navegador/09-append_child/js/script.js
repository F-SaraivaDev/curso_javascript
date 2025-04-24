let novoElemento = document.createElement('p')
let texto = document.createTextNode('Duis hendrerit cursus quam, sed vehicula ex euismod at.')

novoElemento.appendChild(texto)

let p = document.querySelector('#paragrafo-principal')
let pai = p.parentNode

pai.appendChild(novoElemento)