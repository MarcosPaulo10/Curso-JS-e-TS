// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let valor of nomes) {
 console.log(valor);
}
