const numeros = [12, 35, 47, 1, 98, 132]
const nomes = ['Tayrone', 'Renata', 'Brutus', 'Rosangela', 'Zunária']
const arrTiposVariados = [12.5, 'Renatinha', 'UEG', 'Aprovada', 10>=9, 5<4]

//a)
const qtdItensNumeros = numeros.length
const qtdItensNomes = nomes.length
const qtdItensArrTiposVariados = arrTiposVariados.length

console.log(qtdItensNumeros)
console.log(qtdItensNomes)
console.log(qtdItensArrTiposVariados)

//b)
const primeiroItemNumeros = numeros[0]
const segundoItemNomes = nomes[1]
const terceiroItemArrTiposVariados = arrTiposVariados[2]

console.log(primeiroItemNumeros)
console.log(segundoItemNomes)
console.log(terceiroItemArrTiposVariados)

//c)
const temUmEmNumeros = numeros.includes(1)
const temUmEmArrTiposVariados = arrTiposVariados.includes(1)

console.log(temUmEmNumeros)
console.log(temUmEmArrTiposVariados)

