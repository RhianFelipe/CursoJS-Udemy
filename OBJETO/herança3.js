const pai =  {nome:'Pedro',corCabelo:'Preto'}

const filha1 = Object.create(pai) //criando um objeto filho  passando como parametro o objeto pai ,tendo como prototipo o objeto pai
filha1.nome = "Ana"
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai,{
    nome: {value: 'Bia' , writable:false , enumerable:false} //writable = valor que vai ser mudado no futuro(No caso,nao,pois esta 'false',ou seja,ele ficara ecom esse valor até o final)
}) // enumerable = permitei ser listado,em momento que for usar Object.Keys ou coisas do tipo,ou quando quiser percorrer no for in

console.log(filha2.nome)
filha2.nome  = 'Carla'

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}` ) //posso não ter dito a cor do cabelo dela,mas ela pega pelo prototipo do Objeto pai

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for( let key in filha2){
    filha2.hasOwnProperty(key)? // hasOwnProperty se essas propriedades pertence a ela,ou se veio de um objeto acima(um, Objeto pai,herança)
    console.log(key) : console.log(`Por herança: ${key}`)
}
