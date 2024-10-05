var Mes;
(function (Mes) {
    Mes["JAN"] = "Janeiro";
    Mes["FEV"] = "Fevereiro";
    Mes["MAR"] = "Mar\u00E7o";
})(Mes || (Mes = {}));
;
var pessoa = {
    nome: "Marcos",
    mesAniversario: Mes.JAN
};
if (pessoa.mesAniversario === Mes.JAN) {
    console.log(pessoa);
}
;
