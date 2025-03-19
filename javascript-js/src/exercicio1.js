const dadosPessoais = {
  nome: 'Federico',
  sobrenome: 'Couretot',
  cpf: 80180969960,
};
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

//modificar a propriedade preco para 3000//

const carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;

// crie um objeto de un cachorro que represente um labrador, preto com 10 anos, que late ao ver um homen//

const cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: '10 anos',
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  },
};
