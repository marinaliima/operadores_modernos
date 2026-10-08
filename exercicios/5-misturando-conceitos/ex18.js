const aluno = {
    nota: 0
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);

// || : Imprime 10, porque o código substitui o 0 (falsy) pelo valor padrão.
// ?? : Imprime 0, porque o código só substitui valores nulos ou indefinidos.