const button = document.getElementById('button')
const inputNum = document.getElementById('num')
const sumka = document.getElementById('sum')

const uno1 = new Promise((resolve, reject) => {
	button.onclick = function () {
		sumka.className = "_animation";
		let uno = inputNum.value * 10
		console.log(uno)
		sumka.innerHTML = uno
		resolve(uno)
	}
})

uno1.then((duo) =>
	new Promise((resolve, reject) => {
		button.onclick = function () {
			sumka.className = "_animation2";
			duo = duo + 20
			console.log(duo)
			sumka.innerHTML = duo
			resolve(duo)
		}
	})).then((tree) => {
		button.onclick = function () {
			sumka.className = "_animation3";
			sumka.innerHTML = 'Ты пидор'
		}
	})


function animation() {
	sumka.classList.remove('_animation')
	sumka.classList.add('_animation')
}