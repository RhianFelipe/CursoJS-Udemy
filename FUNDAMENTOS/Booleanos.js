let isAtivo  = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)
//  1 = verdadeiro
isAtivo = 1
console.log(!isAtivo) // ! = não(Na teoria da logica matematica) ou seja não 1 
console.log(!!isAtivo) // não não 1 = 1(o não se anula)
// 0 = falso
isAtivo = 0
console.log(!isAtivo) // ! = não(Na teoria da logica matematica) ou seja não 0
console.log(!!isAtivo) // não não 0 = 0(o não se anula)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //com dos espaços é true,um espaço e false
console.log(!![]) //uma array
console.log(!!{}) //objeto tambem
console.log(!!Infinity)
console.log(!!(isAtivo = true ))
console.log(!!(isAtivo = Infinity ))
console.log(!!(isAtivo = 33 ))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' ||  null ||  0 ||  ' ')) //se ao menos um for verdadeiro,a respota é true