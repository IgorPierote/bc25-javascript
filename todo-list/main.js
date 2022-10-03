/*
    Métodos de recuperação de elementos HTML
*/
// recupera elementos HTML apartir do nome da tag
//const todoForm = document.getElementsByTagName('form')[0]

const todoForm=document.getElementById('todo-form')
const todos = []
/*
    AddEventeListener serve para ouvir eventos de lementos
    HTML sempre que forem emitidos
*/

todoForm.addEventListener('submit', function(evento) {
    /*
        querySelector recupera o primeiro elemento que atenda a um seletor css informado
    */
   evento.preventDefault()
    /*
        Cancela o comportamento padrão de um formulário que seria o recarregamentro da página tentando fazer seu envio
    */
   evento.stopPropagation()
   /*
        Cancela a propagação do evento que foi emitido para os elementos evitando que outros eventos sejam emitidos
   */
    const todoInput = document.querySelector('#input-todo')
    /*
        A propriedade value é uam propriedade que represeta o atributo value dos elementos de formulário do HTML, para acessarmos o valor que está dentro deles
    */
   
    todos.push(todoInput.value)
    todoInput.value = ''
    renderizarTodos();
})

function renderizarTodos() {
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = ''
    /*
        CreateElement é o metodo responsábvel por gerar novos elementos
        HTML detro do JS a paartir do nome tags
    */
    for (let tarefa of todos) {
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')

        pTodoText.innerText = tarefa

        /*
            innerText é a propriedade que informa qual o contéudo de texto que está dentro de um elemento HTML
        */ 

       const btnDelete = document.createElement('button')
       btnDelete.classList.add('btn','delete-todo')
       /*
        Aroow funcitons SEMPRE são anônimas
       */
       btnDelete.addEventListener('click', () => {
        /* 
            Descobrir o indice do elemento dentro do array

            indexOf informa em qual indice se encontra um determinado valor dentro do seu array.
            Se ele não achar o valor dentro do array, ele retorna -1
        */
        const index = todos.indexOf(tarefa)
       
       // splice serve para excluir um determinado valor dos eu array apartir do seu indece
        todos.splice(index, 1)
        renderizarTodos() // equivale a atualizar a pagina


       })

       const spanIcon = document.createElement('span')
       spanIcon.classList.add('material-symbols-outlined')
       spanIcon.innerText = 'delete'

        /*
            appendChild serve para colocar um novo elementos HTML dentro de outro
        */

        btnDelete.appendChild(spanIcon)
         /*
            append serve para colocar um ou mais novos elementos HTML dentro de outro
        */
        divCardBody.append(pTodoText, btnDelete)
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)
    }
}

