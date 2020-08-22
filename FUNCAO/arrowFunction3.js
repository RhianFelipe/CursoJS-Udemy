let  comparaComThis = function (param) {
    console.log( this === param)

}

comparaComThis( global)
comparaComThis(this)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


//com ArrowFunction o this é fiel,ou seja,ele sempre será do jeitoq  foi feito e nunca mudara
let comparComThisArrow   = param  => console.log(this === param)
comparComThisArrow(global)
comparComThisArrow(this)
comparComThisArrow(module.exports)

comparComThisArrow = comparComThisArrow.bind(obj)
comparComThisArrow(obj)
comparComThisArrow(module.exports)

