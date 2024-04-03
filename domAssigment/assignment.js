/*                              Task 1                                */


const task1 = document.getElementById('task-1')
let number = 0
const task1Press = () => {
    if (number === 0) {
        number = 1
        task1.style.backgroundColor = 'black'
        task1.style.color = 'white'
        task1.style.border = 'white'
    } else {
        number = 0
        task1.style.backgroundColor = '#fa923f'
        task1.style.color = 'black'
        task1.style.border = 'black'
    }
}

task1.addEventListener('click', task1Press)


/*                              Task 2                                */


const title = document.querySelector('head title')
title.textContent = "Tarefa- Resolvido!" 


/*                              Task 3                                */


const h1 = document.querySelector('h1')
h1.textContent = "Tarefa- Resolvido!" 