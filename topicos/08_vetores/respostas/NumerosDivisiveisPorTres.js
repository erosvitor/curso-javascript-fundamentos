console.log("Números divisíveis por três");
console.log("");

var numeros = [8, 6, 27, 13, 36, 9];

for (var i=0; i < numeros.length; i++) {
  if (numeros[i] % 3 == 0) {
    console.log(numeros[i]);
  }
}
