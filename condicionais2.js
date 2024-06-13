// Muito útil quando sua variável possui valores específicos

const permissoes = 'novoAluno' // 'aluno' || 'professor' || 'admin'

switch(permissoes) {
    case 'aluno':
        console.log('Você só tem acesso as aulas.')
        break 
    case 'professor':
        console.log('Você pode alterar as aulas e conteúdos.')
        break
    case 'admin':
        console.log('O seu acesso tem total permissão.')
        break
    default:
        console.log('Não encontrei o seu cadastro! Por favor se diriga a secretaria.')
}