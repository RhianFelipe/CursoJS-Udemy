// Novo recurso do ES2015

const Pessoa = {
    nome: 'Rhian', 
    idade: 18,
    endereco:{
        rua:'Joana Angelica',
        n:81
    }
}
const { nome,idade } = Pessoa
console.log(nome, idade)

const { nome:no, idade:i } = Pessoa
console.log(no, i)

const { sobrenome,bemHumorada = true } = Pessoa

console.log(sobrenome , bemHumorada)

const { endereco: { rua , n } } = Pessoa
console.log(rua , n)

// Da erro pois não existe(é null ou undefined)
//const {conta:{ ag , num} } = Pessoa
//console.log(ag,num)




