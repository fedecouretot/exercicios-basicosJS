/* some 500 ao valor Screoll abaixo, atrubuindo o novo valor a scroll*/
var scroll = 1000;
scroll += 500;
console.log(sscroll);

/* Atributo true para a valriavel darCredito, caso o cliente possua carro e casa. e false caso contrario*/

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;
darCredito =
  possuiCarro && possuiCasa ? 'Dar crédito ao cliente' : 'Negar crédito';

console.log(darCredito);
