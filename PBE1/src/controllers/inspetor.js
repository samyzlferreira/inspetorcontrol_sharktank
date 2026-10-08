let inspetores = []

const cadastrar = (req, res) => {
    const { nome } = req.body

    const novoInspetor = {
        id: inspetores.length + 1,
        nome
    }

    inspetores.push(novoInspetor)

    res.status(201).json({
        message: "Inspetor cadastrado com sucesso",
        inspetor: novoInspetor
    })
}

const listar = (req, res) => {
    res.json(inspetores)
}

module.exports = {
    cadastrar,
    listar
}