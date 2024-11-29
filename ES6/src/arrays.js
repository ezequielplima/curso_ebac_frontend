const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice}eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2)

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula' // true or false
})

console.log(paula)


const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paul' // true or false
})
console.log(indiceDaPaula)


//every
alunos2.push({
    nome: "Lucio",
    curso: "Backend"
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoDeFrontend);

const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend);

function filtraAlunosBackend(aluno) {
    return aluno.curso === 'Backend';
}
const alunosDeBackend = alunos2.filter(filtraAlunosBackend)

console.log(alunosDeBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i]
}

console.log(somaComFor);

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')
console.log(nomeDosAlunos);


