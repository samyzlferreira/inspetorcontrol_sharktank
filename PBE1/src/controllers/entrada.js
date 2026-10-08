let entradas = []

const cadastrar = (req, res) => {
    const {
        sala_id,
        aluno_id,
        data,
        horario,
        motivo
    } = req.body

    const novaEntrada = {
        id: entradas.length + 1,
        sala_id,
        aluno_id,
        data,
        horario,
        motivo
    }

    entradas.push(novaEntrada)

    res.status(201).json({
        message: "Entrada atrasada registrada com sucesso",
        entrada: novaEntrada
    })
}

const listar = (req, res) => {
    res.json(entradas)
}

module.exports = {
    cadastrar,
    listar
}