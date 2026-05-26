// CIRANDO YM VETOR

const vetorNumeross = [10,20,30,40,50]
console.log(vetorNumeross)

console.log("\nmultiplicando cada elemento do vetor por 3: ")
const dobrados =vetorNumeross.map ( n => n*2)
console.log(dobrados)

console.log("\nfiltrando elementos impares: ")
vetorNumeross.push(1)
vetorNumeross.push(3)
const impares= vetorNumeross.filter( n => n % 2 == 1)
console.log(impares)

console.log("\nfiltrando elementos pares: ")
const pares= vetorNumeross.filter( n => n % 2 == 0)
console.log(pares)

console.log("\nfiltrando elementos negativos")
vetorNumeross.push(-10)
vetorNumeross.push(-30)
const negativos =vetorNumeross.filter(n => n < 0)
console.log(negativos)

console.log("\nsomando todos os elementos do vetor")
const total =vetorNumeross.reduce((soma,atual) => soma + atual , 0)
console.log(total)




