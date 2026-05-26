let nomes = [];
let idades = [];

// lê os dados das 9 pessoas
for (let i = 0; i < 9; i++) {
    // lê o nome
    nomes[i] = prompt(`Digite o nome da ${i + 1}ª pessoa:`);
    // lê a idade
    idades[i] = Number(prompt(`Digite a idade de ${nomes[i]}:`));
}

// mostra apenas os menores de idade
console.log("Pessoas menores de idade:");
// percorre os vetores
for (let i = 0; i < 9; i++) {
    // verifica se a idade é menor que 18
    if (idades[i] < 18) {
        // mostra nome e idade
        console.log(`Nome: ${nomes[i]} | Idade: ${idades[i]}`);
    }
}