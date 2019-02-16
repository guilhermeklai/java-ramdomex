let meninos = ['João','Noah','Zequinha', 'Lucas', 'Josias'];

let meninas = ['Mariana', 'Flavia', 'Guilhermina', 'Kathia', 'Giovanna'];

let casais = [];

for (i = 0; i < meninos.length; i++){
    for(i = 0; i < meninas.length; i++)
    casais.push(`${meninos[1]} + ${meninas[i]}`);
    console.log(casais);
}



// LAÇO NO VETOR DOS MENINOS
//     LAÇO NO VETOR DAS MENINAS
//         ADICIONAR O CASAL NO VETOR CASAIS