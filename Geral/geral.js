/* Variáveis são como recipientes que armazenam dados em um programa. Em JavaScript, elas são usadas para guardar informações que podem mudar durante a execução do código.

Tipos de variáveis em JavaScript:
var: A forma mais antiga, mas menos recomendada devido a problemas de escopo.
let: Introduzida no ES6, permite reatribuição e tem escopo de bloco.
const: Introduzida no ES6, não permite reatribuição e tem escopo de bloco. */

// var (evite usar em códigos modernos)
var nome = "João";
nome = "Maria"; // Podemos mudar o valor

// let (recomendado para variáveis que podem mudar)
let idade = 30;
idade++; // Podemos incrementar o valor

// const (para valores que não devem mudar)
const pi = 3.14159;
// pi = 3.15;  // Isso geraria um erro, pois pi é constante

// --------------------------------------------------------------------------- //

// Funções são blocos de código reutilizáveis que realizam tarefas específicas. Elas permitem que você organize seu código de forma modular, evitando repetições e tornando-o mais fácil de entender e manter.

// Sintaxe básica:
function nomeDaFuncao(parâmetro1, parâmetro2) {
    // Código a ser executado
    return valor; // Opcional
};

//Exemplo:
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
};
  
saudacao("João"); // Chamada da função

// Funções com retorno: Uma função pode retornar um valor usando a palavra-chave return. O valor retornado pode ser usado em outras partes do seu código.
function soma(a, b) {
    return a + b;
};
  
let resultado = soma(3, 5); // resultado será 8

// Funções anônimas: Funções que não possuem um nome. São frequentemente usadas como argumentos de outras funções ou atribuídas a variáveis.
const soma = function(a, b) {
    return a + b;
};

console.log(soma(1, 2));

// Arrow Functions (funções em seta):
const dobro = x => x * 2;

console.log(dobro(5));

// Exemplo mais complexo:
function calcularImposto(valor, taxa) {
    const imposto = valor * taxa / 100;
    return imposto;
};
  
const precoProduto = 100;
const taxaImposto = 18;
const valorImposto = calcularImposto(precoProduto, taxaImposto);
  
console.log("Valor do imposto:", valorImposto);

// --------------------------------------------------------------------------- //