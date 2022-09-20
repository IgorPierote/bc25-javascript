// Delimitação de strings

const aspasSimples = 'Olá, Mundo'
console.log(aspasSimples)
const aspasDuplas = "Olá, outro mundo"
console.log(aspasDuplas)

// Caracteres de escape (\n)

const teste = "Olá eu sou o JS. \nprazer em te conhecer"
console.log(teste)

// Com Crase (``) pode se quebrar o texto a vontade

const textoComCrase = `Olá eu sou
JavaScript
sou pior que o 
python`

console.log(textoComCrase)

// Metodos das strings

const texto = 'O java é muito legal aaaaaa javaaaaaaaaa'

// deixa o texto em letrar maiuscula

console.log(texto.toUpperCase())

//deixa o texto em letras minusculas

console.log(texto.toLowerCase())

// Concatena textos

console.log(texto.concat(' mas o python é melhor'))

// poder separar um caracter do texto

console.log(texto[2])

console.log(texto.substring(2, 11))

// substituir palavras

console.log(texto.replace('java', 'python')) // replace substitui a primeira ocorrência da pesquisa

// pode ser usado o replaceAll

const html = '<DOCTYPE html>\n<html></html>'

// Verificar se a string começa com a seguinte palavra

console.log(html.startsWith('<DOCTYPE html>'))

// Verificar se a string termina com a seguinte palavra

console.log(html.endsWith('</html>'))

// Remove espaços em brancos

const mensagem = '                                               Olá, mundo                                        '

console.log(mensagem)
console.log(mensagem.trim())

// Mostra a quantidade de caracteres que tem um texto

let senha = 'sonic'

console.log(senha)
console.log(senha.length)

// Teste para ver quantos caracteres tem a palavra

console.log(senha.length >= 8)