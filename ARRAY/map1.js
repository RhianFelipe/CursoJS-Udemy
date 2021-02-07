const numeros = [1,2,3,4,5]

//Map gera um novo Array,não modifica ele

let resultado = numeros.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const converteDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //Jeito para tranformar os valores em Dinheiro

resultado = numeros.map(soma10).map(triplo).map(converteDinheiro) //podemos por varios Maps para ir mapeando e acrescentando funções

console.log(resultado)