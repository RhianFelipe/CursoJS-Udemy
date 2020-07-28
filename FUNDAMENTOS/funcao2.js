//Armazendo uma função numa váriavel
const imprimaSoma  = function (a,b) {
    console.log(a + b )
}
imprimaSoma (2,4)
//Armazenando uma função  arrow  em uma variavel 
const soma = (a,b) => {
    return a + b 
}
console.log(soma(2,3))

//retorno implícito
const subtracao = (a,b) => a - b
console.log(subtracao(2,5))


const imprimir2 =  a => console.log(a)
imprimir2('Legal!!!!')