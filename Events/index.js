/*
    Criar uma função responsável por mostrar o alerta na tela

        O objeto document é uma representação do HTML do seu site dentro do JS
    
        getElementById serve para recuperar um elemento no HTML 

        A propriedade classList retorna um array com todas as classes CSS que um elemento possui

        classList.add() serve para adicionar outras classes dinamicamente dentro de um elemento html
*/ 


let counter = 0;


function mostrarAlerta() {
    
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')

    counter++

    if(counter>0){
        document.getElementById('counter').innerHTML = `Você clicou ${counter} vezes `
    }

}

function fecharAlerta() {
/*
    classList.remove() remove uma classe dinamicamente de dentro de um HTML
*/ 

    counter = 0;

    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')

    
}




const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

/*
    addEventListener é um método que te permite ouvir eventos do HTML pelo JS

    Se eu precisar passar uma função como parâmetro para outra ue passo a referência dela, ou seja, a função sem parentese na
*/ 

btnMostrar.addEventListener('click', mostrarAlerta)

btnFechar.addEventListener('click', fecharAlerta)

