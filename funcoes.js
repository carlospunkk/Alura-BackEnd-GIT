/*function x(texto) {
  console.log(texto)
}
x("olá mundo")*/

// declaração de função

/* parâmetros
let x1 = 4;
let x2 = 5;

function soma(n1, n2) {
  console.log(n1 + n2)

}
soma(x1, x2)
soma(1, 1)
*/
// chamar funcão dentro de outra função /aqui chamei a função soma() dentro da minha função imprime para mostrar o resulta da função soma()
/*function imprime(texto) {
  console.log(texto)
}
imprime(soma())
*/


/*function soma(n1, n2) {
  return n1 + n2;

}*/
//console.log(soma())


// parmetro com texto invertido

/*function exibetexto(texto2, texto1) {

  console.log(texto1 + texto2)

}
exibetexto("olá primo", "voce retornou")*/

/*function nomeIdade(nome, idade) {
  return `OLÁ TUDO BEM ${nome} SUA IDADE É : ${idade}`
}
console.log(40, "juju")*/

//parâmetro com função dentro
/*
function multiplica(num1, num2) {
  return num1 * num2
}
console.log(multiplica(soma(10, 10), soma(3, 4)))
*/

//DEFININDO UM PARÂMETRO PADRÃO NA MINHA VARIAVEL

/*function multiplica(num1 = 1, num2 = 1) {
  return num1 * num2
}
// ||||||||||||||||||||  (4)    |||     (3)   ||||
console.log(multiplica(soma(2, 2), soma(2, 1)))*/


// declaração de função

/*function minhaFuncao(param) {
  //bloco codigo
}
minhaFuncao("param")*/

// expressão de função

/*const somaTwo = function (num1, num2) { return num1 + num2 }
console.log(somaTwo(1, 2))*/


//diferença principal > hoisting
// funções e var são "listadas" no topo do arquivo
/*console.log(apresentar())
//execeção
function apresentar() {
  return "olá"
}

console.log(somaTwo(2, 3))
const somaTwo = function (num1, num2) { return num1 + num2 }
*/
// arrow functions >
/*const somaNumeros = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "somente numeros de 1 a 9"
  } else {
    return num1 + num2
  }
}
console.log(somaNumeros(1, 2))*/


// Callback Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.


/*function Mostratexto(nome) {
  console.log(nome)
}*/

/*function informacoes(callback) {
  const nomet = "carlos"
  callback(nomet)
}
*/

// com numeros

/*function Mostraresultado(resultado) {
  console.log(resultado)
}

function soma(n1, n2, cb) {
  const conta = n1 + n2;
  cb(conta)

}
soma(2, 2, Mostraresultado)


function multiplica(m1, m2, cb) {
  const calculo = m1 * m2;
  cb(calculo)
}
multiplica(3, 4, Mostraresultado)
*/








/*
Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

Math.round(4.3) retorna 4
Math.round(3.85) retorna 4
Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

Math.ceil(5.2) retorna 6
Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

Math.floor(5.2) retorna 5
Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

Math.trunc(4.3) retorna 4
Math.trunc(4.8) retorna 4
Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

Math.pow(4 , 2) retorna 4^2 = 16
Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
Math.sqrt() : Retorna a raiz quadrada de um número.

Math.sqrt(64) retorna 8
Math.min(): Retorna o menor valor entre os argumentos.

Math.min(0, 150, 30, 20, -8, -200) retorna -200
Math.max(): Retorna o maior valor entre os argumentos.

Math.max(0, 150, 30, 20, -8, -200) retorna 150
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

Math.random() retorna 0.7456916270759015
Math.random() retorna 0.15449802102729304
Math.random() retorna 0.4214269561951203
*/