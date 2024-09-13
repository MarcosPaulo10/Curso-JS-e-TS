// Math.floor() - Arredonda para baixo para o inteiro mais próximo
let numero = 3.7;
let resultado = Math.floor(numero);
console.log("Math.floor(3.7) =", resultado); // Saída: 3

// Math.ceil() - Arredonda para cima para o inteiro mais próximo
numero = 3.2;
resultado = Math.ceil(numero);
console.log("Math.ceil(3.2) =", resultado); // Saída: 4

// Math.round() - Arredonda para o inteiro mais próximo (arredonda para cima se a parte decimal for 0.5 ou mais)
numero = 3.5;
resultado = Math.round(numero);
console.log("Math.round(3.5) =", resultado); // Saída: 4

// Funções trigonométricas
// (Observe que os ângulos são em radianos)
let anguloEmRadianos = Math.PI / 4; // 45 graus em radianos
let seno = Math.sin(anguloEmRadianos);
let cosseno = Math.cos(anguloEmRadianos);
let tangente = Math.tan(anguloEmRadianos);
console.log("Seno de 45 graus:", seno);
console.log("Cosseno de 45 graus:", cosseno);
console.log("Tangente de 45 graus:", tangente);

// Outras funções úteis
// Math.abs() - Retorna o valor absoluto
let numeroNegativo = -5;
let valorAbsoluto = Math.abs(numeroNegativo);
console.log("Valor absoluto de -5:", valorAbsoluto);

// Math.sqrt() - Calcula a raiz quadrada
let raizQuadrada = Math.sqrt(16);
console.log("Raiz quadrada de 16:", raizQuadrada);

// Math.pow() - Eleva um número a uma potência
let potencia = Math.pow(2, 3); // 2 elevado a 3
console.log("2 elevado a 3:", potencia);

// Math.min() e Math.max() - Encontram o menor e o maior valor em um conjunto de números
let numeros = [2, 5, 1, 8];
let menorNumero = Math.min(...numeros);
let maiorNumero = Math.max(...numeros);
console.log("Menor número:", menorNumero);
console.log("Maior número:", maiorNumero);

// Math.random() - Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo)
let numeroAleatorio = Math.random();
console.log("Número aleatório:", numeroAleatorio);