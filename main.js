let todoInput, erroeInfo, addBtn, ulList

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todoList ul')
    
}
const prepareDOMEvents = () => {
    
}

document.addEventListener('DOMContentLoaded', main)