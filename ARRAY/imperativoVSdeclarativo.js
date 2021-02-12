const aluno = [
    {nome:'João', nota: 7.9},
    {nome:'Maria', nota: 9.2}
]

//Imperativo
let total1 = 0
for(let i = 0; i < aluno.length; i++){
    total1 += aluno[i].nota
}

console.log(total1 / aluno.length)

//Declarativo
//Melhor jeito,pois ele não precisa de tantas instruções
const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual
const total2 = aluno.map(getNota).reduce(soma) //mapeia a nota,depois reduz ela somando tudo
console.log(total2 / aluno.length)