let refeicoes = []

const cadastrar = (req, res) => {
    const {
        cardapio_id,
        dia_semana,
        periodo,
        descricao
    } = req.body

    const novaRefeicao = {
        id: refeicoes.length + 1,
        cardapio_id,
        dia_semana,
        periodo,
        descricao
    }

    refeicoes.push(novaRefeicao)

    res.status(201).json({
        message: "Refeição cadastrada com sucesso",
        refeicao: novaRefeicao
    })
}

const listar = (req, res) => {
    res.json(refeicoes)
}

module.exports = {
    cadastrar,
    listar
}