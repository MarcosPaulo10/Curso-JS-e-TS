function funcao() {
  console.log(arguments)
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


const conta = (...args) => {
  console.log(args);
};
conta('+', 1, 20, 30, 40, 50);
