function tratarErroELancar(erro){
    throw console.error(`EROOOOOOOR`);
    //throw new Error('kkk erro dnv')
    //throw 10
   // throw true 
    // throw 'EROROROROR'
     //throw{
      //  nome: erro.nome,
      //  msg: erro.mesage,
      //  date: new Date
  //  }
}

function imprimirNomeGritado(obj) {
 try{
    console.log(obj.name.toUppercase() + '!!!!') //dará um erro,e vamos personalizar o erro!
 } catch (e) {
     tratarErroELancar(e)
 } finally { //será executado msm q ocorra um erro
    console.log('Estarei aqui mesmo  nos teus ERROS!')

 }
}
    

const obj = {nome : 'Roberto'}
imprimirNomeGritado(obj)