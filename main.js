let todoInput, erroeInfo, addBtn, ulList, newTodo

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    
}
const prepareDOMEvents = () => {
    // nadajemy nasłuchiwanie
    addBtn.addEventListener('click', addTask)
}

const addTask = () => {
    if (todoInput.value !== '' ){
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
         ulList.append(newTodo)
         todoInput.value = ''
         errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz tre zadania'
    }
}


document.addEventListener('DOMContentLoaded', main)