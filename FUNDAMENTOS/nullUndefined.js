let valor = 1 //nãi inicializada,mas declarada
console.log(valor)

valor = null //ausência de valor,caso queira zerar um valor de uma variavel use o null 
console.log(valor) 
//console.log(valor.toString()) //Erro!pois ele é nulo,não existe valor

const produto = {}
console.log(produto.preco) //nenhum erro,mas sim que é indefinido,pois o produto foi declarado,só o preço q não
console.log(produto)

produto.preco = 3.50 
console.log(produto)

produto.preco =  undefined // evite definir undefined,deixe a linguagem deixar,se quiser zerar,use 0
console.log(produto.preco)
//delete produto.preco // Se quiser tirar o valor do objeto,sem colocar o undefined
console.log(produto)

produto.preco = null // sem preço
console.log(produto)