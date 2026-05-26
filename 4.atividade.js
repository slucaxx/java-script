// calcule a media aritimetica do vetor
// utilize os recusos do ES6

notas = [10, 10, 10]


const soma = notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);


const media = soma / notas.length;

// 3. Exibimos o resultado no console
console.log(`A média é: ${media}`)