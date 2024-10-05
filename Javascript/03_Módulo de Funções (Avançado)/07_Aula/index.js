// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {

  const sobrenome = 'Nogueira';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Marcos Paulo'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(26, 68, 1.79);
