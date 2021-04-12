var operação = prompt("digite 1 para divisão, 2 para multiplicar, 3 para somar e o 4 para subtrair e 5 para potencia e 6 para porcentagem, 7 para raiz quadrada")

var resultado = primeiroValorNumero * segundoValorNumero

if(operação == 1) {
  var primeiroValor = prompt("digite o primeiro valor:")
  var segundoValor = prompt("digite o segundo valor:")
  var primeiroValorNumero = parseInt(primeiroValor)
  var segundoValorNumero = parseInt(segundoValor)
  var resultado = primeiroValorNumero / segundoValorNumero
  document.write("<h2>" + primeiroValorNumero + " / " + segundoValor + " = " + resultado + "</h2>")
} 

else if (operação == 2) {
  var primeiroValor = prompt("digite o primeiro valor:")
  var segundoValor = prompt("digite o segundo valor:")
  var primeiroValorNumero = parseInt(primeiroValor)
  var segundoValorNumero = parseInt(segundoValor)
  var resultado = primeiroValorNumero * segundoValorNumero
  document.write("<h2>" + primeiroValorNumero + " x " + segundoValor + " = " + resultado + "</h2>")
}

else if (operação == 3) {
  var primeiroValor = prompt("digite o primeiro valor:")
  var segundoValor = prompt("digite o segundo valor:")
  var primeiroValorNumero = parseInt(primeiroValor)
  var segundoValorNumero = parseInt(segundoValor)
   var resultado = primeiroValorNumero + segundoValorNumero
  document.write("<h2>" + primeiroValorNumero + " + " + segundoValor + " = " + resultado + "</h2>")
}

else if (operação == 4) {
  var primeiroValor = prompt("digite o primeiro valor:")
var segundoValor = prompt("digite o segundo valor:")
var primeiroValorNumero = parseInt(primeiroValor)
var segundoValorNumero = parseInt(segundoValor)
  var resultado = primeiroValorNumero - segundoValorNumero
  document.write("<h2>" + primeiroValorNumero + " - " + segundoValor + " = " + resultado + "</h2>")
}

else if (operação == 5) {
  var numeroComoTexto = prompt("qual o numero que quer colocar a potencia?")

var potencia = prompt("qual a potencia desse numero?")

var numeroComonumero = parseInt(numeroComoTexto)

var potenciaComoNumero = parseInt(potencia)

var resultado = numeroComonumero**potenciaComoNumero

document.write("<h2>" + resultado + "</h2>")
}

else if (operação == 6) {
  var entrada, x, valorTotalEntrada, valor, resultado;
entrada = prompt("Digite o valor total");
x = parseInt(entrada);
valorTotalEntrada = prompt("para qual a porcentagem? ");
valor = parseInt(valorTotalEntrada);
resultado = valor*(x/100);
document.write("<h2>" + resultado + "%" + "</h2>")
}

else if (operação == 7) {
  var digito = parseInt(prompt("qual valor quer obter a raiz quadrada?"))
  var resultado = Math.sqrt(digito)
document.write("<h2>" + resultado + "</h2>")
  
}

else {
  document.write("<h2>opção invalida</h2>")
}

//escrevendo na tela - document.write()
//concatenação(juntar uma palavra com variação) - ("palavra  + variavel)


//if = se
//else = senão
//else if = senão se
