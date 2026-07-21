console.log("\nCafé Aurora - Script carregado!\n\n");

const nomeCafe = "Café Aurora";
const anoFundacao = 1980;
const anoAtual = new Date().getFullYear();
let anosDeCasa = anoAtual - anoFundacao;

console.log(`\n${nomeCafe} está aberto há ${anosDeCasa} anos\n\n`);

console.log(`\n${nomeCafe} : ${typeof nomeCafe} \n\n${anoFundacao} : ${typeof anoFundacao} \n\n${anosDeCasa} : ${typeof anosDeCasa}\n\n`);

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

const somaTotal = precoExpresso + precoCappuccino + precoPaoNaChapa + precoBoloDoDia;
console.log(`\nR$ ${somaTotal.toFixed(2)}\n\n`);

function testandoIgualdade (valor = 7) {
    return `\nTeste de igualdade: ${valor === "7"}\n\nComo podemos ver, essa afirmação é falsa, pois o valor 7 é do tipo number, enquanto o valor "7" é do tipo string.\n\n`
}
console.log(testandoIgualdade());

function parImpar (valor) {
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
function saudar (nome){
    return `Olá, ${nome}!`
}
console.log(saudar(nome));

const preco = document.querySelectorAll(".card_preco");
preco.forEach(
    element => element.textContent = formataPreco(element.innerHTML)
);

function formataPreco(valor){
    valor = valor.replace(",", ".");
    valor = Number(valor);
    return `R$ ${valor.toFixed(2)}`;
}