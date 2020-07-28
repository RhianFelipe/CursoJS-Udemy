const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) //ver se o numero e inteiro ou não(true or false)
console.log(Number.isInteger(peso2)) //ver se o numero e inteiro ou não(true or false)

const AV1 = 9.656
const AV2 = 6.565
const total = AV1 * AV2 * peso1 * peso2
const media = total/(peso1+peso2)
console.log(media)
console.log(media.toFixed(2)) //para cortar numero gigante
console.log(media.toString(2)) //passar para o valor binario
console.log(typeof media)
console.log(typeof Number)

