/**
 * Crie um algoritmo para ler N números, some-os e faça a média entre os números
 */

let num = parseFloat(prompt('Insira a quantidade de números que deseja somar para ver a média'))

let resultado=0
let resultadoFinal=0
let num1=0

for(let v = 1; v <= num; v++){
    
    num1 = parseFloat(prompt(`Insira o ${v} número`))
    
    resultado =  resultado + num1;
     
}

resultadoFinal = parseFloat(resultado / num);


alert(`A média da soma dos números inseridos é ${resultadoFinal}`)


