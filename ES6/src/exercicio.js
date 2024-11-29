const alunos = [
    { nome: 'Paulo', nota: 5.5 },
    { nome: 'Daniel', nota: 6.1 },
    { nome: 'Joao', nota: 8 },
    { nome: 'Eze', nota: 10 },
    { nome: 'Judas', nota: 2 },
];
function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}
const arrayAlunosAprovados = alunosAprovados(alunos);
console.log('Alunos aprovados:');
console.log(arrayAlunosAprovados);