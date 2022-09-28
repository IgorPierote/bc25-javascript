/*
    Crie um algortimo que recebe informações de 15 produtos. Cada produto possui nome, marca, 
    uma foto (link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque. 
    Ao receber essas informações dos produtos, imprima no HTML essas 
    informações de cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total).
*/ 

cont = 0

let produtos = {
    Nome: '',
    Marca: '',
    Foto: '',
    PrecoU: 0,
    ProdE: 0,
}

while(cont <= 15){

    produtos.Nome = prompt(`Insira o nome do ${1+cont} produto`)
    produtos.Marca = prompt(`Insira o nome da marca do ${1+cont} produto`)
    produtos.Foto = prompt(`Insira a foto do ${1+cont} produto`)
    produtos.PrecoU = prompt(`Insira o preço do ${1+cont} produto`)
    produtos.ProdEst = prompt(`Insira a quantidade em estoque do ${1+cont} produto`)

    document.write(`<p>
    
    <img src='${produtos.Foto}' alt='produtos' width=400></img>
    </br>
    
    Produto ${1+cont}: ${produtos.Nome};

    Marca do produto ${1+cont}: ${produtos.Marca};

    Preço do produto ${1+cont}: ${produtos.PrecoU};

    Quantidade em estoque ${1+cont}: ${produtos.ProdEst}

    Custo total do produto: ${produtos.PrecoU * produtos.ProdEst}
    
    </p>`)

   cont++
}
