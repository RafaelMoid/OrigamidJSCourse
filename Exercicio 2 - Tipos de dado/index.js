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