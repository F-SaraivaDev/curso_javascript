const carro = {
    "modelo":"Fiat",
    "motor":"1.6",
    "porta":"4",
    "tipo":"sedan"
}

let jsonToString = JSON.stringify(carro)

console.log(jsonToString)

let stringToJson = JSON.parse(jsonToString)

console.log(stringToJson)


