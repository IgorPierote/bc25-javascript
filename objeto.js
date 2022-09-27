/*
    Objeto é uma estrutura que permite organizar dados na forma de chave-valor
*/ 
let end = {
    rua: 'Rua principal',
    numero: 456,
    estado: 'BH',
    complemento: 'Sem complemento',
    cep: '000000-000'
}

let pessoa = {
    nome: 'Joana',
    idade: 23,
    cpf: '000.000.000-00',
    altura: 156,
    endereco: { ...end},
    solteiro: true,
    habilidades: ['React','Java','Javascript','Golang'],
    cumprimentar() {
        // Quando eu desejo referenciar o mesmo objeto dentro dele mesmo uso a palavra 'this'
        console.log(`Olá, tudo bem? Meu nome é ${this.nome} `)
    }
}
/*
console.log(end)
console.log(pessoa.habilidades)
console.log(pessoa.habilidades[2])
console.log(pessoa.endereco.estado)
*/
/*
console.log(pessoa.nome)

pessoa.nome = 'Pablo'

console.log(pessoa.nome)

console.log(pessoa.habilidades)

pessoa.habilidades.push('Angular')



console.log(pessoa['cpf'])

console.log(end.rua)

console.log(pessoa.endereco.rua)

pessoa.endereco.rua = 'Rua secundaria'

console.log(pessoa.endereco.rua)

console.log(end.rua)
*/



console.log(pessoa.habilidades[1])

