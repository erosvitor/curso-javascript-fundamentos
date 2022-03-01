console.log("Temperatura mínima e máxima");
console.log("");

var temperaturas = [27.8, 26.9, 24.7, 26.9, 25.8, 27.6, 23.0, 21.2, 29.1, 25.4];

var tempMinima = 999.9;
var tempMaxima = 0.0;

for (var i=0; i < temperaturas.length; i++) {
  if (temperaturas[i] < tempMinima) {
    tempMinima = temperaturas[i];
  }
  if (temperaturas[i] > tempMaxima) {
    tempMaxima = temperaturas[i];
  }
}

console.log("Temperatura mínima: " + tempMinima);
console.log("Temperatura máxima: " + tempMaxima);
