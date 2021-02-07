const aprovados = ['Agatha', 'Aldo' ,'Daniel','Raquel']

// forEach é uma função que coloca um For dentro dela,ela vai percorrer o Array,o primeiro parametro da função é o nome
// e o segundo é o indice,o terceiro seria a Array inteira
//Pode só pegar o nome como parametro(sem indice),mas não tem como pegar só o indice sem antes declarar o parametro do nome
aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1})  ${nome}` )
})

//um exemplo mais limpo e rapido é soó colocar o nome e usar ArrowFunction
aprovados.forEach(nome => console.log(nome))


//podemos também colocar um uma variavel a função
const exibirAprovados  = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Outro Exemplo

const alunos = ['Rhian' , 'Liz' , 'Rogelio']

alunos.forEach(function(aprovados,i){
    console.log(`${i + 1}° aprovado:${aprovados}`)
})

