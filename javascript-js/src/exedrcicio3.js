/* por qual motivo o código abaixo retorna com erros?*/
{
  var cor = 'preto';
  const marca = 'fiat';
  let portas = 4;
  console.log(cor, narca, portas);
} /* porque nao pode ser dado console.log a uma VAR que e uma palavra reservada e ao chamar o console log fora do bloco nao conseguimo accesao ao valores do let e do const.
console.log(var,narca,portas) */

/* Como corregir o erro abaixo? */
const dois = 2;
function somarDois(x) {
  /*const dois = 2; solução colocar a variaver fora do escopo */
  return x + 2;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

/* O que fazer para total retornar 500? */
/*var numero = 50;(muda ver por const); e muda o var por for(var numero = 0; numero <10; numero++) e cria a const total{
 */
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}
const total = 10 * numero;
console.log(total);
