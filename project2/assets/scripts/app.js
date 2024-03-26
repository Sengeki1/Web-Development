const VALOR_ATAQUE = 10
let maxVida = 100
let valorActualVidaM = maxVida
let valorActualVidaP = maxVida
let healVida = 10
let strongAttack = 20

let data = []

const ataque = () => {
	const perda = dealMonsterDamage(VALOR_ATAQUE)
	valorActualVidaM -= perda

	const perdaPlayer = dealPlayerDamage(VALOR_ATAQUE)
	valorActualVidaP -= perdaPlayer

	data.push({
			perdaMonstro: perda,
			perdaPlayer: perdaPlayer 
		})

	if (valorActualVidaM < 0 && valorActualVidaP > 0) {
		alert('venceu!')
		adjustHealthBars(maxVida)
		valorActualVidaM = maxVida
		valorActualVidaP = maxVida
	} else if (valorActualVidaP <= 0 && valorActualVidaM > 0) {
		alert('perdeu!')
		adjustHealthBars(maxVida)
		valorActualVidaM = maxVida
		valorActualVidaP = maxVida	

	} else if (valorActualVidaP <= 0 && valorActualVidaM <= 0) {
		alert('impate!')
		adjustHealthBars(maxVida)
		valorActualVidaM = maxVida
		valorActualVidaP = maxVida	
	}
}

const heal = () => {
	const choose = Math.floor(Math.random() * 2)
	if (choose === 1 && valorActualVidaP <= maxVida) {
		increasePlayerHealth(healVida)
		valorActualVidaP += healVida
	} else if (choose === 0 && valorActualVidaM <= maxVida) {
		increaseMonsterHealth(healVida)
		valorActualVidaM += healVida
	}

	data = data.map(item => {
		return {
			...item, 
			healMonstro: healVida,
			perdaPlayer: healVida 
		}
	})

}

const strongAttackk = () => {	
	const perda = dealMonsterDamage(strongAttack)
	valorActualVidaM -= perda
		
	const perdaPlayer = dealPlayerDamage(strongAttack)
	valorActualVidaP -= perdaPlayer

	data = data.map(item => {
		return {
			...item, 
			perdaForteMonstro: perda,
			perdaForteePlayer: perdaPlayer 
		}
	})

	if (valorActualVidaM < 0 && valorActualVidaP > 0) {
		alert('venceu!')
		adjustHealthBars(maxVida)
		valorActualVidaM = maxVida
		valorActualVidaP = maxVida
	} else if (valorActualVidaP <= 0 && valorActualVidaM > 0) {
		alert('perdeu!')
		adjustHealthBars(maxVida)
		valorActualVidaM = maxVida
		valorActualVidaP = maxVida
	} else if (valorActualVidaP <= 0 && valorActualVidaM <= 0) {
		alert('impate!')
		adjustHealthBars(maxVida)
		valorActualVidaM = maxVida
		valorActualVidaP = maxVida
	}
}

const showLog = () => {
	console.log(data)
}

attackBtn.addEventListener('click', ataque)
healBtn.addEventListener('click', heal)
strongAttackBtn.addEventListener('click', strongAttackk)
logBtn.addEventListener('click', showLog)