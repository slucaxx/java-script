//  CRIANDO UM VETOR

const vetorNumeross= [10,20,30,40,50]

console.log("\nExibindo todos os elementos: ")
console.log(vetorNumeross)


console.log("\nExibindo apenas o primeiro elemento: ")
console.log(vetorNumeross[1])


console.log("Exibindo apenas o terceiro elemento: ")
console.log(vetorNumeross[2])

console.log("Exibindo apenas o quarto elemento: ")
console.log(vetorNumeross[3])

console.log("adicinando um elemento no final do vetor: ")
vetorNumeross.push(60)
console.log(vetorNumeross)

console.log("adicinando um elemento no inicio do vetor: ")
vetorNumeross.unshift(0)
console.log(vetorNumeross)


// REMOVA APENAS O ULTIMO ELEMENT DO VETOR

console.log("\nremova apenas o primeiro elemento do vetor: ")
vetorNumeross.shift()
console.log(vetorNumeross)