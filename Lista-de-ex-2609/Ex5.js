/*
    5. Crie um código que receba 3 valores do comprimento de um triângulo e 
    depois mostre um alert informando se o triângulo é equilátero, isóceles ou escaleno.
*/ 

const lados = []

let cont=1

while(cont <= 3){

    let l = parseFloat(prompt(`Informe o ${cont} lado do triangulo`))
    lados.push(l)
    console.log(lados)

    cont++
}


if(lados[0] == lados[1] && lados[1] == lados[2]){
    alert('Este triângulo é equilátero')
    
}else{
    if(lados[0] != lados[1] && lados[0] != lados[2]){
        alert('Este triângulo é escaleno')
    }else{
        alert('Este triângulo é isóceles')
    }
}
