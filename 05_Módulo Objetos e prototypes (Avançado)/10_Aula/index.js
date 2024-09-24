const pessoas = [
    { id: 2, nome: 'Maria'},
    { id: 3, nome: 'Marcos'},
    { id: 1, nome: 'Marcia'}
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);