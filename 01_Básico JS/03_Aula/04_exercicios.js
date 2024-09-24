/*
    "Nome" "Sobrenome" tem "idade" anos, pesa "peso" kg
    tem "altura" de altura e seu IMC é de "IMC"
    "Nome" "Sobrenome" nasceu em "ano"
*/

const nome = "Marcos Paulo";
const sobrenome = "Nogueira Mendes";
const idade = 26;
const peso = 69;
const altura = 1.80;
let indiceMassaCorporal = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento, 'ou', anoNascimento + 1, '.');

console.log('');

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + 'kg');
console.log('tem ' + altura + ' de altura e seu IMC é de ' + indiceMassaCorporal);
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento + ' ou ' + (anoNascimento + 1) + '.');

console.log('');

// Melhor forma
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} ou ${anoNascimento + 1}.`);