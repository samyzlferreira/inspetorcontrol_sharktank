let frequencias = []

const cadastrar = (req, res) => {
    const {
        sala_id,
        data,
        alunos_presentes,
        alunos_faltantes
    } = req.body

    const novaFrequencia = {
        id: frequencias.length + 1,
        sala_id,
        data,
        alunos_presentes,
        alunos_faltantes
    }

    frequencias.push(novaFrequencia)

    res.status(201).json({
        message: "Frequência registrada com sucesso",
        frequencia: novaFrequencia
    })
}

const listar = (req, res) => {
    res.json(frequencias)
}

module.exports = {
    cadastrar,
    listar
}