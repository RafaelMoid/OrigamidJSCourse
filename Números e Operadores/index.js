// EXERCICIOS NUMEROS E OPERADORES

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// Total 35
console.log(total);
// Crie duas expressões que retornem NaN
var NaN1 = 'Rafael' - 25;
var NaN2 = 'Varela' - 30;

console.log(NaN1,NaN2);

// Somar a string '200' com o número 50 e retornar 250
console.log(+'200' + 50);

// Incremente o número 5 e retorne o seu valor incrementado
var number = 5;
console.log(++number);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
var pesoPorDois = (numero / 2) + unidade; // NaN (Not a Number)
console.log(pesoPorDois);
