/*
    * Funções são blocos de consturação fundametais em JS
    * um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função vc deve defini-la em algum lugar no escopo do qual vc quiser chama-la
*/ 

function cumprimentar(mensagem, repetir) {
    for(let i=1;i<=repetir;i++){
        alert(mensagem.toUpperCase())
    }

}

function soma(num, num2) {
    let resultado = num + num2
    
    return resultado
}

function maiorValor(a, b) {
    if(a>b){
        return 
    }else{
        return b
    }
}

/*let maior = maiorValor(3, 5)

console.log(`O maior valor é ${maior}`)

return serve para retirar uma variavel de dentro da função
Qualquer coisa dps do return não será executada

let resultado = soma(7.5, 7)

console.log(`O valor variável resultado é ${resultado}`)
*/

const num1= parseInt(prompt('Informe o primeiro número'))
const num2= parseInt(prompt('Informe o segundo número'))

alert(`O maior númeor entre esses é ${maiorValor(num1, num2)}`)