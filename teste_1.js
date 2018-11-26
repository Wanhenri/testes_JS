function exibeMensagem(endereco){
  return("O usuário mora em"
  +" "+
  endereco.cidade + 
  " / " +
   endereco.uf +
   ", no bairro"
   +" "+
   endereco.bairro + 
   ", na rua"
   +" " + 
   endereco.rua + 
   "com nº " + 
   endereco.numero + ".");
}

var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};

console.log(exibeMensagem(endereco));

function pares(x, y) {
  for (var i = x; i < y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

pares(32, 321);




//console.log("O usuário mora em" +" "+ endereco.cidade + " / " + endereco.uf + ", no bairro" +" "+ endereco.bairro + ", na rua" + " " + endereco.rua + "com nº " + endereco.numero + ".");

// O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
// nº 1293.
