let numeros = [];
let soma = 0;

// lê os 8 números
for (let i = 0; i < 8; i++) {
    // recebe o número
    numeros[i] = Number(prompt(`Digite o ${i + 1}º número:`));
    // adiciona na soma
    soma += numeros[i];
}

// calcula a média
let media = soma / 8;
// mostra a média
console.log("Média:", media);
// mostra os valores acima da média
console.log("Valores acima da média:");
// percorre o vetor
for (let i = 0; i < 8; i++) {
    // verifica se o número é maior que a média
    if (numeros[i] > media) {
        console.log(numeros[i]);
    }
}