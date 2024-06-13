// Operadores Booleanos : Comparações

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2); // igual
console.log(numero1 === numero2); // idêntico
console.log(numero1 === 10); // idêntico

console.log(numero1 != "10"); // Diferença

const idadePessoa1 = 17
const idadePessoa2 = 32
const idadePessoa3 = 15
const maiorDeIdade = 18


console.log(idadePessoa1 && idadePessoa2 && idadePessoa3 >= 18)
console.log(idadePessoa1 >= maiorDeIdade || idadePessoa2 >= maiorDeIdade || idadePessoa3 >= 18) 
console.log(!(idadePessoa3 >= maiorDeIdade)) // Retorna verdadeiro se a pessoa for menor de idade
