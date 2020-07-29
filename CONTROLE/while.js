function getAleatorioEntre(min,max){
    const valor = Math.random() * (max-min) + min
    return(Math.floor(valor))

}

var opcao = 0
while(opcao != -1){
    opcao = getAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a Próxima!!!')