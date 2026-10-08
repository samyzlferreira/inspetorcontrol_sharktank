let alunos = []

const cadastrar = (req, res) => {
    const { nome, matricula, sala_id } = req.body

    const novoAluno = {
        id: alunos.length + 1,
        nome,
        matricula,
        sala_id
    }

    alunos.push(novoAluno)

    res.status(201).json({
        message: "Aluno cadastrado com sucesso",
        aluno: novoAluno
    })
}

const listar = (req, res) => {
    res.json(alunos)
}

module.exports = {
    cadastrar,
    listar
}