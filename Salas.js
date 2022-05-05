// com a media de todos os alunos de 3 salas, calcule a média geral de cada sala

const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]


/*Durante a aula trabalhamos com o método reduce() para “reduzir” uma lista de números para um único valor.
 Este método trabalha com parâmetros um pouco diferentes dos outros que vimos durante o curso. Por isso,
 vamos destrinchar o exemplo da aula para entender melhor as partes do código.*/
function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
    atual + acum,0)
    return somaDasNotas/notasDaSala.length 
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJs)}`)
console.log(`Média da sala de JavaScript ${mediaSala(salaJava)}`)
console.log(`Média da sala de JavaScript ${mediaSala(salaPython)}`)

const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, atual) => atual + acum, 0) /notas.length

console.log(media)