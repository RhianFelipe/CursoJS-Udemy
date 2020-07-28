function teste1(num) {
    if(num > 7.0)
    console.log(num) //ele só vai pegar a primeira linha, pois não esta dentro de um bloco
    console.log('Teste')// ele sempre executará, pois esta fora dso if
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //cuidado com o ';',não usar  com as estrututras de controle
        console.log(num) 
    }
}
//ele imprimi os 2,pois ele usa o if com o ';',esquecendo o resto
teste2(6)
teste2(8)