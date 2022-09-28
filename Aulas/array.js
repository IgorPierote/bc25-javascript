/*
    Arrays ou Vetores é um tipo especial que te permite armazenar diversas variaveis em apenas um local
*/ 

// Criando um array

/*  let arr = new Array()
    let arr2 = new Array(5)
    Abrir [] funciona exatamente como digitar new Array() 
    * Dentro de um array eu posso ter vários tipos de dados
    * Cada posição é representada por um número
    * A primeira posição é sempre 0


let arr = [10, 15, 9.8,'Eu sou um texto dentro de um array', 'Olá, mundo' , true]  

console.log(arr[5])

arr[5] = 'outro texto'

console.log(arr[5])
console.log(arr[6])
arr[6] = 'Agora a posição 8 existe dentro de arr'
console.log(arr)
*/

const lista = ['Cleberson', 'Cleiton', 'Cleber', 'Milasquei','Silaskow','Paulão']
console.log(lista)

lista.push()

lista.push('Negoban') //adiciona um novo no final array
console.log(lista)

lista.unshift('Igovsk')//adiciona um valor novo no inicio do array
console.log('lista')

lista.pop() //remove o último valor do araray
console.log(lista)

lista.shift() //remove o primero valor de um array
console.log(lista)

console.log(lista.concat('Julião')) // cria um novo array adicionando um novo valor ao array

console.log(lista.join('->')) // junta os valores do array para criar uma string

console.log(lista.join('==='))