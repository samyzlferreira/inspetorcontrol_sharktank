let salas = []

const cadastrar = (req, res) => {
    const { nome } = req.body

    const novaSala = {
        id: salas.length + 1,
        nome
    }

    salas.push(novaSala)

    res.status(201).json({
        message: "Sala cadastrada com sucesso",
        sala: novaSala
    })
}

const listar = (req, res) => {
    res.json(salas)
}

module.exports = {
    cadastrar,
    listar
}