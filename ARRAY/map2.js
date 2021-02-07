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

const resultado = carrinho.map(paraObjeto).map(apenasPreco).map(converteDinheiro)

console.log(resultado)

