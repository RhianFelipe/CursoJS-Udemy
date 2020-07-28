function seForAprovado(nota) {

    if(nota >= 7.0){
        console.log('Aprovado com ' + nota)
    }
}

seForAprovado(8.5)
seForAprovado(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(' ') //ele esta preenchido com um espaço branco,portanto é True
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
