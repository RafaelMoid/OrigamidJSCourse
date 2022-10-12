// TIPOS DE VARIAVEIS
var nome = 'Rafael' ; //String
var idade = 32 ; //Number
var possuiFaculdade = true; //Boolean
var time; //undefined
var comida = null ; //Null
var simbolo = Symbol() ; //Simbolo
var novoObjeto= {} ; //Objeto

// Como descobrir o time de dado
console.log(typeof idade);

//Somando/Concatenando Strings
var sobrenome ="Varela";
var nomeCompleto = nome +  ' ' + sobrenome;
console.log(nomeCompleto);
console.log(typeof nome);
console.log(typeof nomeCompleto);

// Como fazer com que "aspas duplas" ou 'aspas simples'
// sejam validas em uma string
console.log('Basta fazer com está no \"VsCode\" na linha 22');

// Qual o beneficio de uma Template Strings

// String normal
var cardsEDH = 100;
var fraseDeck = 'um deck de EDH contém ' + cardsEDH + ' cartas.';
console.log(fraseDeck);

// Template String
var fraseDeck2 = `Um deck de EDH contém ${cardsEDH} cartas.`;
console.log(fraseDeck2);

// Exercicio da aula 2
// Declare uma variável contendo uma string
var commander ="Wilhelt, the Rotcleaver";

// Declare uma variável contendo um número dentro de uma string
var cmc = 2+"UB";

// Declare uma variável com a sua idade
var idade = 32;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var edhCommander = commander + " " + cmc;
console.log(edhCommander);

// Coloque a seguinte frase em uma variável: It's time
var fraseTeste = 'It\'s time';
console.log(fraseTeste);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof edhCommander);