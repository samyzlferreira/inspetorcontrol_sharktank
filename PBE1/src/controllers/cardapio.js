let cardapios = []

const cadastrar = (req, res) => {
    const {
        data_inicio,
        data_fim,
        nutricionista,
        arquivo
    } = req.body

    const novoCardapio = {
        id: cardapios.length + 1,
        data_inicio,
        data_fim,
        nutricionista,
        arquivo
    }

    cardapios.push(novoCardapio)

    res.status(201).json({
        message: "Cardápio cadastrado com sucesso",
        cardapio: novoCardapio
    })
}

const listar = (req, res) => {
    res.json(cardapios)
}

module.exports = {
    cadastrar,
    listar
}