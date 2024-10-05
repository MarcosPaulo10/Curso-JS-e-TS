// Se não for atríbuido um dado do mesmo tipo que foi determinado à variável, ocorrerá erro.
let pedido: string = "Pizza";
pedido = "Sanduíche";
console.log(pedido);

let numero: number = 123;
numero = 321;
console.log(numero);

let deuBom: boolean = false;
deuBom = true;
console.log(deuBom);

const fun = (value: string) => {
    return console.log(value)
};

fun("Marcos Paulo");
fun("10");