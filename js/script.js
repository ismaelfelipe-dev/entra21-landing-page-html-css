console.log("\nCafé Aurora - Script carregado!\n\n");

const nomeCafe = "Café Aurora";
const anoFundacao = 1980;
const anoAtual = new Date().getFullYear();
let anosDeCasa = anoAtual - anoFundacao;

console.log(`\n${nomeCafe} está aberto há ${anosDeCasa} anos\n\n`);

console.log(
  `\n${nomeCafe} : ${typeof nomeCafe} \n\n${anoFundacao} : ${typeof anoFundacao} \n\n${anosDeCasa} : ${typeof anosDeCasa}\n\n`,
);

const rodape = document.querySelector(".rodape p");
rodape.textContent = `© ${anoAtual} ${nomeCafe} • ${anosDeCasa} anos de história.`;

const cidade = "Gaspar";
let temperatura = 5;
console.log(`\n${cidade} - ${typeof cidade}\n\n`);
console.log(`\n${temperatura} - ${typeof temperatura}\n\n`);
console.log(`\n${cidade.toUpperCase()}\n\n`);
console.log(`\n${nomeCafe.length}\n\n`);
console.log(`\n${Boolean(0)} - ${Boolean("")} - ${Boolean("Café")}\n\n`);

let precoExpresso = 7;
let precoCappuccino = 12;
let precoPaoNaChapa = 8;
let precoBoloDoDia = 10;

const somaTotal =
  precoExpresso + precoCappuccino + precoPaoNaChapa + precoBoloDoDia;
console.log(`\nR$ ${somaTotal.toFixed(2)}\n\n`);

function testandoIgualdade(valor = 7) {
  return `\nTeste de igualdade: ${valor === "7"}\n\nComo podemos ver, essa afirmação é falsa, pois o valor 7 é do tipo number, enquanto o valor "7" é do tipo string.\n\n`;
}
console.log(testandoIgualdade());

function parImpar(valor) {
  if (valor % 2 === 0) {
    return "\nPar\n\n";
  } else {
    return "\nÍmpar\n\n";
  }
}
console.log(parImpar(anoAtual));

const media = somaTotal / 4;
console.log(`\nMédia: R$ ${media.toFixed(2)}\n\n`);

let nome = "Ismael";
function saudar(nome) {
  return `\nOlá, ${nome}!\n\n`;
}
console.log(saudar(nome));

const precoTeste = document.querySelectorAll(".card_preco");
precoTeste.forEach(
  (element) => (element.textContent = formataPreco(element.innerHTML)),
);

function formataPreco(valor) {
  valor = valor.replace(",", ".");
  valor = Number(valor);
  return `R$ ${valor.toFixed(2)}`;
}

// const cafeAberto = (hora) => hora >= 8 && hora < 19;

// const statusCafe = (hora) => cafeAberto(hora) ? "\nAberto\n\n" : "\nFechado\n\n";
// console.log(statusCafe(10));
// console.log(statusCafe(22));

// function saudacaoPorHora (hora) {
//     if(cafeAberto(hora)) {
//         return "\nEstamos aberto\n\n"
//     } else {
//         return "\nEstamos fechado\n\n"
//     };
// }
// console.log(saudacaoPorHora(10));
// console.log(saudacaoPorHora(22));

const cafeAberto = (hora) => hora >= 8 && hora < 19;
const horaAtual = new Date().getHours;
const aberto = cafeAberto(horaAtual);

console.log(horaAtual);


console.log(aberto ? "Estamos aberto!" : "Estamos fechado!");

const botaoHero = document.querySelector(".hero .botao");
botaoHero.textContent = aberto ? "Ver cardápio" : "Voltamos às 8h"

const precos = [7, 12, 8, 10];
console.log(`\nPrimeiro preço: ${precos[0]}\n\nÚltimo preço: ${precos[3]}\n\n`);
console.log(`\nExistem ${precos.length} itens\n\n`);

precos.push(15)
console.log(`\n${precos[4]}\n\n`);

for (const preco of precos) {
    console.log(`\n${preco}\n\n`);
}

const cardapioTeste = [
  {nome: "Expresso", preco: 7},
  {nome: "Cappuccino", preco: 12},
  {nome: "Pao na chapa", preco: 8},
];
const nomes = cardapioTeste.map((item) => item.nome);
console.log(nomes);

const precoBaixo = cardapioTeste.filter((item) => item.preco < 10);
console.log(precoBaixo);

const acharItem = cardapioTeste.find((item) => item.nome === "Cappuccino");
console.log(acharItem);

const somarPrecos = cardapioTeste.reduce((acumulador, item) => acumulador + item.preco, 0)
console.log(somarPrecos);

const cardapio = [
  {nome: "Espresso", descricao: "Café curto e intenso, com crema aveludada.", preco: 7.00},
  {nome: "Cappuccino", descricao: "Espresso, leite vaporizado e espuma cremosa.", preco: 12.00},
  {nome: "Pão na chapa", descricao: "Pão artesanal na manteiga, quentinho.", preco: 8.00},
  {nome: "Bolo do dia", descricao: "Fatia generosa feita na nossa cozinha.", preco: 10.00},
];

const titular = document.querySelectorAll(".card_titulo");
const descricao = document.querySelectorAll(".card_descricao");
const preco = document.querySelectorAll(".card_preco");

const heroTitulo = document.querySelector(".hero_titulo");
heroTitulo.textContent = "Mais que café, uma experiência em cada xícara.";

const menu = document.querySelectorAll(".menu_lista a");
console.log(menu.length);

const cardAddClass = document.querySelector("article");
cardAddClass.classList.add("Espresso")

