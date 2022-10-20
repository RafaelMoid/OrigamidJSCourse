function areaQuadrado(lado){
  return lado*lado;
}

console.log(areaQuadrado(254));
// Sempre adicione parenteses para executar uma função
// O que fica dentro são os parametros da função
// caso você não passe os argumentos (valores dos parametros dentro das
// Funções)

console.log(areaQuadrado);

function imc (peso, altura){
  var imc = peso / (altura * altura);
  console.log("Seu IMC é:" + imc);
}

imc(115, 1.88);


function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Deck de controle é deck de psicopata';
  } else if(cor === 'preto') {
    return 'Monoblack provavelmente vai usar o Grave';
  } else if(cor === 'vermelho') {
    return 'Ou vai por mil goblins com haste ou vai queimar a sua cara, possivelmente os dois';
  } else {
    return 'Verde e Branco são OP deixe disso e evolua';
  } 
};

console.log(corFavorita('azul'));
console.log(corFavorita('preto'));
console.log(corFavorita('vermelho'));
console.log(corFavorita(''));


// Argumentos também podem ser funções
