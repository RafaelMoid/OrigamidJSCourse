//Removendo o ultimo item da array
// var ultimoItem = videoGames.pop();

//Loop FOR
// é composto de 3 partes: INICIO, CONDIÇÃO e INCREMENTO
for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

//Loop While
var i = 0;
while (i <= 100) {
  console.log(i);
  i = i + 9;
}


var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

//Loop de videoGames
videoGames.forEach(element => {
  console.log(element);
});


//EXERCICIOS
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilWins = ['1959', '1962', '1970', '1994', '2002'];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilWins.forEach(vitoria => {
  console.log(`O brasil ganhou a copa de ${vitoria}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera'){
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var frutinha = frutas[4];
console.log(frutinha);