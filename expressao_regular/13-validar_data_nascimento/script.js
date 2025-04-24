const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
//const validarDataNasc2 = /[1-31]{2}[/][1-12]{2}[/][1920-2020]{4}/  //Evita erro na data 
const validarDataNasc2 = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[0-2])[/](19\d\d|20\d\d)$/;

console.log(validarDataNasc.test('05/02/2000'))
console.log(validarDataNasc.test('5/2/2000'))
console.log(validarDataNasc.test('5/2/00'))
console.log(validarDataNasc.test('05-02-2000'))
console.log(validarDataNasc.test('99/99/9999'))
console.log(validarDataNasc2.test('99/99/9999')) //false devido ao erro na data
console.log(validarDataNasc2.test('19/00/1999')) //false devido ao erro na data
console.log(validarDataNasc2.test('19/12/1998')) 
console.log(validarDataNasc2.test('17/02/2023')) 
