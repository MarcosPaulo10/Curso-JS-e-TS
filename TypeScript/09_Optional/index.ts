const fn = (nome: string, idade?: number) => {
    if(!idade){
        return `nome: ${nome}, idade: sem valor definido`;
    }
    return `nome: ${nome}, idade: ${idade}`;
};

console.log(fn("Marcos", 26));
console.log(fn("Paulo"));