// Criando um array de números
const numeros = [10, 5, 8, 3, 15];

// Acessando elementos
console.log("O primeiro elemento é:", numeros[0]);

// Modificando um elemento
numeros[2] = 12;
console.log("Novo array:", numeros);

// Adicionando elementos ao final
numeros.push(20, 25);
console.log("Array com novos elementos:", numeros);

// Removendo o último elemento
const ultimoElemento = numeros.pop();
console.log("Último elemento removido:", ultimoElemento);
console.log("Novo array:", numeros);

// Adicionando elementos ao início
numeros.unshift(0, 1);
console.log("Array com elementos adicionados no início:", numeros);

// Removendo o primeiro elemento
numeros.shift();
console.log("Array após remover o primeiro elemento:", numeros);

// Encontrando o índice de um elemento
const indiceDoCinco = numeros.indexOf(5);
console.log("O índice do número 5 é:", indiceDoCinco);

// Verificando se um elemento existe
console.log("O número 10 existe no array?", numeros.includes(10));

// Criando um novo array com os elementos duplicados
const numerosDobrados = numeros.map(numero => numero * 2);
console.log("Números dobrados:", numerosDobrados);

// Filtrando os números maiores que 10
const numerosMaioresQueDez = numeros.filter(numero => numero > 10);
console.log("Números maiores que 10:", numerosMaioresQueDez);

// Reduzindo o array a uma soma
const soma = numeros.reduce((total, numero) => total + numero, 0);
console.log("A soma dos números é:", soma);