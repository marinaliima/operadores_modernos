const pedido = {
    cliente: {
        nome: "Pedro"
    }
};

const telefone = pedido.cliente?.telefone ?? "Telefone não informado";
console.log(telefone);