//Closure  é o escopo  criando quando uma função  é declarativa
//Esse escopo  permite  a função  acessar  e manipular  variáveis  externas  á função 

// Contexto léxico  em ação!

const x  = 'global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

 const minhaFuncao  = fora()
 console.log(minhaFuncao())