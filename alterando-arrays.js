//Retirar ana e caio da chamada e adicionar Rodrigo

const lista = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

//Uma das formas de fazer
/*lista.pop('Ana', 'Caio')
lista.push('Rodrigo')*/

//segunda forma de fazer
lista.splice(1,2 , 'Rodrigo')

console.log(lista)