const pessoa = {
    nome:'Rebeca',
    idade:2,
    peso: 13
}

console.log(Object.keys(pessoa)) //só printa as chaves do obj
console.log(Object.values(pessoa)) //só printa os valores
console.log(Object.entries(pessoa)) //printa as chaves e valores em uma array separada

Object.entries(pessoa).forEach(([chave,valor])=>{ //pega cada elemento trazido pelo forEach
    console.log(`${chave}:${valor}`) //e mostra eles  sem array ou chaves,apenas os valores
})

Object.defineProperty(pessoa,'dataNascimento',{ //função para definir as propriedades de um Obj
    enumerable:false, //Se e propriedade vai ser mostrada ou não na lista,quando algum comando exemplo Object.keys for utilizado
    writable:false,// se vai ou não ser permitida sua modificação
    value: '01/01/2019' 
})

pessoa.dataNascimento = '01/01/2017' //tentando subscrever,mas não vai dar pois é false sua modificação
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa)) // jaq o obj dataNascimento esta false,ele n vai aparecer

//Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3,a:4}
const obj = Object.assign(dest,o1,o2) //função q atribui o 2°(o1) e o 3°(o2) valor para a 1° variavel(dest)
//sempre atribui os valores para a primeria varriavel

Object.freeze(obj) //congela o obj,não deixando alteração de nada dele
obj.c = 1234
console.log(obj)