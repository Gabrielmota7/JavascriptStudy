// um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno 
// para corrigir adicione a nota 7 e faça o calculo da média correta

const notas = [10, 6, 8]
// utilizando o push nós podemos inserir elementos dentro do array
notas.push(7)
console.log(notas)

let media = (notas.reduce(function(soma, i) {
    return soma + i;
})) / notas.length

console.log(media)