let num = [5,8,4]
num[3] = 6 // Adicionando elemento na posição 3
num.push(7) // metodo push adiciona um elemento no final do array
//num.length // Número de elementos
//num.sort() Método sorte coloca tudo em ordem crescente
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(`O vetor em ordem crescente ${num}`)
let pos = num.indexOf(8)
console.log(`O valor esta na posição ${pos}`)