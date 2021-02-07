Array.prototype.map2 = function(callback){
    const newArray =[]
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i],i,this))
    }
return newArray
}



const carrinho = [
    '{"nome":"Borracha" , "preco": 3.45}',
    '{"nome":"Caderno" , "preco":12.90}',
    '{"nome":"Kit de Lapis", "preco":41.22}',
    '{"nome":"Caneta" , "preco":7.50}'
]
//Retornar uma array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const converteDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco).map2(converteDinheiro)

console.log(resultado)

