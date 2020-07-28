//Função sem retorno
function imprimirSoma (a , b , c) {
console.log(a + b + c)
}
imprimirSoma(2,5)
imprimirSoma(2) // 2 + undefined = NaN
imprimirSoma(2,3,4,5,6,7,8) //ele só vai pegar o A e B e o resto vai ignorar
imprimirSoma()
//Função com retorno
function soma(a , b = 0) {
return a + b

}
console.log(soma(2,3))
console.log(soma(2))