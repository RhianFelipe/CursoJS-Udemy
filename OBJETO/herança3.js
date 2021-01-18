const pai =  {nome:'Pedro',corCabelo:'Preto'}

const filha1 = Object.create(pai)
filha1.nome = "Bia"
console.log(filha1.corCabelo)
console.log(filha1.nome)
