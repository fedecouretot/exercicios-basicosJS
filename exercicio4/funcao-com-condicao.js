/*
Crie uma função chamada verificaPar que 
recebe um número como parâmetro e retorna true
se o número for par e false se for ímpar.
Teste a função chamando-a com alguns números e
mostre os resultados no console.
*/

function verificaPar(num) {
  return num % 2 === 0;
}

console.log(verificaPar(4));
console.log(verificaPar(7));
