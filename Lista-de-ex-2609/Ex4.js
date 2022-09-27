/* 4 - Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante*/

const l = prompt('Insira a letra que deseja verificar')

if(l === 'A' || l === 'a' || l === 'e' || l === 'E' || l === 'I' || l ==='i' || l === 'o' || l === 'O' || l === 'u' || l === 'U' ){
    document.write(`<p>A letra ${l} é uma vogal</p>`)
}else{
    document.write(`<p>A letra ${l} não é uma vogal</p>`)
}
    