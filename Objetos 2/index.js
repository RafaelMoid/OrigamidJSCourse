// Crie um objeto com os seus dados pessoais
var rafael = {
  nome: 'Rafael',
  sobrenome:'Varela',
  filho: 'Leonardo Varela',
  esposa: 'Deborah Viegas',
  idade: 32,
  profissao: 'programador frontend',
  desejo: 'morar em pais de primeiro mundo',
}
// Deve possui pelo menos duas propriedades nome e sobrenome
//Feito

// Crie um método no objeto anterior, que mostre o seu nome completo
rafael.nomeCompleto = function(){ 
  return `$[this.nome] $[this.sobrenome]`; 
}


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var ralph = {
  raca:'labrador',
  cor:'preto',
  idade: '10 anos',
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'Au Au Au'
    } else {
      return'nada'
    }
  },
}