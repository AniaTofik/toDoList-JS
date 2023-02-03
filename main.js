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
    addBtn.addEventListener('click', addTask)
}

const addTask = () => {
    if (todoInput.value !== '' ){
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        createToolsArea()
         ulList.append(newTodo)
         todoInput.value = ''
         errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz tre zadania'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const btnComplete = document.createElement('button')
    btnComplete.classList.add('complete')
    btnComplete.innerHTML = '<i class="fas fa-check"></i>'
    
    const btnEdit = document.createElement('button')
    btnEdit.classList.add('edit')
    btnEdit.textContent = 'EDIT'
    
    const btnDelete = document.createElement('button')
    btnDelete.classList.add('delete')
    btnDelete.innerHTML = '<i class="fas fa-times"></i>'
    
    toolsPanel.append(btnComplete, btnEdit, btnDelete)  
}

document.addEventListener('DOMContentLoaded', main)