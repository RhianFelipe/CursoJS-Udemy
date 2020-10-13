//usando a anotação literal
const obj1 = {

}

console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object

console.log(obj2)

//funçoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesc = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta ', 7.99, 0.15)
const p2 = new Produto('Notebbok ', 2000.99, 0.25)
console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

//Função  Factory (Fabrica um objeto)

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create

const filha = Object.create(null)
filha.name = 'Ana'
console.log(filha)

//Uma função famosa que retorna  Objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)