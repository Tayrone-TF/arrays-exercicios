const numeros = [12, 35, 47, 1, 98, 132]
const nomes = ['Tayrone', 'Renata', 'Brutus', 'Rosangela', 'Zunária']
const arrTiposVariados = [12.5, 'Renatinha', 'UEG', 'Aprovada', 10>=9, 5<4]

//a)
const numerosCopy = numeros.slice()
const nomesCopy = nomes.slice()
const arrTiposVariadosCopy = arrTiposVariados.slice()

numerosCopy.unshift(1000)
//console.log(numerosCopy)

//b)
nomesCopy.pop()
//console.log(nomesCopy)

//c)
arrTiposVariadosCopy.splice(1,1)
//console.log(arrTiposVariadosCopy)