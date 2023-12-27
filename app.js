// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm)
document.querySelector('.clearAll').addEventListener('click', handleClearList)

// Event Handlers
function handleSubmitForm(e) {
    e.preventDefault()
    let input = document.querySelector('input')
    if (input.value != '') addTodo(input.value)
    input.value = ''
}

function handleClearList() {
    let ul = document.querySelector('ul')
    let listItems = ul.querySelectorAll('li')
    listItems.forEach(item => item.remove())
}

// Helpers
function addTodo(todo) {
    let ul = document.querySelector('ul')
    let li = document.createElement('li')

    li.innerHTML = `
        <div class="todoItem">
            <span>${todo}</span>
            <button name="checkButton">
                <i class="fas fa-check-square"></i>
            </button>
            <button name="deleteButton">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `

    ul.appendChild(li)

    let checkButton = li.querySelector('button[name="checkButton"]')
    checkButton.addEventListener('click', checkTodo)

    let deleteButton = li.querySelector('button[name="deleteButton"]')
    deleteButton.addEventListener('click', deleteTodo)
}

function checkTodo(event) {
    event.target.parentNode.querySelector('span').classList.toggle('todoItemDone')
}

function deleteTodo(event) {
    event.target.parentNode.remove()
}

