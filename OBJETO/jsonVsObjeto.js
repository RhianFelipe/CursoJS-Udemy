const obj = {a:1,b:2,c:3 , soma(){return a+b+c}}

console.log(JSON.stringify(obj)) //tranformar objeto em JSON

// console.log(JSON.parse("{a:1,b:2,c:3}")) DA ERRO,pois esta digitado errado
// console.log(JSON.parse("{'a':1,'b':2,'c':3}")) DA ERRO pois esta digitado errado

console.log(JSON.parse('{"a":1,"b":2,"c":3}')) //tranformar JSON em objeto

console.log(JSON.parse('{"a":1.7,"b":"string","c":true ,"d":{}, "e":[] }')) //JSON aceita quase todo tipo de valor,é usado para dados.



