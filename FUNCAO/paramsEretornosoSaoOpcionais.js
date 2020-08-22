function area(largura,altura){
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima  do permetido: ${area}m2. `)
    } else {
        return area
    }
}

console.log(area(2,5))
console.log(area())
console.log(area(5))
console.log(area(10,3))
console.log(area(2,2,3,4))