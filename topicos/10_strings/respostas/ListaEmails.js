console.log("Lista de emails para mala direta");
console.log("");

var dados = [
    "Beltrano da Silva;beltrano@gmail.com", 
    "Siclano Goncalves;siclano@yahoo.com.br", 
    "Fulano Pereira Alves;fulanoalves@gmail.com", 
    "Alvarenga Pedroso;pedroso@hotmail.com"
];

var emails = [];

var posicaoDoCorte;
for (var i=0; i < dados.length; i++) {
  posicaoDoCorte = dados[i].indexOf(";") + 1;
  emails.push(dados[i].substring(posicaoDoCorte));
}

for (var i=0; i < emails.length; i++) {
  console.log(emails[i]);
}
