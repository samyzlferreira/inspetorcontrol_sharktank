let faltas = []

const cadastrar = (req, res) => {
    const {
        sala_id,
        aluno_id,
        data
    } = req.body

    const novaFalta = {
        id: faltas.length + 1,
        sala_id,
        aluno_id,
        data
    }

    faltas.push(novaFalta)

    res.status(201).json({
        message: "Falta registrada com sucesso",
        falta: novaFalta
    })
}

const listar = (req, res) => {
    res.json(faltas)
}

module.exports = {
    cadastrar,
    listar
}