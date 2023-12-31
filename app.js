// Event Listeners

document.querySelector('form')
    .addEventListener('submit', handleSubmitForm)

document.querySelector('.todoList button')
    .addEventListener('click', handleDeleteTodos)

function addTodoItemEventListeners(todoItem) {
    todoItem.querySelector('button[name="checkButton"]')
        .addEventListener('click', handleCheckTodo)

    todoItem.querySelector('button[name="deleteButton"]')
        .addEventListener('click', handleDeleteTodo)
}

// Event Handlers

function handleSubmitForm(e) {
    e.preventDefault()
    let input = document.querySelector('form input')
    if (input.value != '') addTodo(input.value)
    input.value = ''
}

function handleDeleteTodos() {
    document.querySelectorAll('ul li').forEach((item) => {
        item.removeEventListener('click', handleCheckTodo)
        item.removeEventListener('click', handleDeleteTodo)
        item.remove()
    })
}

function handleCheckTodo(event) {
    this.parentNode.querySelector('span')
        .classList.toggle('todoItemDone')
}

function handleDeleteTodo(event) {
    this.parentNode.remove()
}


// Helpers
function addTodo(todo) {
    let ul = document.querySelector('ul')
    let li = document.createElement('li')

    li.innerHTML = `
        <div class="todoItem">
            <span>${todo}</span>
            <button type="button" name="checkButton">
                <i class="fas fa-check-square"></i>
            </button>
            <button type="button" name="deleteButton">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `

    ul.appendChild(li)

    addTodoItemEventListeners(li)
}


