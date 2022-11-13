// Adicione a classe ativo a todos os itens do menu
var itensMenu = document.querySelectorAll('.menu p')
console.log(itensMenu);

itensMenu.forEach((item) => {
  item.classList.add('ativo');
  // console.log(item);
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
})

itensMenu[0].classList.add('ativo');
itensMenu.forEach((item) => {
  console.log(item);
})

// Verifique se as imagens possuem o atributo alt

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com');
console.log(link);