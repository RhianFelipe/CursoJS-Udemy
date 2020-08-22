//Função em JS é First-Class Object (Citizens)
//High-Order function

//criando de forma literal

function fun1() {

}

//Armazenar em uma variavel
const fun2 = function() {}

//Armazenar numa array 
const array  = [ function(a,b) {return a +b},fun1,fun2]
console.log(array[0](5,7))

//armazenar  em uma  atributo  de objeto

const obj = {}
obj.falar  = function() {return 'Opa'}
console.log(obj.falar())

//passar função como  parametro

function run(fun){
    fun()
}
run(function() {console.log('Retomando...')})

//Uma função pode conter/retornar uma função

function soma (a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(10)