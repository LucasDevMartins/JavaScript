const prompt = require('readline-sync')

const idade = prompt.question('Qual eh a sua idade?')

const idadeNumber = Number(idade)

console.log('O usuário tem', idadeNumber, 'anos de idade.', typeof idadeNumber)

    //Coerção Explicíta (Conversão Manual)

console.log(Number('x')) // NaN: Not a Number

console.log(String(10), typeof String(10))

console.log(Boolean(-1), typeof String(10))

  //Coerção Implicíta

  console.log(1 + '1')
  console.log('10' + 5)
  console.log(10 - '5')
  console.log(10 * '5')
  console.log(10 / '5')

