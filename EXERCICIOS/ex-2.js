/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/


const retornarIgual = (a,b,c) => {
    let diferente = a + b  + c
    if(a,b,c === a && b && c){
        console.log('O triângulo com valor de AB =' ,a, 'BC =',b, 'e CA =', c , 'é = Equilátero ')
    }else if((a != b) && (a != c) && (b != c)){
        console.log('O triângulo com valor de AB =' ,a, 'BC =',b, 'e CA =', c , ' é = Escaleno ')
    }else {
        console.log('O triângulo com valor de AB =' ,a, 'BC =',b, 'e CA =', c , 'é = Isósceles ')
    }
}

retornarIgual(1,1,3)


