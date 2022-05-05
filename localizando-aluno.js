// verifique se o aluno faz parte da turma procurando através de um indice e 
// mostre na tela sua média e nome se não estiver imprima que ele não existe

const alunos = ['Pedro', 'Gustavo', 'Fernando', 'Caio']

const mediaAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaAlunos]

const exibeNomeNota = (alunos) => {
    if(listaDeNotasEAlunos[0].includes(alunos)){
        indice = listaDeNotasEAlunos[0].indexOf(alunos)
        return listaDeNotasEAlunos[0][indice] + ' , sua média é ' + listaDeNotasEAlunos[1][indice]
    }else {
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota("Caio"))