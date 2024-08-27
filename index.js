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

const IdadeComprador = 17;

if (IdadeComprador < 18){
  console.log("Por ser menor de idade você não tem direito a passagem!!")
}

if (IdadeComprador >= 18){
  console.log("Você tem direito a essa passagem!!")
}