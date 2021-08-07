const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
const template = ` 
       Olá 
       ${nome}!
       
    
       
       `
    
   console.log(concatenacao , template)
   
   //expressoes...
   console.log(`1+1 = ${1+1} `)

   const up = texto => texto.toUpperCase() //Função para deixar tudo maiusculo
   console.log(`Ei... ${up('cuidado')}!`) //Chamei  a função up para deixar tudo maiusculo
