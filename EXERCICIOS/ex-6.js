/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const calcularMontante = (capitalInicial,taxDeJuros,tempoDeAplicacao) =>{
   let montante = capitalInicial * (Math.pow(1 + 0.10 , tempoDeAplicacao ))
  
  console.log(montante.toFixed(3))
}
calcularMontante(2.000,0.10,4)



