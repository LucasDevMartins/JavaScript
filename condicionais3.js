// * Operador Ternário

const idade = 16;

// idade >= 18 ? console.log('Maior de idade.') : console.log('Você é menor de idade.')

// não é apropriado concatenar condicional ternário.
const mensagem = idade >= 18 ? 'Maior de idade' : idade >= 16 ? 'Já pode votar' : 'Não pode votar'

console.log(mensagem)

if(0) {
    /* Se dentro do if () estiver undefined, null, '', NaN ou 0 ele será considerado falsy.*/
}