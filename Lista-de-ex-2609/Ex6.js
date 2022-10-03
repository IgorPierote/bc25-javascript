/*
    6. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
    P.A. contendo 10 valores.
*/ 

let A = parseFloat(prompt('Insira o valor inicial'))

const R = parseFloat(prompt('Insira a razão'))

let cont = 0

let Valores = []

while(cont <= 9){
    
    A = A + R
    
    Valores.push(A)

    console.log(Valores[cont])
    
    document.write(`<p>Valor: ${Valores[cont]}</p>`)

    cont++
}



