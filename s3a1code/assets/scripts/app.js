const addFilmeBtn = document.querySelector('header button')
const addFilme = document.getElementById('add-modal') 
const cancelBtn = document.querySelector('.btn--passive')
const cancelDeleteBtn = document.querySelector('#delete-modal .btn--passive')
const backdrop = document.getElementById('backdrop')
const deleteMovie = document.getElementById('delete-modal')
const btnConfirmAdd = cancelBtn.nextElementSibling
const btnConfirmDelete = cancelDeleteBtn.nextElementSibling

const title = document.getElementById('title')
const image = document.getElementById('image-url')
const classification = document.getElementById('rating')
const listMovies = document.getElementById('movie-list')

const msgText = document.getElementById('entry-text')

let movieItem

const filmes = []

const addMovie = () => {
    addFilme.classList.add('visible')
    backdrop.classList.toggle('visible')
}

const cancelMovie = () => {
    addFilme.classList.remove('visible')
    backdrop.classList.toggle('visible')
}

const updateList = () => {

    if (filmes.length === 0) {
        msgText.style.display = 'block'
    } else {
        msgText.style.display = 'none'
    }
    
    const listItems = filmes.map(item => {
        return `
        <div id="movie-item" data-id="${item.id}">
            <img src='${item.image}'>
            <div id="movie-details">
                <h3>${item.title}</h3>
                <p>${item.classification} / 5</p>
            </div>
        </div>
        `
    });
    
    listMovies.innerHTML = listItems.join('')

}

const btnConfirmAddHandler = () => {
	
	const titleField = title.value
	const imageField = image.value
	const ClassField = classification.value

	if (titleField.trim() === '' || imageField.trim() === '' || ClassField.trim() === '') {
        alert('precisa prencher os dados')
		return
    }
	
	const novoFilme = {
		id: Math.random().toString(),
		title: titleField,
		image: imageField,
		classification: ClassField
	}

	filmes.push(novoFilme)
	cancelMovie()

	/* Atualizar Lista */
	updateList()
}

const btnDeleteMovie = (event) => {

    if (event.target.id === ('movie-item')) {
        deleteMovie.classList.add('visible')
        backdrop.classList.add('visible')
    }

    movieItem = event.target.closest('#movie-item')
    
}

const cancelDeleteMovie = () => {
    deleteMovie.classList.remove('visible')
    backdrop.classList.remove('visible')
}

const confirmDeleteMovie = () => {
    deleteMovie.classList.remove('visible')
    backdrop.classList.remove('visible')

    if (movieItem) {
        const movieId = movieItem.dataset.id // access the data attribute (id)
        const index = filmes.findIndex(movie => movie.id === movieId) // Find the index of the movie object in the filmes array 
        if (index !== -1) { // If movie object is found
            filmes.splice(index, 1) // Remove the movie object from the array
            updateList()
        }
    }
}

addFilmeBtn.addEventListener('click', addMovie)
cancelBtn.addEventListener('click', cancelMovie)
btnConfirmAdd.addEventListener('click', btnConfirmAddHandler)
listMovies.addEventListener('click', btnDeleteMovie)
cancelDeleteBtn.addEventListener('click', cancelDeleteMovie)
btnConfirmDelete.addEventListener('click', confirmDeleteMovie)




