/* 
function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`)
}

saudacao("Marcos Paulo")
*/

/*
function saudacao(nome) {
    return `Bom dia, ${nome}!`
}

const varivael = saudacao("Marcos Paulo")
console.log(varivael)
*/

function soma(x = "Não foi enviado", y = " argumentos para os parâmetros!") {
    const resultado = x + y
    return resultado
}

console.log(soma(2, 4))
console.log(soma(4, 10))
console.log(soma(4, 3))
console.log(soma())

// Arrow Function
const resultado = n => n ** 0.5

console.log(`A raiz quadrada de 16 é ${resultado(16)}.`)