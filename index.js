const { Console } = require('console');
const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Lucas da Silva Lourenço Povoas";
const anoNascimento = 2007;
let anoAtual = 2024;
const idade = 17;

console.log(
  "Olá eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade + ".", );

let AnoAtual = 2025;
let Idade = 18;
const NomeCompleto = " Lucas da Silva Lourenço Povoas ";
const Faculdade = "Medicina";

console.log(
  "Olá meu nome é " + NomeCompleto + ", tenho " + Idade + " anos " + "estamos no ano de " + AnoAtual + " e eu gostaria de fazer faculdade na área de " + Faculdade, );

console.log(`Oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento} minha idade é ${idade}`);

const loginCerto = "Lucas";
const senhaCerto = 2103;
console.log("------------------------------------------------------------------------");
console.log("-AGÊNCIA DE VIAGENs✈︎✈︎✈︎");
console.log("------------------------------------------------------------------------");
console.log("Faça seu login:");

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");

while(login != loginCerto){
  console.log("Login Incorreto!!");
  login = entrada("Digite seu login novamente: ")
}

while(senha != senhaCerto){
  console.log("Senha Incorreta!");
  login = entrada("Digite sua senha novamente: ");
}
  
const listaDeViagens = new Array(
 `Disney`,
  `França`,
  `Itália`,
  `Coreia`,
  `Maranhão`
);

console.log(listaDeViagens);

console.log(listaDeViagens[4])
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.slice(1,2);
console.log(listaDeViagens);

var NomeComprador = entrada("Qual seu nome? ");
console.log(`Olá senhor(a) ${NomeComprador} seja bem vindo!`);
var IdadeComprador = entrada("Qual é a sua idade? ");

if (IdadeComprador < 18){
  console.log("Por ser menor de idade você não tem direito a passagem!!")
}
if (IdadeComprador >= 18){
  console.log("Você tem direito a essa passagem!!")
}