Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i ,this)){ //Elementos da Array, o indice dela, e a propria array completa
            newArray.push(this[i])
        }
    }
    return newArray
}



const produto = [
    {nome:'Notebbok',preco: 2499, fragil:true},
    {nome:'Ipad Pro',preco: 4199, fragil:true},
    {nome:'Copo de Vidro',preco:12.49 , fragil:false},
    {nome:'Copo de Plastico',preco: 18.99, fragil:false}
]




const carro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter2(carro).filter2(fragil))


