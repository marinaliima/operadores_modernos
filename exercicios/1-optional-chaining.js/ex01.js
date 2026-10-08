const aluno = {
    nome: "Carlos",
    endereco: {
        cidade: "São Paulo"
    }
};

console.log(`Cidade de ${aluno.nome}: ${aluno?.endereco?.cidade}`);