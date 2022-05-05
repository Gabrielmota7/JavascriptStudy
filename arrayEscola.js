// calcular 4 notas e tirar as médias dos alunos de uma escola

const notas = [10, 6.5, 8, 7.5]


// notas.length está servindo para pegar as notas do array com notas e o Length verifica quantos
// elementos tem dentro do array, então utilizando o / podemos fazer uma divisão de acordo com o
// número de elementos dentro do array e faz a divisão com os elementos declarados dentro do array
// reduce é uma função array de javascript
let media = (notas.reduce(function(soma, i){
    return soma + i;
})) / notas.length

console.log(media)

/* Exemplo de outra maneira de fazer o exercício
let media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length */