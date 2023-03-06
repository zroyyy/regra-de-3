function calcular() {

var valor1 = prompt("Digite o valor 1:");
var valor2 = prompt("Digite o valor 2:");
var valor3 = prompt("Digite o valor 3:");

valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);
valor3 = parseFloat(valor3);

var resultado = (valor2 * valor3) / valor1;

alert("O valor procurado é: " + resultado);
}