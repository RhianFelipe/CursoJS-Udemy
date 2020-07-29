const notas = [6.7 , 5.7 , 7.8 , 9.6 , 100]

for (let i in notas) {
    console.log(i , notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 20,
    peso:60

}

for( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}