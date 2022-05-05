//mostrar na tela uma lista de números de 100 a 600


//utilizandao array mostrado na aula
const numeros = [100, 200, 300, 400, 500, 600]

for (let i=0; i< numeros.length; i++){
    console.log(i, numeros[i])
}

// método próprio
for(numbers=100; numbers <= 600; numbers+=100){
    console.log(numbers)
}