const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual é a sua idade? '))

//const ehMaiorDeIdade = idade >= 18

//Estrutura condicional: if/else
if(/*ehMaiorDeIdade*/ idade >= 18) {
    console.log('Você é maior de idade')
} else {
    console.log('Você é menor de idade')
}

const mediaDoAluno = 8

if( mediaDoAluno >= 7) {
    // windows + . = abre emojis
    console.log('Parabéns, sua média foi excelente, você foi aprovado 😊')
} else if (mediaDoAluno >= 5) {
    console.log('Infelizmente você acabou não atingindo a média esperada, estude para a prova de recuperação. ')
} else {
    console.log("Você foi Reprovado, ano que vem você irá conseguir!")
}

