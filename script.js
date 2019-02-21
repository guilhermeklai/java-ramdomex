let meninos = ['João','Noah','Zequinha', 'Lucas', 'Josias'];

let meninas = ['Mariana', 'Flavia', 'Guilhermina', 'Kathia', 'Giovanna'];

let casais = [];

for (i = 0; i < meninos.length; i++){
    for(j = 0; j < meninas.length; j++)
    casais.push(`${meninos[i]} + ${meninas[j]}`);
}
console.log(casais);



// LAÇO NO VETOR DOS MENINOS
//     LAÇO NO VETOR DAS MENINAS
//         ADICIONAR O CASAL NO VETOR CASAIS