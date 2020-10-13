const ferrari = {
    modelo:'F40',
    velMax:350
}

const volvo = {
    modelo:'V40',
    velMax:200
}

console.log(ferrari.prototype) // undefined(Pois ele pens q é objct)
console.log(ferrari.__proto__)//{} (Acesso ao objt pai)
console.log(ferrari.__proto__ === Object.prototype) // true,um objct padrão aponta para  Object.prototype
console.log(volvo.__proto__ === Object.prototype) // true,um objct padrão aponta para  Object.prototype
console.log(Object.prototype.__proto__ === null) // //true,Object.prototype aponta para null

function MeuObject(){}
console.log(typeof  Object , typeof MeuObject) // Retrona função,sabemos q os 2 são funções
console.log(Object.prototype, MeuObject.prototype) //{}  MeuObject {}