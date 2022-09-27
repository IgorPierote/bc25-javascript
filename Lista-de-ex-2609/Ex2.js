/*
    2. Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial
*/ 

let num  = parseInt(prompt(`Insira o número que deseja ver o fatorial`))

let num2 = num

let f = 1

for(let i=1;i <= num2; i++){

    f = f * num

    console.log(f)
    
    num--
}

document.write(`<p> ${num2} ! = ${f} </p>`)