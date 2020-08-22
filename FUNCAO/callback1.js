const fabricante = ['Rhian','Arnando Cesar Coelho','Felipepe']

function imprimirFabricante(nome,indice){
      console.log(`${indice + 1}. ${nome}`)
}
 
fabricante.forEach(imprimirFabricante)
fabricante.forEach(fabricante =>  console.log(fabricante))