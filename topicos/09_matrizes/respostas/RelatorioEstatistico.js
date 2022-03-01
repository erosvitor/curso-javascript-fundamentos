console.log("Relatório Estatístico");
console.log("");

var dados = [
  [1450.40, 1],
  [2630.00, 2],
  [970.00, 2],
  [1790.30, 1],
  [2150.10, 3],
  [1080.00, 2],
  [1920.60, 2],
  [2530.80, 3]
];  

var totalSalarios = 0.0;
var totalNumeroFilhos = 0.0;
var maiorSalario = 0.0;

for (var i=0; i < dados.length; i++) {
  totalSalarios += dados[i][0];
  totalNumeroFilhos += dados[i][1];
  if (dados[i][0] > maiorSalario) {
    maiorSalario = dados[i][0];
  }
}

var salarioMedio = totalSalarios / dados.length;
console.log("O salário médio é de: " + salarioMedio);

var mediaQtdeFilhos = totalNumeroFilhos / dados.length;
console.log("A quantidade média de filhos é: " + mediaQtdeFilhos);

console.log("O maior salário é: " + maiorSalario);

