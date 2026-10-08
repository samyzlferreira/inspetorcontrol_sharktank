let ocorrencias = []

const cadastrar = (req, res) => {
    const {
        sala_id,
        data,
        descricao
    } = req.body

    const novaOcorrencia = {
        id: ocorrencias.length + 1,
        sala_id,
        data,
        descricao
    }

    ocorrencias.push(novaOcorrencia)

    res.status(201).json({
        message: "Ocorrência registrada com sucesso",
        ocorrencia: novaOcorrencia
    })
}

const listar = (req, res) => {
    res.json(ocorrencias)
}

module.exports = {
    cadastrar,
    listar
}