console.log(typeof  Array,typeof new Array , typeof [])

let  aprovados = new Array('Bia','Carlos', 'Ana')

aprovados = ['Bia','Carlos', 'Ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
console.log(aprovados[8]=== undefined)

console.log(aprovados)
aprovados.sort() //ele ordena em ordem alfabetica e numerica a Array
console.log(aprovados)

delete aprovados[1] //delete o elemento apontado
console.log(aprovados[1])
console.log(aprovados[2])


aprovados = ['Bia','Carlos', 'Ana']
aprovados.splice(1,1) //Função que adicona ou remove elementos,também adiciona e remove elementos
//aprovados.splice(1,1, 'Elemento1',Elemento 2) Primerio numero é o index, o proximo é a quantia de elementos q
// vc quer excluir a partir do elemento anterior , o próximo é os elementos q vc quer adiconar

console.log(aprovados)