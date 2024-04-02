const addFilmeBtn = document.querySelector('header button')
const addFilme = document.getElementById('add-modal') 
const cancelBtn = document.querySelector('.btn--passive')
const backdrop = document.getElementById('backdrop')
const btnConfirmAdd = cancelBtn.nextElementSibling

const title = document.getElementById('title')
const image = document.getElementById('image-url')
const classification = document.getElementById('rating')
const listMovies = document.getElementById('movie-list')

const msgText = document.getElementById('entry-text')

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
	
	const list = filmes.map(item => {
		return `
		<ul id='movie-list-child'>
			<img src='${item.image}'>
			<li>Name: ${item.title}</li>
			<li>Classification: ${item.classification}</li>
		</ul>
	`
	})
	
	listMovies.innerHTML = list

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
	console.log(filmes)
}

addFilmeBtn.addEventListener('click', addMovie)
cancelBtn.addEventListener('click', cancelMovie)
btnConfirmAdd.addEventListener('click', btnConfirmAddHandler)
