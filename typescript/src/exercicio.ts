function multiplicar(num1: number, num2: number): number {
    const multiplicacao = num1 * num2;
    return multiplicacao;
};
const resultado = multiplicar(2, 2);
console.log(resultado);

function saudacao(nome: string,): string {
    return `Olá ${nome}`;
};
const seuname = "ezequiel";
const saudacaoNome = saudacao(nome);
console.log(saudacaoNome);