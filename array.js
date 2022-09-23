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
*/

let arr = [10, 15, 9.8,'Eu sou um texto dentro de um array', 'Olá, mundo' , true]  

console.log(arr[5])

arr[5] = 'outro texto'

console.log(arr[5])
console.log(arr[6])
arr[6] = 'Agora a posição 8 existe dentro de arr'
console.log(arr)