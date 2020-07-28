const valores = [7.6 , 7.9 , 8.1 , 8.9 ] // 0 1 2 3 : começa sempre no zero em arrays
console.log(valores[0] ,  valores[3])
console.log(valores[4]) //não tem na Array
valores[4] = 100 //mas eu add ele
console.log(valores) //então ele coloca o valor da 4° na array
 // ele mostrara que existe uma quantia X de valores vazios na Array
console.log(valores)
console.log(valores.length) //para mostrar quantos elementos temos na array

valores.push ( false , null , ' teste') //por ser tipagem fraca,ele não liga que tipo de elemento esta na array
console.log(valores)
console.log(valores.pop())//para retirar o ultimo valor da Array



delete valores[0]//exclui o valor da posição desejada de uma array
console.log(valores) 

console.log(typeof valores)
