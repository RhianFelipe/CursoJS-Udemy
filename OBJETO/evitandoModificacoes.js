//Object.preventExtensions 
//Não pode adicionar novos elementos,mas pode alterar e remover os existentes

const produto = Object.preventExtensions({
    nome: 'Rhian', preco:1.99, tag:'promoção'
})
console.log("Extensível:", Object.isExtensible(produto))

produto.nome = "Felipe"
produto.descricao = "Borracha escolar branca"
delete produto.tag
console.log(produto)

//Object.seal 
//Não pode adidiconar e nem remover elementos do Objetom,as pode alterar os existentes
const pessoa = {nome:"Joao",idade:15}
Object.seal(pessoa)
console.log("Selado:",Object.isSealed(pessoa))

pessoa.sobrenome = "Pedro"
delete pessoa.nome
pessoa.idade = 19
console.log(pessoa)

//Object.freeze(NomeObjeto) = selado + valor constante,ou seja não pode alterar,remover e nem adicionar elementos no Objeto coma  função