var  numero = 1
{
    var  numero = 2
    console.log('Dentro = ',numero) //msm sendo um bloco,ele ainda é global
}

console.log('Fora = ' ,numero)


var  numero = 1
function rhian() {
    var  numero = 2
    console.log('Dentro = ',numero) // ja que esta dentro de uma função,ele não será modificado,não é global
}
rhian() 
console.log('Fora = ' ,numero)

