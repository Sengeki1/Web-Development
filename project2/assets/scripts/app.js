const VALOR_ATAQUE = 10
let maxVida = 100
let valorActualVidaM = maxVida
let valorActualVidaP = maxVida
let healVida = 10
let strongAttack = 20

const ataque = () => {
	const perda = dealMonsterDamage(VALOR_ATAQUE)
	valorActualVidaM -= perda

	const perdaPlayer = dealPlayerDamage(VALOR_ATAQUE)
	valorActualVidaP -= perdaPlayer

	
	if (valorActualVidaM < 0 && valorActualVidaP > 0) {
		alert('venceu!')
	} else if (valorActualVidaP <= 0 && valorActualVidaM > 0) {
		alert('perdeu!')
	} else if (valorActualVidaP <= 0 && valorActualVidaM <= 0) {
		alert('impate!')
	}
}

const heal = () => {
	const choose = Math.floor(Math.random() * 2)
	if (choose === 1) {
		increasePlayerHealth(healVida)
		valorActualVidaP += heal
	} else {
		increaseMonsterHealth(healVida)
		valorActualVidaM += heal
	}
}

const strongAttackk = () => {
	const perda = dealMonsterDamage(strongAttack)
	valorActualVidaM -= perda

	if (valorActualVidaM < 0 && valorActualVidaP > 0) {
		alert('venceu!')
	} else if (valorActualVidaP <= 0 && valorActualVidaM > 0) {
		alert('perdeu!')
	} else if (valorActualVidaP <= 0 && valorActualVidaM <= 0) {
		alert('impate!')
	}
}



attackBtn.addEventListener('click', ataque)
healBtn.addEventListener('click', heal)
strongAttackBtn.addEventListener('click', strongAttackk)
