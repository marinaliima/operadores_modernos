const usuario = {
    perfil: {
        nome: "Maria"
    }
};

const nome = usuario.perfil?.nome ?? "Sem nome";
console.log(nome);