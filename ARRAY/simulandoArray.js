const quaseArray = {0:'Rafael' ,    1:'Ana', 2:'Bia'}
console.log(quaseArray)

Object.defineProperty(quaseArray,'toString',{
 value: function(){ return Object.values(this)}, //defina do tipo String sem valor numerico, e  retorna os valores do Objeto
 enumerable:false
})

console.log(quaseArray[0])

const meuArray = ['Rafael' ,'Ana', 'Bia']
console.log(quaseArray.toString() , meuArray) //os 2 são arrays,mas um feito em Objeto e outro já declarado como Vetor

