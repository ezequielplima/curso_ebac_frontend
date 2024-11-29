"use strict";

var alunos = [{
  nome: 'Paulo',
  nota: 5.5
}, {
  nome: 'Daniel',
  nota: 6.1
}, {
  nome: 'Joao',
  nota: 8
}, {
  nome: 'Eze',
  nota: 10
}, {
  nome: 'Judas',
  nota: 2
}];
function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var arrayAlunosAprovados = alunosAprovados(alunos);
console.log('Alunos aprovados:');
console.log(arrayAlunosAprovados);