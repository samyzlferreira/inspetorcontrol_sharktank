let saidas = []

const cadastrar = (req, res) => {
    const {
        sala_id,
        aluno_id,
        data,
        horario,
        motivo
    } = req.body

    const novaSaida = {
        id: saidas.length + 1,
        sala_id,
        aluno_id,
        data,
        horario,
        motivo
    }

    saidas.push(novaSaida)

    res.status(201).json({
        message: "Saída antecipada registrada com sucesso",
        saida: novaSaida
    })
}

const listar = (req, res) => {
    res.json(saidas)
}

module.exports = {
    cadastrar,
    listar
}