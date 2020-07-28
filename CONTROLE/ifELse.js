const imprimirResultadoNota = function(nota) {

    if(nota > 7){
        console.log('Aprovado')

    }else{
        console.log('Reprovado')
    }
}

imprimirResultadoNota(6)
imprimirResultadoNota(8)
imprimirResultadoNota('EPAAAAAAAAAAAAAAAAA!!')//Cuidado!! Tipagem fraca
