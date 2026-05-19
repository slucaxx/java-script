const idade= 26

if (idade >=18) {
    console.log("voto obrigatorio")
} else if  (idade == 16 || idade == 17) {
    console.log("voto opcional")
}else if (idade < 16) {
    console.log("nao podem votar")
}else if (idade >= 65) {
    console.log("nao são obrigados a votar")
} else {
    console.log("idade invalida")
}