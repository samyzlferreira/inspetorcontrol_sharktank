const express = require("express")
const router = express.Router()

const sala = require("./controllers/sala")
const aluno = require("./controllers/aluno")
const inspetor = require("./controllers/inspetor")
const frequencia = require("./controllers/frequencia")
const falta = require("./controllers/falta")
const saida = require("./controllers/saida")
const entrada = require("./controllers/entrada")
const medicamento = require("./controllers/medicamento")
const ocorrencia = require("./controllers/ocorrencia")
const documento = require("./controllers/documento")
const cardapio = require("./controllers/cardapio")
const refeicao = require("./controllers/refeicao")

const rotaInicial = (req, res) =>{
    res.json("Back-end InspretorControl respondendo")
}

router.get("/", rotaInicial)

router.get("/salas", sala.listar)
router.post("/salas", sala.cadastrar)

router.get("/alunos", aluno.listar)
router.post("/alunos", aluno.cadastrar)

router.get("/inspetores", inspetor.listar)
router.post("/inspetores", inspetor.cadastrar)

router.get("/frequencias", frequencia.listar)
router.post("/frequencias", frequencia.cadastrar)

router.get("/faltas", falta.listar)
router.post("/faltas", falta.cadastrar)

router.get("/saidas", saida.listar)
router.post("/saidas", saida.cadastrar)

router.get("/entradas", entrada.listar)
router.post("/entradas", entrada.cadastrar)

router.get("/medicamentos", medicamento.listar)
router.post("/medicamentos", medicamento.cadastrar)

router.get("/ocorrencias", ocorrencia.listar)
router.post("/ocorrencias", ocorrencia.cadastrar)

router.get("/documentos", documento.listar)
router.post("/documentos", documento.cadastrar)

router.get("/cardapios", cardapio.listar)
router.post("/cardapios", cardapio.cadastrar)

router.get("/refeicoes", refeicao.listar)
router.post("/refeicoes",refeicao.cadastrar)

module.exports = router