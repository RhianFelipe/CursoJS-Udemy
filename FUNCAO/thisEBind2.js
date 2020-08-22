function Pessoa() {
    this.idade = 0
     setInterval(function(){
         this.idade++
         console.log(this.idade)
     }.bind(this),1000)
}

new Pessoa


//forma de driblar a falta de Bind para puxar o this,um codigo bem comum.

function Pessoa() {
    this.idade = 0
    const self = this
     setInterval(function(){
         self.idade++
         console.log(self.idade)
     }/*.bind(this)*/,1000)
}

new Pessoa