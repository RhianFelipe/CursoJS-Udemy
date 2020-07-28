function compras(trabalho1,trabalho2) {
    const compraSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const  comprarTv30 = !!(trabalho1 ^ trabalho2) //bitwese xor
    const comprarTv30 = trabalho1 != trabalho2
    const manterSaudave = !compraSorvete
    return{compraSorvete,comprarTv50,comprarTv30,manterSaudave}
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))