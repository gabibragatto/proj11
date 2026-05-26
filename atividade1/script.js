let nomes = [];

// lê os 7 nomes
for (let i = 0; i < 7; i++) {

    // pede o nome ao usuário
    let nome = prompt(`Digite o ${i + 1}º nome:`);
    // guarda o nome no vetor
    nomes[i] = nome;
}

// mostra os nomes na ordem inversa
console.log("Nomes na ordem inversa:");

// percorre o vetor de trás para frente
for (let i = 6; i >= 0; i--) {
    console.log(nomes[i]);
}