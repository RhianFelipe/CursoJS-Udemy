const alunos = [
{nome:'João',nota:7.3 ,bolsista:false},
{nome:'Maria',nota:9.2 ,bolsista:true},
{nome:'Pedro',nota: 9.8,bolsista:false},
{nome:'Ana',nota: 8.7,bolsista:true}
]

console.log(alunos.map(a => a.nota))
const resultado =alunos.map( a => a.nota).reduce(function(acumulador,atual){ //pega o segundo elemento e acumula com o primeiro
    console.log(acumulador , atual)
    return acumulador + atual //ele vai fazer com o primeiro o que for fewito
}) // <--  },) Depois da virgula caso,coloque um número,ele vai começar a somar por esse numero 
console.log(resultado)