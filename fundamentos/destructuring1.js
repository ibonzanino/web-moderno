const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome: s, bemHumorada: b = true} = pessoa
console.log(s, b)

const { endereco: { logradouro: l, numero: nr, cep: c} } = pessoa
console.log(l, nr, c)