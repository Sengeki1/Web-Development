const addFilmeBtn = document.querySelector('header button')
const addFilme = document.getElementById('add-modal') 
const cancelBtn = document.querySelector('.btn--passive')
const backdrop = document.getElementById('backdrop')

const addMovie = () => {
    addFilme.classList.toggle('visible')
    backdrop.classList.toggle('visible')
}

const cancelMovie = () => {
    addFilme.classList.remove('visible')
    backdrop.classList.remove('visible')
}

addFilmeBtn.addEventListener('click', addMovie)
cancelBtn.addEventListener('click', cancelMovie)