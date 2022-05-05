const nome = "Gabriel";
const idade = 2022 - 2000;
const cidadeDeNascimento = "São Paulo"; 

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)

const nome2 = "Leo";
const idade2 = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome2} diz: "por favor, quero beber ${idade2 >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)