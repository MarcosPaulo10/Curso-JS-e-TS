// Tupla (tem que ser na ordem e quantidade das tipagens definidas)
let array1: [string, string, number, boolean] = [
    "Marcos Paulo",
    "Teste",
    123,
    true,
];

// Pode ser qualquer quantidade dentre as tipagens definidas
let array2: Array<string | number | boolean> = [
    "Marcos Paulo",
    "Teste",
    123,
    "Arroz",
    false,
    10,
];

console.log(array1);
console.log(array2);

let obj1: {nome: string, sobrenome: string, idade: number} = {nome: "Marcos", sobrenome: "Mendes", idade: 26};

console.log(obj1);

let obj2: Array<{
    nome: string,
    sobrenome: string,
    idade: number,
    deuBom: boolean
}> = [
    {
    nome: "Marcos",
    sobrenome: "Mendes",
    idade: 26,
    deuBom: true
    },
    {
    nome: "Paulo",
    sobrenome: "Nogueira",
    idade: 60,
    deuBom: true
    },
    {
    nome: "Fabiana",
    sobrenome: "Pereira",
    idade: 35,
    deuBom: false
    }
]

console.log(obj2);