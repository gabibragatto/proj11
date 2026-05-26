let vetor1 = [];
let vetor2 = [];
let intersecao = [];

// lê os valores do primeiro e segundo vetor
for (let i = 0; i < 5; i++) {
    vetor1[i] = Number(prompt(`Digite o ${i + 1}º valor do vetor 1:`));
    vetor2[i] = Number(prompt(`Digite o ${i + 1}º valor do vetor 2:`));
}

// variável para controlar a posição do vetor interseção

let posicao = 0;
// percorre o primeiro vetor
for (let i = 0; i < 5; i++) {
    // percorre o segundo vetor
    for (let j = 0; j < 5; j++) {
        // verifica se os valores são iguais
        if (vetor1[i] === vetor2[j]) {
            // variável para verificar repetição
            let repetido = false;
            // percorre o vetor interseção
            for (let k = 0; k < posicao; k++) {
                // verifica se já existe no vetor
                if (intersecao[k] === vetor1[i]) {
                    repetido = true;
                }
            }

            // adiciona apenas se não estiver repetido
            if (repetido === false) {
                intersecao[posicao] = vetor1[i];
                posicao++;
            }
        }
    }
}

// mostra os valores em comum
console.log("Elementos em comum:");
for (let i = 0; i < posicao; i++) {
    console.log(intersecao[i]);
}