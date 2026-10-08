let medicamentos = []

const cadastrar = (req, res) => {
    const {
        sala_id,
        aluno_id,
        inspetor_id,
        data,
        horario
    } = req.body

    const novoMedicamento = {
        id: medicamentos.length + 1,
        sala_id,
        aluno_id,
        inspetor_id,
        data,
        horario
    }

    medicamentos.push(novoMedicamento)

    res.status(201).json({
        message: "Entrega de medicamento registrada com sucesso",
        medicamento: novoMedicamento
    })
}

const listar = (req, res) => {
    res.json(medicamentos)
}

module.exports = {
    cadastrar,
    listar
}