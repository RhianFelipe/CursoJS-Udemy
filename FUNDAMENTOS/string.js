const escola = 'Cod3r' // a palavra tem 4 indices(0 conta)

console.log(escola.charAt(4)) //função usada para escolher uma letra e tirar da palavra,por indice
console.log(escola.charAt(5)) //JS é mais relaxada com erros,por isso ela não ira reclamar, e sim dizer q achou apenas algo "vazio"
console.log(escola.charCodeAt(3)) //para saber pq tal resultado,pesquie o site Unicode
console.log(escola.indexOf('C')) //ele mostra o indice da letra escrita entre aspas(por ex o C esta no indice 0)
console.log(escola.substring(1))//Para cortar a posição para frente(Cod3r = od3r)
console.log(escola.charAt(0,3)) // Mostra só a parte entre os numeros seleciondaos(Cod3r = )
console.log('Escola '.concat(escola).concat("!")) //para fazer junção de palavras
console.log('Escola ' + escola + "!") //também pode fazer assim para juntar palavras
console.log('3' + 2) //ele não ira somar pois + tem maior preferencia para String
console.log(escola.replace(3,'e')) //usado para subistituir letras da palavra
console.log(escola.replace(/\w/g,'e')) //usado para subistituir todas as letras  e digitos de uma palavra por outra letra
console.log(escola.replace(/\d/g,'e')) //usado para subistituir todos os digitos de uma palavra
console.log('Ana,Maria,pedro'.split(',')) // Cria uma Array,escolhmeos como nós separamos

