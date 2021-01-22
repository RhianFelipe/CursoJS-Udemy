console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse  = function() {
    return this.split('').reverse().join('')  //Split = separa cada caracter de uma string,formando um array, join = junta tudo novamente,reverse = inverte a ordem
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0] //retorna o primeiro valor de uma array
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

//N fazer,pois você esta modificando uma função que ja existe ,a não ser que você saiba o que esta fazendo
String.prototype.toString = function(){
    return "Lascou tudo"
}
console.log('Escola Cod3r'.reverse()) //ele vai pegar a frase da function toString
  
