const produto = [
    {nome:'Notebbok',preco: 2499, fragil:true},
    {nome:'Ipad Pro',preco: 4199, fragil:true},
    {nome:'Copo de Vidro',preco:12.49 , fragil:false},
    {nome:'Copo de Plastico',preco: 18.99, fragil:false}

]

console.log(produto.filter(function(p){
    return false
}))


const carro = produto =>produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(carro).filter(fragil))


