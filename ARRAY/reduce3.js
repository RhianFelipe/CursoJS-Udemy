Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i = 1; i <this.length;i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador //nunca esqueça de retornar
}

const soma =(total,valor) => total + valor
const num =[1,2,3,4,5,6]
console.log(num.reduce(soma))