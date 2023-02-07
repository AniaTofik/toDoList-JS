let todoInput, errorInfo, addBtn, ulList, newTodo, popup, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloseBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
    
}
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addTask)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
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

const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editTodo()
    } else if (e.target.matches('.delete')) {
        e.target.closest('li').remove()
}
}

const editTodo = () => {
    popup.style.display = "flex"
}

const closePopup = () => {
   popup.style.display = "none"
}

document.addEventListener('DOMContentLoaded', main)
