/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
    normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
    para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento

    1 À vista em dinheiro ou cheque, recebe 10% de desconto
    2 À vista no cartão de crédito, recebe 15% de desconto
    3 Em duas vezes, preço normal de etiqueta sem juros
    4 Em três vezes, preço normal de etiqueta mais juros de 10%

    Método de pagamento
    Em dinheiro
    Em cheque
    No cartão

    1 parcela = 15% de desconto
    2 parcelas = preço do produto
    3 ou mais parcelas = acréscimo de 10%    
*/ 

    /* paseFloat trasnforma uma string em valor decimal*/ 

    let precoProduto = parseFloat(prompt('Qual o preço do produto'))

    while(isNaN(precoProduto) == true || precoProduto <= 0){
        alert('O preço digitado é invalido. Por favor, informe o preço apenas com números sem caracteres especiais(letras ou acentos)')    

        precoProduto = parseFloat(prompt('Qual o preço do produto'))
    }

    let mensagem = `
    Informe o método de pagamento:
    Digite 1 para pagamento em dinheiro
    Digite 2 para pagamento em cheque
    Digite 3 para pagamento em cartão
    `
    let metodoDePagamento = prompt(mensagem)

    while(metodoDePagamento > 3 || metodoDePagamento < 1){
        alert('Método de pagamento invalido, insira um metodo de pagamento valido para prosseguir com a compra.')

        metodoDePagamento = prompt(mensagem)
    }

    console.log(precoProduto)
    console.log(metodoDePagamento)

    if(metodoDePagamento == 1 || metodoDePagamento == 2){
        let precoFinal = (precoProduto * 0.9)
        alert(`O preço final do produto é de ${precoFinal}`)
    } else if(metodoDePagamento == 3){
        alert('Método de pagamento: cartão de crédito')
        
        let parcelas = parseInt(prompt('Informe a quantidade de parcelas'))

        if (parcelas == 1){
            let precoFinal = ( metodoDePagamento * 0.85)
            alert(`O preço final do produto é de ${precoFinal}`)
        } else if (parcelas == 2){
            alert(`O preço final do produto é de ${precoProduto}`)
        } else{
            let precoFinal = (precoProduto * 1.1)
            alert(`O preço final do produto é de ${precoFinal}`)
        }

    }

