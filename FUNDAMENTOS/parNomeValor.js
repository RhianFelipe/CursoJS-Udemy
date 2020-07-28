//par nome/valor
const saudacao = 'Opaaaa' //contexto léxico 1

function exec() {
    const saudacao ="falaa galerinhaa " //contexto léxico 2
    return saudacao
}
//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    Nome: 'Rhian',
    Idade: 18,
    Peso: 32 ,
    Endereco: {
        logradouro: 'Rua  Muito Legal',
        Numero: 123

    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)