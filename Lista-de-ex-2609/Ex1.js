/*1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo;
*/

const psAlturas = []

let pAlta = 0

let pBaixa = 100

let cont=1

while(cont <= 5){

    let A = parseFloat(prompt(`Insira a altura da ${cont} pessoa`))
    psAlturas.push(A)

    cont++

    if(A > pAlta){

        pAlta = A

    }else if(A < pBaixa){
        pBaixa = A
    }
}

document.write(`<p>A pessoa mais alta tem ${pAlta} metros, e a pessoa mais baixa tem ${pBaixa} metros</p>`)
