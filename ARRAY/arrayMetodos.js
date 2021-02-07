const pilotos = ['Vettel','Alonso', 'Raikkonen','Massa']
pilotos.pop() //massa quebrou o carro! , pop remove o ultimo elemento da Array
console.log(pilotos)

pilotos.push('Verstappen') //push adiciona um novo elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') //adciona o primeiro elemento na array
console.log(pilotos) 

//splice pode  adicionar e remover elementos

//adiconar 
pilotos.splice(2,0, "Bottas","Massa")
console.log(pilotos)

//remover 
pilotos.splice(3,1)  // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo Array com elementos localizados após o valor pedido
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //indice 1 até o 4,mas o 4 não vai entrar
console.log(algunsPilotos2)






