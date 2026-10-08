let documentos = []

const cadastrar = (req, res) => {
    const {
        sala_id,
        aluno_id,
        nome_documento,
        tipo,
        data,
        arquivo,
        observacoes
    } = req.body

    const novoDocumento = {
        id: documentos.length + 1,
        sala_id,
        aluno_id,
        nome_documento,
        tipo,
        data,
        arquivo,
        observacoes,
        validado: false
    }

    documentos.push(novoDocumento)

    res.status(201).json({
        message: "Documento registrado com sucesso",
        documento: novoDocumento
    })
}

const listar = (req, res) => {
    res.json(documentos)
}

module.exports = {
    cadastrar,
    listar
}