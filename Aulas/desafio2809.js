/*
    Criem uma função que gera o resultado de uma equação do segundo grau
    ax^2 + bx + c = 0

    delta = b^2 - 4ac
    b = -b +- raiz de delta /2a    
*/ 

function equacao2(a, b, c) {

    let delta = (b**2 - 4 * a * c)

    let resultado1

    let resultado2
    
    // Math.sqrt() serve para tirar a raiz quadrada

    resultado1 = raiz1 = (-b + Math.sqrt  (delta) )/ 2*a;
        
    resultado2 = raiz2 = (-b - Math.sqrt(delta) )/ 2*a;
    

    return [resultado1, resultado2]
}

console.log(equacao2(1, -1, -12))

