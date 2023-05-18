// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []


// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

const frutas1 = {
    nome: "Abacaxi",
    preco: "5 reais",
    disponibilidade: true
}
const frutas2 = {
    nome: "maça",
    preco: "5 reais",
    disponibilidade: true
}

const frutas3 = {
    nome: "banana",
    preco: "5 reais",
    disponibilidade: true
}


// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.

sacolao.push(frutas1)
sacolao.push(frutas2)
sacolao.push(frutas3)


// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.

console.log(sacolao)