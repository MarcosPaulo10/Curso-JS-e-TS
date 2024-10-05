enum Mes {
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
};

const pessoa: {nome: string, mesAniversario: string } = {
    nome: "Marcos",
    mesAniversario: Mes.JAN
};

if(pessoa.mesAniversario === Mes.JAN) {
   console.log(pessoa);
};